import { projects } from "./constants";
import { Project } from "./project";

export const ProjectsSection = () => {
  return (
    <section id="myProjects" className="mt-8 mb-16">
      <h2 className="title">My projects</h2>
      <h3 className="h3 mb-10 text-center">
        Here you will find some of the personal and clients projects that I
        created with each project containing its own case study
      </h3>

      <ul className="grid grid-cols-3 gap-10">
        {projects.map((data) => (
          <Project data={data} />
        ))}
      </ul>
    </section>
  );
};
