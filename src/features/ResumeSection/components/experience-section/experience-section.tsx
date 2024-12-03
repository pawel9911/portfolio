import { GiSuperMushroom } from "react-icons/gi";

export const ExperienceSection = () => {
  return (
    <section id="experience" className="mt-8 mb-16">
      <h2 className="title text-left">Experience</h2>

      <div className="grid grid-cols-12 gap-2">
        <div className="col-span-4">
          <h3 className="h4">
            April 2022 — <span className="text-secondary">Present</span>
          </h3>
        </div>
        <div className="col-span-6">
          <div className="mb-3">
            <h2 className="h3">React Frontend Developer</h2>
            <p className="body1">
              L4WEB — <span className="text-secondary">Remote</span>
            </p>
          </div>
          <p className="body1 mb-7 text-justify">
            Dimension is a collaboration platform for modern engineering teams.
            It bridges the gap between communication, cloud, code, projects, and
            more—with an incredible developer experience.
          </p>
          <ul className="body1">
            <li>
              <div className="flex gap-2">
                <div>
                  <GiSuperMushroom className="text-secondary text-2xl " />
                </div>
                <p className="body1 mb-3 text-justify">
                  Led the rewrite from the MVP version, which was previously
                  fragile with numerous bugs and technical debt. Convinced the
                  team to transition to a new monorepo project with a solid
                  foundation, ensuring code quality.
                </p>
              </div>
            </li>
            <li>
              <div className="flex gap-2">
                <div>
                  <GiSuperMushroom className="text-secondary text-2xl " />
                </div>
                <p className="body1 mb-3 text-justify">
                  Led the transition of the application to a local-first setup
                  using IndexedDB, significantly improving speed by reducing
                  query and update times from about 500ms to nearly instant
                  (around 5ms).
                </p>
              </div>
            </li>
            <li>
              <div className="flex gap-2">
                <div>
                  <GiSuperMushroom className="text-secondary text-2xl " />
                </div>
                <p className="body1 mb-3 text-justify">
                  Led the hiring process for software engineers, including
                  designing interview processes and evaluating candidates to
                  build a strong development team.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
