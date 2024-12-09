import { PageTransition } from "@components";
import {
  AboutMeSection,
  CoursesSection,
  EducationSection,
  ExperienceSection,
  StackSection,
} from "./components";

const Resume = () => {
  return (
    <PageTransition>
      <div className="container text-9xl">
        <AboutMeSection />

        <EducationSection />

        <CoursesSection />

        <section id="mySkills" className="mt-8 mb-16 hidden">
          <h2 className="title">My skills</h2>
        </section>

        <StackSection />

        <ExperienceSection />

        <section id="myProjects" className="mt-8 mb-16 hidden">
          <h2 className="title">My projects</h2>
        </section>
      </div>
    </PageTransition>
  );
};

export default Resume;
