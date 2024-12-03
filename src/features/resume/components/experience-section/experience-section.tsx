import { GiSuperMushroom } from "react-icons/gi";
import { experience } from "./constants";

export const ExperienceSection = () => {
  return (
    <section id="experience" className="mt-8 mb-16">
      <h2 className="title text-left">Experience</h2>
      {experience.map((e) => (
        <div key={e.id} className="grid grid-cols-12 gap-2 mb-10">
          <div className="col-span-4">
            <h3 className="h4">
              {e.date.from} —{" "}
              {e.date.to ? (
                e.date.to
              ) : (
                <span className="text-secondary">Present</span>
              )}
            </h3>
          </div>
          <div className="col-span-6">
            <div className="mb-3">
              <h2 className="h3">{e.position}</h2>
              <p className="body1">
                {e.company} —{" "}
                <span className="text-secondary">{e.workType}</span>
              </p>
            </div>
            <p className="body1 mb-7 text-justify">{e.description}</p>
            <ul className="body1">
              {e.list.map((text, i) => (
                <li key={i}>
                  <div className="flex gap-2">
                    <div>
                      <GiSuperMushroom className="text-secondary text-2xl " />
                    </div>
                    <p className="body1 mb-3 text-justify">{text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </section>
  );
};
