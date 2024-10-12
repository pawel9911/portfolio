import { motion } from "framer-motion";
import { DetailedHTMLProps, InputHTMLAttributes } from "react";

interface InputProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  label: string;
  from?: "left" | "right";
}

const Input = ({ label, from = "left", ...props }: InputProps) => {
  return (
    <motion.div
      className="mb-3"
      initial={{ x: from === "left" ? -32 : 32 }}
      animate={{ x: 0 }}
      transition={{ delay: 3, duration: 2 }}
    >
      <label
        htmlFor={props.name}
        className="block text-sm lg:text-base xl:text-lg font-semibold mb-2"
      >
        {label}
      </label>
      <input
        className="w-full px-3 py-2 border border-primary rounded-md focus:outline-none focus:border-white bg-primary"
        {...props}
      />
    </motion.div>
  );
};

export default Input;
