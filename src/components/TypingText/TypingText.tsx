import type { NonEmptyArray } from "@/types";
import { animate, motion, useMotionValue, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

interface TypingTextProps {
  texts: NonEmptyArray<string>;
}

const TypingText = ({ texts }: TypingTextProps) => {
  const [index, setIndex] = useState(0);
  const [delay, setDelay] = useState(3);

  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const displayText = useTransform(rounded, (latest) =>
    texts[index].slice(0, latest)
  );

  useEffect(() => {
    const animation = animate(count, texts[index].length, {
      type: "tween",
      duration: 1,
      delay,
      ease: "easeIn",
      repeat: texts.length === 1 ? Infinity : 1,
      repeatType: "reverse",
      repeatDelay: 1,
      onComplete: () => {
        index === texts.length - 1 ? setIndex(0) : setIndex((p) => p + 1);
        setDelay(0);
      },
    });

    return () => animation.stop();
  }, [index]);

  return (
    <span className="inline-block h-full text-xl leading-none">
      <motion.span>{displayText}</motion.span>
    </span>
  );
};

export default TypingText;
