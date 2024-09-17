import { lazy } from "react";
import { paths } from "./paths";
import { Navigate } from "react-router-dom";
import { AppRoute } from "../components";
import { Home, Resume, Projects, Contact } from "../pages";

export const RedirectToHomePage = () => {
  return <Navigate to={paths.home} />;
};

export const routes: AppRoute[] = [
  {
    path: paths.root,
    Component: RedirectToHomePage,
  },
  {
    path: paths.dashboard,
    Component: lazy(() => import("../pages/Dashboard")),
    nestedRoutes: [
      {
        path: paths.home,
        Component: Home,
      },
      {
        path: paths.resume,
        Component: Resume,
      },
      {
        path: paths.projects,
        Component: Projects,
      },
      {
        path: paths.contact,
        Component: Contact,
      },
    ],
  },
];
