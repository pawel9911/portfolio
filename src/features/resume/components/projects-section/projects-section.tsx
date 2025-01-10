import { projects } from "./constants";
import { Project } from "./project";

export const ProjectsSection = () => {
  return (
    <section id="myProjects" className="mt-8 mb-40">
      <h2 className="title">My projects</h2>
      <h3 className="h3 mb-10 text-center">
        Here you will find some of the personal and clients projects that I
        created with each project containing its own case study
      </h3>

      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-y-16 gap-x-10">
        {projects.map(({ id, ...data }) => (
          <Project key={id} data={data} />
        ))}
      </div>
    </section>
  );
};
