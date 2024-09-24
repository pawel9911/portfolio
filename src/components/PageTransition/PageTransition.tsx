import { AnimatePresence, motion, MotionProps } from "framer-motion";

import { GiSuperMushroom } from "react-icons/gi";

interface PageTransitionProps extends MotionProps {}

const PageTransition = ({ children }: PageTransitionProps) => {
  return (
    <>
      {children}
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 0, y: "-100%" }}
          transition={{
            delay: 0.9,
            duration: 0.6,
            ease: "easeInOut",
          }}
          className="h-[50vh] w-screen fixed bg-red-500 z-40 top-0"
        />
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 0, visibility: "hidden" }}
          transition={{
            delay: 0.5,
            duration: 0.4,
            ease: "easeInOut",
          }}
          className="text-7xl absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] z-50"
        >
          <GiSuperMushroom />
        </motion.div>
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 0, y: "100%" }}
          transition={{
            delay: 0.9,
            duration: 0.6,
            ease: "easeInOut",
          }}
          className="h-[50vh] w-screen fixed bg-red-500 z-40 bottom-0"
        />
      </AnimatePresence>
    </>
  );
};

export default PageTransition;
