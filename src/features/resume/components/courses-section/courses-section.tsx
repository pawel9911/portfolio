import { courses } from "./constants";
import { VerticalScroll } from "@components";

export const CoursesSection = () => {
  return (
    <section id="courses" className="mt-8 mb-16">
      <h2 className="title">Courses</h2>
      {courses.map((e, i) => (
        <div key={i} className="flex flex-col items-center justify-center">
          <VerticalScroll>
            <h2 className="h3 text-center">{e.name}</h2>
            <h3 className="h4 text-center text-secondary mb-4">
              {e.date.from} — {e.date.to}
            </h3>
            <h3 className="h4 text-center mb-2">{e.profile}</h3>
            <p className="body1 mx-auto sm:w-3/4 md:w-2/3 lg:w-1/2">
              {e.description}
            </p>
          </VerticalScroll>
          <div className="flex flex-wrap justify-center gap-6 my-10">
            {e.tags.map((tag, i) => (
              <VerticalScroll
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                key={i}
                className="text-base py-2 px-4 rounded-2xl shadow-item cursor-pointer"
              >
                {tag}
              </VerticalScroll>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};
