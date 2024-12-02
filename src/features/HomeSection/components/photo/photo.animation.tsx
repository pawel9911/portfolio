import { motion } from "framer-motion";
import { GiSuperMushroom } from "react-icons/gi";

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
      <div className="absolute top-[-2%] left-1/2 -translate-x-1/2 -z-10">
        <GiSuperMushroom className="text-6xl" />
      </div>

      <div className="absolute top-[5%] left-[25%] -z-10">
        <GiSuperMushroom className="text-6xl" />
      </div>
      <div className="absolute top-[5%] right-[25%] -z-10">
        <GiSuperMushroom className="text-6xl" />
      </div>

      <div className="absolute top-[16%] left-[11%] -z-10">
        <GiSuperMushroom className="text-6xl" />
      </div>
      <div className="absolute top-[16%] right-[11%] -z-10">
        <GiSuperMushroom className="text-6xl" />
      </div>

      <div className="absolute top-[30%] left-[2%] -z-10">
        <GiSuperMushroom className="text-6xl" />
      </div>
      <div className="absolute top-[30%] right-[2%] -z-10">
        <GiSuperMushroom className="text-6xl" />
      </div>

      <div className="absolute top-[45%] left-0 -z-10">
        <GiSuperMushroom className="text-6xl" />
      </div>
      <div className="absolute top-[45%] right-0 -z-10">
        <GiSuperMushroom className="text-6xl" />
      </div>

      <div className="absolute top-[63%] left-[2%] -z-10">
        <GiSuperMushroom className="text-6xl" />
      </div>
      <div className="absolute top-[63%] right-[2%] -z-10">
        <GiSuperMushroom className="text-6xl" />
      </div>

      {/* inside */}

      <div className="absolute top-[26%] left-[21%] -z-10">
        <GiSuperMushroom className="text-6xl" />
      </div>
      <div className="absolute top-[26%] right-[21%] -z-10">
        <GiSuperMushroom className="text-6xl" />
      </div>

      <div className="absolute top-[40%] left-[25%] -z-10">
        <GiSuperMushroom className="text-6xl" />
      </div>
      <div className="absolute top-[40%] right-[25%] -z-10">
        <GiSuperMushroom className="text-6xl" />
      </div>

      <div className="absolute top-[48%] left-[14%] -z-10">
        <GiSuperMushroom className="text-6xl" />
      </div>
      <div className="absolute top-[48%] right-[14%] -z-10">
        <GiSuperMushroom className="text-6xl" />
      </div>
    </motion.div>
  );
};
