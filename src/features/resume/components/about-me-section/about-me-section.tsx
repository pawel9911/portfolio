import { passion } from "./constants";

export const AboutMeSection = () => {
  return (
    <section id="aboutMe" className="mt-8 mb-24 max-w-4xl mx-auto">
      <h2 className="title">About me</h2>
      <div className="grid gap-20">
        {passion.map((e, i) => {
          const isEven = i % 2 === 0;

          return (
            <div
              key={i}
              className={`flex gap-10 ${
                isEven ? "flex-row" : "flex-row-reverse"
              }`}
            >
              <div className="w-full max-w-60 shrink-0">
                <div className="relative">
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
                        className={`p-6 pb-16 absolute shadow-item shadow-black bg-white ${rotate()}`}
                      >
                        <img
                          src={src}
                          alt="me"
                          className="object-contain h-60 w-48 max-w-none bg-gray-100"
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
            </div>
          );
        })}
      </div>
    </section>
  );
};
