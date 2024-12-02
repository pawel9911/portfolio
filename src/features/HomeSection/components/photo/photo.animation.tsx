import { motion } from "framer-motion";
import { GiSuperMushroom } from "react-icons/gi";

const animationClassNames = [
  "top-[-2%] left-1/2",

  "top-[5%] left-[25%]",
  "top-[5%] right-[25%]",

  "top-[16%] left-[11%]",
  "top-[16%] right-[11%]",

  "top-[30%] left-[2%]",
  "top-[30%] right-[2%]",

  "top-[45%] left-0",
  "top-[45%] right-0",

  "top-[63%] left-[2%]",
  "top-[63%] right-[2%]",

  "top-[26%] left-[21%]",
  "top-[26%] right-[21%]",

  "top-[40%] left-[25%]",
  "top-[40%] right-[25%]",

  "top-[48%] left-[14%]",
  "top-[48%] right-[14%]",
];

export const PhotoAnimation = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        // delay: 3,
        delay: 4,
        duration: 0.8,
        when: "beforeChildren",
      }}
    >
      {animationClassNames.map((className, i) => (
        <motion.div
          initial={{
            opacity: 1,
            scale: 0.8,
            translateX: i === 0 ? "-50%" : 0,
          }}
          animate={{ opacity: 0, scale: 1, translateY: -40 }}
          transition={{
            type: "tween",
            duration: 2,
            ease: "easeIn",
            repeat: Infinity,
            repeatDelay: 1,
          }}
          className={`absolute -z-10 ${className}`}
        >
          <GiSuperMushroom className="text-6xl" />
        </motion.div>
      ))}
    </motion.div>
  );
};
