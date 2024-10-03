import { motion } from "framer-motion";
import { GiSuperMushroom } from "react-icons/gi";

const Photo = () => {
  return (
    <div className="w-full h-full relative mix-blend-lighten">
      <motion.div
        initial={{ opacity: 1, scale: 1 }}
        animate={{ opacity: 0, scale: 1.5, visibility: "hidden" }}
        transition={{
          delay: 3,
          duration: 0.8,
          when: "beforeChildren",
        }}
        className="size-80 lg:size-112 absolute flex justify-center items-center"
      >
        <GiSuperMushroom className="text-9xl lg:text-[250px] " />
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: 3,
          duration: 0.8,
          when: "beforeChildren",
        }}
        className="size-80 lg:size-112 absolute"
      >
        <img
          src="assets/me.png"
          alt="me"
          className="object-contain rounded-full"
        />
      </motion.div>
      <motion.svg
        className="size-81 lg:size-113"
        fill="transparent"
        viewBox="0 0 516 516"
      >
        <motion.circle
          cx="258"
          cy="258"
          r="258"
          stroke="#ef4444"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ strokeDasharray: "24 10 0 0" }}
          animate={{
            strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
            rotate: [120, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      </motion.svg>
    </div>
  );
};

export default Photo;
