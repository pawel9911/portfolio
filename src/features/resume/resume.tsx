import { PageTransition } from "@components";
import {
  AboutMeSection,
  CoursesSection,
  EducationSection,
  ExperienceSection,
  ProjectsSection,
} from "./components";

const Resume = () => {
  return (
    <PageTransition>
      <div className="container text-9xl overflow-hidden">
        <AboutMeSection />
        <EducationSection />
        <CoursesSection />
        <ExperienceSection />
        <ProjectsSection />
      </div>
    </PageTransition>
  );
};

export default Resume;
