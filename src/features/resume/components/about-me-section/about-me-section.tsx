import { passion } from "./constants";

export const AboutMeSection = () => {
  return (
    <section id="aboutMe" className="mt-8 mb-16 max-w-4xl mx-auto">
      <h2 className="title">About me</h2>
      <div className="grid gap-20">
        {passion.map((e, i) => {
          const isEven = i % 2 === 0;

          return (
            <div
              key={i}
              className={`flex gap-10 ${
                isEven ? "flex-row" : "flex-row-reverse"
              } `}
            >
              {e.images.map(({ src, signature }, id) => (
                <div
                  key={id}
                  className={`p-6 pb-16 shadow-item shadow-black bg-white ${
                    isEven ? "-rotate-12" : "rotate-12"
                  } `}
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
              ))}
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
