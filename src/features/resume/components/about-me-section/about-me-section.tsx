import { HorizontalScroll } from "@components";
import { passion } from "./constants";
import { motion } from "framer-motion";

export const AboutMeSection = () => {
  const passions = passion.map((e, i) => ({ ...e, isEven: i % 2 === 0 }));

  return (
    <section id="aboutMe" className="mb-40 max-w-6xl mx-auto px-4">
      <div className="flex items-center gap-6 mb-16">
        <div className="h-px flex-1 bg-gradient-to-r from-transparent to-red-500/30 " />
        <h2 className="title text-left !mb-0 uppercase tracking-[0.2em]">
          About me
        </h2>
      </div>

      <div className="grid gap-32">
        {passions.map(({ image, isEven, text }, i) => {
          return (
            <div
              key={i}
              className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-20 ${
                isEven ? "" : "lg:flex-row-reverse"
              }`}
            >
              <HorizontalScroll
                custom={isEven}
                className="w-full max-w-[320px] shrink-0"
              >
                <div className="relative w-full h-[400px] group">
                  <div className="absolute inset-0 p-3 rounded-2xl bg-slate-900/80 backdrop-blur-md border border-white/10 shadow-2xl shadow-black/50">
                    <motion.div
                      whileHover={{ scale: 0.98 }}
                      className="relative h-full w-full overflow-hidden rounded-xl bg-slate-950"
                    >
                      <img
                        src={image.src}
                        loading="lazy"
                        alt={image.signature}
                        className="object-cover h-full w-full opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                      />
                      <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent p-4">
                        <p className="signature text-sm text-red-500">
                          {image.signature}
                        </p>
                      </div>
                    </motion.div>
                  </div>
                  <div className="absolute -inset-4 bg-red-500/5 blur-3xl rounded-full -z-20"></div>
                </div>
              </HorizontalScroll>

              <HorizontalScroll custom={isEven} className="flex-1">
                <div className="relative">
                  <span className="absolute -top-8 -left-4 text-8xl text-red-500/10 font-serif">
                    “
                  </span>
                  <p className="body1 text-lg lg:text-xl leading-relaxed text-slate-400 first-letter:text-4xl first-letter:font-bold first-letter:text-red-500 first-letter:mr-1">
                    {text}
                  </p>
                </div>
              </HorizontalScroll>
            </div>
          );
        })}
      </div>
    </section>
  );
};
