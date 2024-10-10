import { motion, Variants } from "framer-motion";

const draw: Variants = {
  hidden: { pathLength: 0, opacity: 0, visibility: "hidden" },
  visible: (delay: number) => ({
    pathLength: 1,
    opacity: 1,
    visibility: "visible",
    transition: {
      pathLength: { delay, type: "spring", duration: 1.5, bounce: 0 },
      opacity: { delay, duration: 0.01 },
    },
  }),
};

interface ToastProps {
  isSuccess: boolean;
  isError: boolean;
  onAnimationComplete: () => void;
}

const Toast = ({ isSuccess, isError, onAnimationComplete }: ToastProps) => {
  const color = isSuccess ? "#00cc88" : isError ? "#ff0055" : "#fff";

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit={{ opacity: 0, transition: { duration: 1 } }}
      variants={draw}
      className="z-40 bg-white/30 rounded-xl w-full h-full flex justify-center items-center absolute top-0 left-0"
    >
      <motion.svg width="160" height="160" viewBox="0 0 180 180">
        <motion.circle
          cx="90"
          cy="90"
          r="80"
          strokeWidth="10"
          stroke={color}
          variants={draw}
          className="fill-transparent"
          animate={{ stroke: color }}
          transition={{ delay: 1.5 }}
        />
        {isSuccess && (
          <motion.path
            fill="none"
            strokeWidth="10"
            stroke={color}
            d="M60,90 L80,110 L120,70"
            strokeDasharray="0 1"
            variants={draw}
            onAnimationComplete={onAnimationComplete}
          />
        )}
        {isError && (
          <>
            <motion.path
              fill="none"
              strokeWidth="10"
              stroke={color}
              d="M60,60 L120,120"
              strokeDasharray="0 1"
              variants={draw}
              custom={1.5}
            />
            <motion.path
              fill="none"
              strokeWidth="10"
              stroke={color}
              d="M60,120 L120,60"
              strokeDasharray="0 1"
              variants={draw}
              custom={1.5}
              onAnimationComplete={onAnimationComplete}
            />
          </>
        )}
      </motion.svg>
    </motion.div>
  );
};

export default Toast;
