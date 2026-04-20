import { HorizontalScroll } from "@components";
import { GiSuperMushroom } from "react-icons/gi";
import { experience } from "./constants";

export const ExperienceSection = () => {
  return (
    <section id="experience" className="mt-20 mb-32 max-w-5xl mx-auto px-4">
      <div className="flex items-center gap-6 mb-16">
        <h2 className="title !text-left !mb-0 uppercase tracking-[0.2em]">
          Experience
        </h2>
        <div className="h-px flex-1 bg-gradient-to-r from-red-500/30 to-transparent" />
      </div>

      <div className="flex flex-col gap-16">
        {experience.map((e, index) => (
          <div
            key={e.id}
            className="relative grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-12 group"
          >
            <HorizontalScroll custom={true} className="md:col-span-4">
              <div className="md:sticky md:top-32 flex flex-col items-start gap-2">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-red-500 text-lg font-bold">
                    {e.date.from} —{" "}
                    {e.date.to || (
                      <span className="text-red-500 animate-pulse">
                        Present
                      </span>
                    )}
                  </span>
                </div>
                <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-slate-400 text-[10px] uppercase tracking-[0.2em] font-bold">
                  {e.workType}
                </span>
              </div>
            </HorizontalScroll>

            <HorizontalScroll
              custom={false}
              className="md:col-span-8 relative pl-0 md:pl-10 border-l border-white/5 group-hover:border-red-500/30 transition-colors duration-500"
            >
              <div className="absolute left-[-5px] top-2 w-2 h-2 bg-slate-800 rounded-full ring-4 ring-slate-950 group-hover:bg-red-500 group-hover:ring-red-500/20 transition-all duration-500" />

              <header className="mb-6">
                <h3 className="text-3xl font-extrabold text-white group-hover:text-red-500 transition-colors duration-300 tracking-tight">
                  {e.position}
                </h3>
                <p className="text-xl text-slate-300 font-medium mt-1 flex items-center gap-2">
                  {e.company}
                  <span className="h-px w-8 bg-white/10" />
                </p>
              </header>

              <p className="body1 text-slate-400 mb-10 leading-relaxed text-lg italic">
                {e.description}
              </p>

              <ul className="space-y-5">
                {e.list.map((text, i) => (
                  <li key={i} className="group/item flex gap-4">
                    <div className="mt-1.5 shrink-0">
                      <GiSuperMushroom className="text-red-500/20 group-hover/item:text-red-500 group-hover/item:rotate-12 transition-all duration-300 text-xl" />
                    </div>
                    <p className="text-slate-300 leading-relaxed text-base group-hover/item:text-white transition-colors">
                      {text}
                    </p>
                  </li>
                ))}
              </ul>
            </HorizontalScroll>
          </div>
        ))}
      </div>
    </section>
  );
};
