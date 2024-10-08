import { motion } from "framer-motion";

const draw = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: {
    pathLength: 1,
    opacity: 1,
    transition: {
      pathLength: { type: "spring", duration: 1.5, bounce: 0 },
      opacity: { duration: 0.01 },
    },
  },
};

interface ToastProps {
  isSuccess: boolean;
  isError: boolean;
  isPending: boolean;
}

const Toast = ({ isSuccess, isError, isPending }: ToastProps) => {
  const color = isSuccess ? "#00cc88" : isError ? "#ff0055" : "#fff";

  if (isPending) {
    return (
      <motion.div className="z-40 bg-white/30 rounded-xl w-full h-full flex justify-center items-center absolute top-0 left-0">
        <motion.svg
          width="160"
          height="160"
          viewBox="0 0 180 180"
          initial="hidden"
          animate="visible"
        >
          <motion.circle
            cx="90"
            cy="90"
            r="80"
            strokeWidth="10"
            stroke={color}
            variants={draw}
            className="fill-transparent"
          />
          {isSuccess && (
            <motion.path
              fill="none"
              strokeWidth="10"
              stroke={color}
              d="M60,90 L80,110 L120,70"
              strokeDasharray="0 1"
              variants={draw}
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
              />
              <motion.path
                fill="none"
                strokeWidth="10"
                stroke={color}
                d="M60,120 L120,60"
                strokeDasharray="0 1"
                variants={draw}
              />
            </>
          )}
        </motion.svg>
      </motion.div>
    );
  }

  return null;
};

export default Toast;
