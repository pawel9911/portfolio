import { motion } from "framer-motion";
import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

interface ButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {}

const Button = ({ ...props }: ButtonProps) => {
  return (
    <motion.div
      initial={{ y: 50 }}
      animate={{ y: 0 }}
      transition={{ delay: 3, duration: 2 }}
    >
      <button
        className="w-full px-4 py-2 border border-primary rounded-md focus:outline-none focus:border-white bg-primary font-semibold text-sm lg:text-base xl:text-lg"
        {...props}
      />
    </motion.div>
  );
};

export default Button;
