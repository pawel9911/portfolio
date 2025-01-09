import { Variants } from "framer-motion";

export const horizontalScroll: Variants = {
  offscreen: (toLeft: boolean) => ({
    x: toLeft ? -400 : 400,
    opacity: 0,
    transition: {
      type: "spring",
      duration: 0.8,
    },
  }),
  onscreen: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8,
    },
  },
};
