export const paths = {
  dashboard: "/",
  home: "/home",
  resume: "/resume",
  projects: "/projects",
  contact: "/contact",
} as const;

export type KnownPath = (typeof paths)[keyof typeof paths];

export const pathLabels: Record<KnownPath, string> = {
  [paths.dashboard]: "",
  [paths.home]: "Home",
  [paths.resume]: "Resume",
  [paths.projects]: "Projects",
  [paths.contact]: "Contact",
};
