import { VerticalScroll } from "@components";
import { education } from "./constants";
import { FaGraduationCap } from "react-icons/fa";

export const EducationSection = () => {
  return (
    <section id="education" className="mt-20 mb-32 max-w-6xl mx-auto px-4">
      <h2 className="title mb-16 uppercase tracking-[0.2em]">Education</h2>

      {education.map((e, i) => (
        <VerticalScroll key={i} className="relative group">
          <div className="absolute -inset-4 bg-gradient-to-r from-red-500/5 to-primary/15 rounded-[40px] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

          <div className="relative bg-slate-900/30 backdrop-blur-md border border-white/5 p-8 lg:p-12 rounded-[40px] hover:border-red-500/20 overflow-hidden">
            <FaGraduationCap className="absolute -right-10 -bottom-10 text-[250px] text-white/[0.02] -rotate-12" />

            <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12">
              <div className="size-20 rounded-2xl bg-red-500/10 border border-red-500/20 flex items-center justify-center">
                <FaGraduationCap className="text-4xl text-red-500" />
              </div>

              <div className="text-center md:text-left flex-1 flex flex-col items-start">
                <span className="inline-block px-4 py-1 rounded-full bg-red-500/10 text-red-500 font-mono text-sm mb-6 tracking-wider">
                  {e.date.from} — {e.date.to}
                </span>

                <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">
                  {e.name}
                </h2>

                <h3 className="text-xl md:text-3xl text-slate-300 font-medium font-signature mb-6 italic opacity-90">
                  {e.profile}
                </h3>

                <div className="w-16 h-1 bg-red-500 mb-8 mx-auto md:mx-0 opacity-50" />

                <p className="body1 text-lg lg:text-xl text-slate-400 leading-relaxed max-w-2xl">
                  {e.description}
                </p>
              </div>
            </div>
          </div>
        </VerticalScroll>
      ))}
    </section>
  );
};
