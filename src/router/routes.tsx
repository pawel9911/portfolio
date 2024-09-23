import { lazy } from "react";
import { paths } from "./paths";
import { Navigate } from "react-router-dom";
import { AppRoute } from "../components";
import { ContactSection } from "../features/ContactSection";
import { HomeSection } from "../features/HomeSection";
import { ProjectsSection } from "../features/ProjectsSection";
import { ResumeSection } from "../features/ResumeSection";

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
        Component: HomeSection,
      },
      {
        path: paths.resume,
        Component: ResumeSection,
      },
      {
        path: paths.projects,
        Component: ProjectsSection,
      },
      {
        path: paths.contact,
        Component: ContactSection,
      },
    ],
  },
];
