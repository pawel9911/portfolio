import { education } from "./constants";

export const EducationSection = () => {
  return (
    <section id="education" className="mt-8 mb-16">
      <h2 className="title">Education</h2>
      {education.map((e, i) => (
        <div key={i} className="flex flex-col items-center justify-center">
          <h2 className="h3">{e.name}</h2>
          <h3 className="h4 text-secondary mb-4">
            {e.date.from} — {e.date.to}
          </h3>
          <h3 className="h4 mb-2">{e.profile}</h3>
          <p className="body1 text-center w-1/2">{e.description}</p>
        </div>
      ))}
    </section>
  );
};
