import { AnimatePresence } from "framer-motion";
import { ComponentType, LazyExoticComponent, ReactElement } from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";

export interface AppRoute {
  path?: string;
  Component: LazyExoticComponent<ComponentType> | ComponentType;
  nestedRoutes?: AppRoute[];
  index?: boolean;
}

interface AppRouterProps {
  NotFoundRouteComponent: AppRoute["Component"];
  routes: AppRoute[];
  renderRoutes?: (routes: ReactElement) => ReactElement;
}

export const AppRouter = ({
  NotFoundRouteComponent,
  routes,
  renderRoutes = (v) => v,
}: AppRouterProps) => {
  return (
    <AnimatePresence mode="wait">
      <Router>
        {renderRoutes(
          <Routes>
            {renderRouterRoutes(routes)}
            <Route path="*" element={<NotFoundRouteComponent />} />
          </Routes>,
        )}
      </Router>
    </AnimatePresence>
  );
};

const renderRouterRoutes = (routes: AppRoute[] = []) =>
  routes.map(({ nestedRoutes, path, Component, index }, i) => {
    if (index) {
      const componentKey = Component.name || "index-route";
      return <Route key={componentKey} index element={<Component />} />;
    }

    return (
      <Route key={path || i} path={path} element={<Component />}>
        {nestedRoutes && renderRouterRoutes(nestedRoutes)}
      </Route>
    );
  });
