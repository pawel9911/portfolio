import { VerticalScroll } from "@components";
import { motion, useCycle } from "framer-motion";
import { MdOutlineKeyboardDoubleArrowUp } from "react-icons/md";
import { ProjectDescription } from "./project-description";

const variants = {
  open: {
    transform: "translateY(0)",
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 40,
      when: "beforeChildren",
    },
    willChange: "transform",
  },
  closed: {
    transform: "translateY(100%)",
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
      when: "afterChildren",
    },
    willChange: "transform",
  },
};

interface ProjectProps {
  data: {
    name: string;
    category: string;
    tools: string[];
    description: string;
  };
}

export const Project = ({ data }: ProjectProps) => {
  const { name, category } = data;
  const [status, toggleStatus] = useCycle(false, true);

  return (
    <VerticalScroll
      viewport={{ amount: 0.4 }}
      className="shadow-item shadow-black relative h-full"
    >
      <div className="overflow-hidden relative h-full">
        <img
          src="assets/example.jpg"
          className="h-72 w-full object-cover"
          alt={`${name} - image`}
        />
        <div className="grid p-7 pb-10 gap-1">
          <span className="text-sm text-secondary">{category}</span>
          <h2 className="text-lg font-bold">{name}</h2>
        </div>
        <motion.div
          animate={status ? "open" : "closed"}
          variants={variants}
          className="p-4 bg-black/85 h-full absolute top-0 left-0 overflow-auto z-50"
        >
          <ProjectDescription data={data} />
        </motion.div>
      </div>
      <div className="flex absolute left-1/2 bottom-0 -translate-x-1/2 translate-y-1/2 z-60">
        <motion.button
          onClick={() => toggleStatus()}
          animate={status ? { transform: "rotate(180deg)" } : {}}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="p-2 size-16 inline-flex items-center justify-center shadow-item shadow-black bg-primary rounded-full 
              text-red-600 hover:bg-red-300 focus:outline-none focus:ring-2 focus:ring-red-300 relative z-20"
        >
          <MdOutlineKeyboardDoubleArrowUp />
        </motion.button>
      </div>
    </VerticalScroll>
  );
};
