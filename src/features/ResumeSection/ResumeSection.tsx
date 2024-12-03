import { PageTransition } from "@components";
import {
  EducationSection,
  ExperienceSection,
  StackSection,
} from "./components";

const ResumeSection = () => {
  return (
    <PageTransition>
      <div className="container text-9xl">
        <section id="aboutMe" className="mt-8 mb-16">
          <h2 className="title">About me</h2>
        </section>

        <EducationSection />

        <section id="mySkills" className="mt-8 mb-16">
          <h2 className="title">My skills</h2>
        </section>

        <StackSection />

        <ExperienceSection />

        <section id="myProjects" className="mt-8 mb-16">
          <h2 className="title">My projects</h2>
        </section>
      </div>
    </PageTransition>
  );
};

export default ResumeSection;
