import { motion } from "framer-motion";

interface TextareaProps
  extends React.DetailedHTMLProps<
    React.TextareaHTMLAttributes<HTMLTextAreaElement>,
    HTMLTextAreaElement
  > {
  label: string;
}

const Textarea = ({ label, ...props }: TextareaProps) => {
  return (
    <motion.div
      initial={{ y: 50 }}
      animate={{ y: 0 }}
      transition={{ delay: 3, duration: 2 }}
      className="mb-3"
    >
      <label
        htmlFor={props.name}
        className="block text-sm lg:text-base xl:text-lg font-semibold mb-2"
      >
        {label}
      </label>
      <textarea
        className="min-h-52 resize-none w-full px-3 py-2 border border-primary rounded-md focus:outline-none focus:border-white bg-primary"
        {...props}
      ></textarea>
    </motion.div>
  );
};

export default Textarea;
