export const paths = {
  root: "/",
  dashboard: "/portfolio",
  home: "/portfolio/home",
  resume: "/portfolio/resume",
  projects: "/portfolio/projects",
  contact: "/portfolio/contact",
} as const;

export type KnownPath = (typeof paths)[keyof typeof paths];

export const pathLabels: Record<KnownPath, string> = {
  [paths.root]: "",
  [paths.dashboard]: "",
  [paths.home]: "Home",
  [paths.resume]: "Resume",
  [paths.projects]: "Projects",
  [paths.contact]: "Contact",
};
