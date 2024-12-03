import { stack } from "./constants";

const gaps = "gap-8 lg:gap-7 xl:gap-10";
const cols = "grid-cols-2 xs:grid-cols-3 md:grid-cols-4 lg:grid-cols-6";
const padding = "p-6 xs:p-7 xl:p-8";

export const StackSection = () => {
  return (
    <section id="stack" className="mt-8 mb-16">
      <h2 className="title">Stack</h2>
      <ul className={`grid ${cols} ${gaps}`}>
        {stack.map((e, i) => (
          <li
            key={i}
            className={`flex flex-col items-center rounded-lg shadow-item ${padding}`}
          >
            {e.icon}
            <p className="h3 mt-1">{e.title}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};
