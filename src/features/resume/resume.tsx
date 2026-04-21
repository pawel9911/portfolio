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
      <div className="container py-12 lg:py-20 text-9xl overflow-hidden">
        <AboutMeSection />
        <ExperienceSection />
        <ProjectsSection />
        <CoursesSection />
        <EducationSection />
      </div>
    </PageTransition>
  );
};

export default Resume;
