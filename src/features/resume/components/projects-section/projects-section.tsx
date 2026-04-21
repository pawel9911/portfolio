import { projects } from "./constants";
import { Project } from "./project";

export const ProjectsSection = () => {
  return (
    <section id="myProjects" className="mt-20 mb-40 max-w-7xl mx-auto px-4">
      <div className="text-center mb-20 space-y-4">
        <h2 className="title !mb-0 uppercase tracking-[0.2em]">My projects</h2>
        <div className="w-1/4 h-px mx-auto bg-gradient-to-r bg-red-500/30 to-transparent" />
        <p className="body1 text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
          Here you will find some of the personal and clients projects that I
          created, with each project containing its own case study.
        </p>
      </div>

      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-y-16 gap-x-10">
        {projects.map(({ id, ...data }) => (
          <Project key={id} data={data} />
        ))}
      </div>
    </section>
  );
};
