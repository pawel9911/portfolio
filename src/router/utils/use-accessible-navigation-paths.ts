import { useMemo } from "react";
import { type KnownPath, pathLabels, paths } from "../paths";

const pathsNotVisibleOnNavigation: KnownPath[] = [paths.dashboard];

export const useAccessibleNavigationPaths = () => {
  return useMemo(() => {
    const navigationPaths = Object.values(paths) as KnownPath[];

    return navigationPaths.map((path) => ({
      isVisibleOnNavigation: !pathsNotVisibleOnNavigation.includes(path),
      name: pathLabels[path],
      path,
    }));
  }, []);
};
