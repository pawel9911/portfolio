import { motion, useCycle } from "framer-motion";
import { MdOutlineKeyboardDoubleArrowUp } from "react-icons/md";

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

export const Project = ({
  data: { name, category, tools, description },
}: ProjectProps) => {
  const [status, toggleStatus] = useCycle(false, true);

  return (
    <li>
      <div className="shadow-item shadow-black relative h-full">
        <div className="overflow-hidden relative h-full">
          <div className="bg-primary h-full">
            <div>
              <img
                src="assets/example.jpg"
                className="h-80 max-w-none"
                alt=""
              />
            </div>
            <div className="grid p-4 gap-3">
              <span className="body1">{category}</span>
              <h2 className="h3">{name}</h2>
            </div>
          </div>
          <motion.div
            animate={status ? "open" : "closed"}
            variants={variants}
            className="p-4 bg-black/85 h-full absolute top-0 left-0"
          >
            <code className="body1">
              <div className="blink">
                <span className="mr-2 text-secondary">const</span>
                <span className="mr-2">project</span>
                <span className="mr-2 text-secondary">=</span>
                <span>&#123;</span>
              </div>
              <div>
                <span className="ml-4 lg:ml-8 mr-2">name:</span>
                <span className="text-contrast">"{name}"</span>
                <span>,</span>
              </div>
              <div className="ml-4 lg:ml-8 mr-2">
                <span>tools: </span>
                <span>[</span>
                {tools.map((tool, i) => (
                  <span key={i} className="text-contrast">
                    "{tool}"
                    <span className="text-white">
                      {tools.length - 1 !== i ? ", " : ""}
                    </span>
                  </span>
                ))}
                <span>],</span>
              </div>
              <div className="ml-4 lg:ml-8 mr-2">
                <span>description: </span>
                <span className="text-contrast">"{description}"</span>
                <span>,</span>
              </div>
              <div>
                <span>&#125;</span>
              </div>
            </code>
          </motion.div>
        </div>
        <div className="flex absolute left-1/2 bottom-0 -translate-x-1/2 translate-y-1/2">
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
      </div>
    </li>
  );
};
