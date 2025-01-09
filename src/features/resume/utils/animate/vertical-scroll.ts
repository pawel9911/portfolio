import { Variants } from "framer-motion";

export const verticalScroll: Variants = {
  offscreen: (isEven: boolean) => ({
    y: isEven ? "-100%" : "100%",
    opacity: 0,
    transition: {
      type: "spring",
      duration: 0.8,
    },
  }),
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8,
    },
  },
};
