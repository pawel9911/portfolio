import { HorizontalScroll } from "@components";
import { passion } from "./constants";

export const AboutMeSection = () => {
  return (
    <section id="aboutMe" className="mt-8 mb-40 max-w-4xl mx-auto">
      <h2 className="title mb-3 sm:mb-5">About me</h2>
      <div className="grid gap-20">
        {passion.map((e, i) => {
          const isEven = i % 2 === 0;

          return (
            <div
              key={i}
              className={`flex gap-10 ${
                isEven
                  ? "flex-col-reverse lg:flex-row"
                  : "flex-col-reverse lg:flex-row-reverse"
              }`}
            >
              <HorizontalScroll
                custom={isEven}
                className="w-full max-w-60 mx-auto shrink-0"
              >
                <div className="relative w-full h-88">
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
                        className={`p-6 pb-14 absolute h-full w-full shadow-item shadow-black bg-white ${rotate()}`}
                      >
                        <img
                          src={src}
                          loading="lazy"
                          alt="me"
                          className="object-contain h-full w-full bg-gray-100"
                        />
                        <p className="signature absolute bottom-5 right-7">
                          {signature}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </HorizontalScroll>
              <HorizontalScroll custom={isEven}>
                <p className="body1 p-4 sm:p-5 lg:p-10">{e.text}</p>
              </HorizontalScroll>
            </div>
          );
        })}
      </div>
    </section>
  );
};
