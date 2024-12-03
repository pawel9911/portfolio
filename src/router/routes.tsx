import { lazy } from "react";
import { paths } from "./paths";
import { Navigate } from "react-router-dom";
import { AppRoute } from "@components";
import { ContactSection } from "../features/ContactSection";
import { HomeSection } from "../features/HomeSection";
import { Resume } from "../features/resume";

export const RedirectToHomePage = () => {
  return <Navigate to={paths.home} />;
};

export const routes: AppRoute[] = [
  {
    path: paths.dashboard,
    Component: lazy(() => import("../pages/Dashboard")),
    nestedRoutes: [
      {
        path: paths.home,
        Component: HomeSection,
      },
      {
        path: paths.resume,
        Component: Resume,
      },
      {
        path: paths.contact,
        Component: ContactSection,
      },
    ],
  },
];
