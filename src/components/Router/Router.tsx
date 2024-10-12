import { AnimatePresence } from "framer-motion";
import { ComponentType, LazyExoticComponent, ReactElement } from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";

export interface AppRoute {
  path: string;
  Component: LazyExoticComponent<ComponentType> | ComponentType;
  nestedRoutes?: AppRoute[];
}

interface AppRouterProps {
  NotFoundRouteComponent: AppRoute["Component"];
  routes: AppRoute[];
  renderRoutes?: (routes: ReactElement) => ReactElement;
}

export function AppRouter({
  NotFoundRouteComponent,
  routes,
  renderRoutes = (v) => v,
}: AppRouterProps) {
  return (
    <AnimatePresence mode="wait">
      <Router>
        {renderRoutes(
          <Routes>
            {renderRouterRoutes(routes)}
            <Route path="*" element={<NotFoundRouteComponent />} />
          </Routes>
        )}
      </Router>
    </AnimatePresence>
  );
}

const renderRouterRoutes = (routes: AppRoute[] = []) =>
  routes.map(({ nestedRoutes, path, Component }) => (
    <Route key={path} path={path} element={<Component />}>
      {renderRouterRoutes(nestedRoutes)}
    </Route>
  ));
