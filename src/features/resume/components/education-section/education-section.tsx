import { VerticalScroll } from "@components";
import { education } from "./constants";

export const EducationSection = () => {
  return (
    <section id="education" className="mt-8 mb-16">
      <h2 className="title">Education</h2>
      {education.map((e, i) => (
        <VerticalScroll
          key={i}
          className="flex flex-col items-center justify-center"
        >
          <h2 className="h3 text-center">{e.name}</h2>
          <h3 className="h4 text-center text-secondary mb-4">
            {e.date.from} — {e.date.to}
          </h3>
          <h3 className="h4 text-center mb-2">{e.profile}</h3>
          <p className="body1 text-center sm:w-3/4 md:w-2/3 lg:w-1/2">
            {e.description}
          </p>
        </VerticalScroll>
      ))}
    </section>
  );
};
