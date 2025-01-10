import {
  motion,
  MotionProps,
  useMotionValueEvent,
  useScroll,
  Variants,
} from "framer-motion";
import { HTMLAttributes, useState } from "react";

export const variants: Variants = {
  offscreen: (direction: boolean) => ({
    y: direction ? -100 : 100,
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
  viewport = { amount: 0.8 },
  ...props
}: VerticalScrollProps) => {
  const { scrollY } = useScroll();
  const [scrollDirection, setScrollDirection] = useState(false);

  useMotionValueEvent(scrollY, "change", (current) => {
    const diff = current - (scrollY.getPrevious() || 0);
    setScrollDirection(diff > 0);
  });

  return (
    <motion.div
      className={className}
      viewport={viewport}
      {...props}
      initial="offscreen"
      whileInView="onscreen"
      variants={variants}
      custom={scrollDirection}
    >
      {children}
    </motion.div>
  );
};
