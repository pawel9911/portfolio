import { motion, MotionProps, Variants } from "framer-motion";
import { HTMLAttributes } from "react";

export const variants: Variants = {
  offscreen: (isEven: boolean) => ({
    y: isEven ? -100 : 100,
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

interface VerticalScrollProps extends MotionProps {
  className?: HTMLAttributes<HTMLDivElement>["className"];
}

export const VerticalScroll = ({
  children,
  className,
  ...props
}: VerticalScrollProps) => {
  return (
    <motion.div
      {...props}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ amount: 0.8 }}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
};
