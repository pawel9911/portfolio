import { PageTransition, Socials, TypingText } from "@components";
import { Photo } from "./components";

const Home = () => {
  return (
    <PageTransition>
      <section className="h-full min-h-[60vh] flex items-center bg-slate-950 text-slate-100 selection:bg-red-500/30">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:pt-12">
            {/* Content */}
            <div className="flex-1 order-2 lg:order-1 text-center lg:text-left">
              <div className="inline-block px-4 py-1.5 mb-6 rounded-full border border-red-500/20 bg-red-500/5 backdrop-blur-sm">
                <TypingText
                  texts={[
                    "Frontend Developer",
                    "React Frontend Developer",
                    "Fullstack Developer",
                  ]}
                />
              </div>

              <h1 className="text-5xl lg:text-7xl font-extrabold leading-tight mb-6">
                Hello I'm <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-400">
                  Paweł Grzybek
                </span>
              </h1>

              <p className="max-w-lg mb-10 text-slate-400 leading-relaxed text-lg">
                As a programmer, I create{" "}
                <span className="text-slate-200 font-medium">
                  efficient and scalable
                </span>{" "}
                applications that address real user needs. In my projects, I
                prioritize clean code, intuitive interfaces, and operational
                efficiency. Programming is my passion, enabling me to
                continuously grow and take on ambitious projects.
                applications...
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <Socials
                  listStyles="flex gap-3"
                  listElementStyles="p-3 rounded-xl bg-slate-900 border border-slate-800 hover:border-red-500/50 hover:text-red-500 transition-all duration-300 shadow-xl"
                />
                <button className="px-8 py-3 bg-red-500 hover:bg-red-600 text-white rounded-xl font-semibold transition-all transform hover:-translate-y-1">
                  Download CV
                </button>
              </div>
            </div>

            <div className="order-1 lg:order-2 relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-red-500 to-orange-500 rounded-full blur opacity-25  transition duration-1000"></div>
              <Photo />
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default Home;
