import { useMemo } from "react";
import { type KnownPath, pathLabels, paths } from "../paths";

const pathsNotVisibleOnNavigation = new Set<KnownPath>([]);

export const useAccessibleNavigationPaths = () => {
  return useMemo(() => {
    const uniquePaths = Array.from(
      new Set(Object.values(paths)),
    ) as KnownPath[];

    return uniquePaths
      .filter((path) => !pathsNotVisibleOnNavigation.has(path))
      .map((path) => ({
        name: pathLabels[path],
        path,
      }));
  }, []);
};
