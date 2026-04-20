import { HorizontalScroll } from "@components";
import { passion } from "./constants";

export const AboutMeSection = () => {
  const passions = passion.map((e, i) => ({ ...e, isEven: i % 2 === 0 }));

  return (
    <section id="aboutMe" className="mt-20 mb-40 max-w-6xl mx-auto px-4">
      <h2 className="title mb-16 uppercase tracking-[0.2em]">About me</h2>

      <div className="grid gap-32">
        {passions.map(({ image, isEven, text, name }, i) => {
          return (
            <HorizontalScroll
              custom={isEven}
              key={i}
              className={`flex flex-col ${
                isEven ? "lg:flex-row" : "lg:flex-row-reverse"
              } items-center gap-12 lg:gap-24 overflow-hidden p-4 sm:p-8 rounded-[40px] bg-slate-900/20 border border-white/5 hover:bg-slate-900/30 transition-colors duration-700`}
            >
              <div className="w-full lg:w-1/2 relative group">
                <div className="relative aspect-[4/5] overflow-hidden rounded-[32px] border border-white/10 shadow-2xl">
                  <img
                    src={image.src}
                    alt={image.signature}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                  />

                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="inline-block px-6 py-3 rounded-2xl bg-slate-950/60 backdrop-blur-xl border border-white/10 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                      <p className="text-red-500 font-signature text-xl">
                        {image.signature}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="absolute -inset-10 bg-red-500/5 blur-[100px] rounded-full -z-10 group-hover:bg-red-500/10 transition-colors duration-700" />
              </div>

              <div className="w-full lg:w-1/2 space-y-8">
                <div className="flex items-center gap-4">
                  <span className="text-red-500 font-mono text-sm tracking-[0.3em] uppercase">
                    {`0${i + 1} / ${name}`}
                  </span>
                  <div className="h-[1px] flex-1 bg-gradient-to-r from-red-500/50 to-transparent" />
                </div>

                <p className="body1 text-xl lg:text-2xl font-light leading-relaxed text-slate-300">
                  {text}
                </p>

                <div
                  className={`flex ${isEven ? "justify-start" : "lg:justify-end"}`}
                >
                  <div className="w-12 h-12 rounded-full border border-red-500/20 flex items-center justify-center group-hover:border-red-500/50 transition-colors">
                    <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                  </div>
                </div>
              </div>
            </HorizontalScroll>
          );
        })}
      </div>
    </section>
  );
};
