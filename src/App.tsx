import { AppRouter } from "./components";
import { RedirectToHomePage, routes } from "./router/routes";

function App() {
  return (
    <AppRouter
      NotFoundRouteComponent={RedirectToHomePage}
      routes={routes}
      renderRoutes={(children) => <>{children}</>}
    />
  );
}

export default App;
