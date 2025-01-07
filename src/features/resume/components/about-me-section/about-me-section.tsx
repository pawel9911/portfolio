import { motion, Variants } from "framer-motion";
import { passion } from "./constants";

const cardVariants: Variants = {
  offscreen: (isEven: boolean) => ({
    x: isEven ? -400 : 400,
    opacity: 0,
    transition: {
      type: "spring",
      duration: 0.8,
    },
  }),
  onscreen: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8,
    },
  },
};

export const AboutMeSection = () => {
  return (
    <section id="aboutMe" className="mt-8 mb-40 max-w-4xl mx-auto">
      <h2 className="title">About me</h2>
      <motion.div className="grid gap-20">
        {passion.map((e, i) => {
          const isEven = i % 2 === 0;

          return (
            <motion.div
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ amount: 0.8 }}
              variants={cardVariants}
              custom={isEven}
              key={i}
              className={`flex gap-10 ${
                isEven
                  ? "flex-col-reverse lg:flex-row"
                  : "flex-col-reverse lg:flex-row-reverse"
              }`}
            >
              <div className="w-full max-w-60 mx-auto shrink-0">
                <div className="relative w-full h-80">
                  {e.images.map(({ src, signature }, id) => {
                    const rotate = () => {
                      switch (id) {
                        case 0: {
                          return isEven ? "-rotate-12" : "rotate-12";
                        }

                        default: {
                          return "-z-10";
                        }
                      }
                    };

                    return (
                      <div
                        key={id}
                        className={`p-6 pb-16 absolute h-full shadow-item shadow-black bg-white ${rotate()}`}
                      >
                        <img
                          src={src}
                          alt="me"
                          className="object-contain h-full bg-gray-100"
                        />
                        <p className="signature absolute bottom-6 right-7">
                          {signature}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div>
                <p className="body1 p-10">{e.text}</p>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
};
