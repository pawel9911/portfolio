import { motion } from "framer-motion";
import { GiSuperMushroom } from "react-icons/gi";
import { PhotoAnimation } from "./photo.animation";
import { useRef } from "react";

const Photo = () => {
  const constraintsRef = useRef(null);

  return (
    <div className="w-full h-full relative mix-blend-lighten">
      <motion.div
        initial={{ opacity: 1, scale: 1 }}
        animate={{ opacity: 0, scale: 1.3, visibility: "hidden" }}
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
        className="size-80 lg:size-112"
        ref={constraintsRef}
      >
        <motion.img
          src="assets/me.png"
          alt="me"
          className="object-contain rounded-full w-full"
          drag
          dragConstraints={constraintsRef}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        />
      </motion.div>
      <PhotoAnimation />
    </div>
  );
};

export default Photo;
