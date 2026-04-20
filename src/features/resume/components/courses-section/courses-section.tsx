import { courses } from "./constants";
import { VerticalScroll } from "@components";
import { motion } from "framer-motion";

export const CoursesSection = () => {
  return (
    <section id="courses" className="mt-20 mb-32 max-w-6xl mx-auto px-4">
      <h2 className="title mb-16 uppercase tracking-[0.2em]">Courses</h2>

      <div className="grid gap-12">
        {courses.map((e, i) => (
          <div key={i} className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-red-500/5 to-primary/15 rounded-[40px] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

            <VerticalScroll className="relative bg-slate-900/30 backdrop-blur-md border border-white/5 p-8 lg:p-12 rounded-[40px] hover:border-red-500/20 ">
              <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
                <div className="lg:w-1/3">
                  <span className="inline-block px-4 py-1 rounded-full bg-red-500/10 text-red-500 font-mono text-xs mb-4 tracking-widest uppercase">
                    {e.date.from} - {e.date.to}
                  </span>
                  <h3 className="text-2xl lg:text-4xl font-bold text-white leading-tight mb-2">
                    {e.name}
                  </h3>
                  <p className="text-red-500 italic font-signature text-2xl">
                    {e.profile}
                  </p>
                </div>

                <div className="lg:w-2/3 space-y-8">
                  <p className="body1 text-lg text-slate-400 leading-relaxed">
                    {e.description}
                  </p>

                  <div className="flex flex-wrap gap-3">
                    {e.tags.map((tag, idx) => (
                      <motion.span
                        key={idx}
                        whileHover={{
                          y: -3,
                          backgroundColor: "rgba(239, 68, 68, 0.2)",
                        }}
                        className="text-xs font-mono py-2 px-4 rounded-xl bg-white/5 border border-white/10 text-slate-300 cursor-default transition-colors"
                      >
                        # {tag}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>
            </VerticalScroll>
          </div>
        ))}
      </div>
    </section>
  );
};
