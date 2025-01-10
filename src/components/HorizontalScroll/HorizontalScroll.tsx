import { motion, MotionProps, Variants } from "framer-motion";
import { HTMLAttributes } from "react";

const variants: Variants = {
  offscreen: (toLeft: boolean) => ({
    x: toLeft ? -100 : 100,
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

interface HorizontalScrollProps extends MotionProps {
  className?: HTMLAttributes<HTMLDivElement>["className"];
}

export const HorizontalScroll = ({
  children,
  className,
  viewport = { amount: 0.4 },
  ...props
}: HorizontalScrollProps) => {
  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      variants={variants}
      viewport={viewport}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};
