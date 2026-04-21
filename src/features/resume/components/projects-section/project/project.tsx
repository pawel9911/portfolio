import { VerticalScroll } from "@components";
import { motion, useCycle } from "framer-motion";
import { MdOutlineKeyboardDoubleArrowUp } from "react-icons/md";
import { ProjectDescription } from "./project-description";

interface ProjectProps {
  data: {
    name: string;
    category: string;
    imgSrc: string;
    tools: string[];
    description: string;
  };
}

export const Project = ({ data }: ProjectProps) => {
  const { name, category, imgSrc } = data;
  const [status, toggleStatus] = useCycle(false, true);

  return (
    <VerticalScroll viewport={{ amount: 0.4 }} className="relative h-96 mb-8">
      <div className="relative h-full w-full rounded-[40px] bg-slate-900 border border-white/5 shadow-2xl group">
        <div className="absolute inset-0 rounded-[40px] overflow-hidden z-0">
          <motion.div
            animate={{
              scale: status ? 1.1 : 1,
              filter: status
                ? "blur(10px) brightness(0.3)"
                : "blur(0px) brightness(0.8)",
            }}
            transition={{ duration: 0.6 }}
            className="h-full w-full"
          >
            <img
              src={imgSrc}
              className="h-full w-full object-cover"
              alt={name}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
          </motion.div>
        </div>

        <div className="relative z-10 h-full flex flex-col p-8">
          <motion.div
            layout
            transition={{ type: "spring", stiffness: 200, damping: 25 }}
            className={`flex flex-col items-start justify-end transition-all duration-500 ${status ? "h-20" : "flex-1"}`}
          >
            <motion.span
              layout
              className="inline-block px-3 py-1 rounded-full bg-red-500/20 border border-red-500/20 text-red-500 text-[10px] font-bold uppercase tracking-widest mb-3"
            >
              {category}
            </motion.span>
            <motion.h2
              layout
              className="text-2xl font-extrabold text-white tracking-tighter leading-tight"
            >
              {name}
            </motion.h2>
          </motion.div>

          <motion.div
            initial={false}
            animate={{
              height: status ? "100%" : "0px",
              opacity: status ? 1 : 0,
              marginTop: status ? "20px" : "0px",
            }}
            transition={{ type: "spring", stiffness: 200, damping: 25 }}
            className="overflow-y-auto min-h-0"
          >
            <div className="text-slate-200">
              <ProjectDescription data={data} />
            </div>
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 z-20">
          <motion.button
            onClick={() => toggleStatus()}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`flex items-center gap-2 px-6 py-3 rounded-full border transition-all duration-500 ${
              status
                ? "bg-red-500 border-red-400 text-white shadow-[0_10px_20px_rgba(239,68,68,0.4)]"
                : "bg-slate-950 backdrop-blur-md border-white/10 text-slate-300 shadow-[0_10px_20px_rgba(0,0,0,0.5)]"
            }`}
          >
            <span className="text-xs font-bold uppercase tracking-wider">
              {status ? "Close" : "Details"}
            </span>
            <motion.div
              animate={{ rotate: status ? 180 : 0 }}
              className="text-xl"
            >
              <MdOutlineKeyboardDoubleArrowUp />
            </motion.div>
          </motion.button>
        </div>
      </div>
    </VerticalScroll>
  );
};
