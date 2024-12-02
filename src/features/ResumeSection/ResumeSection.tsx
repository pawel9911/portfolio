import { PageTransition } from "@components";
import { stack } from "./utils";

const ResumeSection = () => {
  return (
    <PageTransition>
      <div className="container text-9xl">
        <section id="stack" className="mt-8 mb-16">
          <h2 className="h2 text-center mb-6">Stack</h2>
          <ul className="grid xl:grid-cols-5 lg:grid-cols-4 sm:grid-cols-3 grid-cols-2  gap-6 sm:gap-8 lg:gap-10">
            {stack.map((e) => (
              <li className="flex flex-col items-center p-8 rounded-lg max-w-item sm:max-w-full mx-auto w-full shadow-item">
                {e.icon}
                <p className="h3 mt-1">{e.title}</p>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </PageTransition>
  );
};

export default ResumeSection;
