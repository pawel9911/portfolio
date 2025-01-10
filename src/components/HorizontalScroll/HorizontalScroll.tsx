import { motion, MotionProps, Variants } from "framer-motion";
import { HTMLAttributes } from "react";

const variants: Variants = {
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

interface HorizontalScrollProps extends HTMLAttributes<HTMLDivElement> {
  custom?: MotionProps["custom"];
}

export const HorizontalScroll = ({
  children,
  custom,
  className,
}: HorizontalScrollProps) => {
  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ amount: 0.8 }}
      variants={variants}
      custom={custom}
      className={className}
    >
      {children}
    </motion.div>
  );
};
