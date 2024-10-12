import { motion, MotionProps } from "framer-motion";
import { GiSuperMushroom } from "react-icons/gi";

interface PageTransitionProps extends MotionProps {}

const PageTransition = ({ children }: PageTransitionProps) => {
  return (
    <>
      {children}
      <motion.div
        animate={{
          clipPath: [
            "polygon(0% 0%, 0 0, 100% 0, 100% 100%, 0 100%, 0 100%, 100% 100%, 100% 0%)",
            "polygon(0% 0%, 0 50%, 100% 50%, 100% 50%, 0 50%, 0 100%, 100% 100%, 100% 0%)",
            "polygon(0% 0%, 0 50%, 100% 50%, 100% 50%, 0 50%, 0 100%, 100% 100%, 100% 0%)",
            "polygon(0% 0%, 0 0, 100% 0, 100% 100%, 0 100%, 0 100%, 100% 100%, 100% 0%)",
          ],
        }}
        transition={{
          duration: 3,
          times: [0, 0.2, 0.8, 1],
        }}
        className="h-screen w-screen fixed bg-nav z-40 top-0"
      >
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 0, visibility: "hidden" }}
          transition={{
            delay: 0.6,
            duration: 1.8,
            ease: "easeInOut",
          }}
          className="text-7xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50"
        >
          <GiSuperMushroom />
        </motion.div>
      </motion.div>
      <motion.div
        animate={{ visibility: "hidden" }}
        transition={{
          duration: 1.5,
        }}
        className="h-screen w-screen fixed bg-primary z-[39] top-0"
      />
    </>
  );
};

export default PageTransition;
