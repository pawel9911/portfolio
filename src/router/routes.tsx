import { lazy } from "react";
import { paths } from "./paths";
import { Navigate } from "react-router-dom";
import { AppRoute } from "@components";
import { Contact } from "../features/contact";
import { Home } from "../features/home";
import { Resume } from "../features/resume";

export const RedirectToHomePage = () => {
  return <Navigate to={paths.dashboard} />;
};

export const routes: AppRoute[] = [
  {
    path: paths.dashboard,
    Component: lazy(() => import("../pages/Dashboard")),
    nestedRoutes: [
      {
        index: true,
        Component: Home,
      },
      {
        path: paths.resume,
        Component: Resume,
      },
      {
        path: paths.contact,
        Component: Contact,
      },
    ],
  },
];
