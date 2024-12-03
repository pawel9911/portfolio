import { SVGAttributes } from "react";
import { type IconType } from "react-icons";
import {
  FaBootstrap,
  FaCss3Alt,
  FaDocker,
  FaFigma,
  FaGit,
  FaHtml5,
  FaReact,
} from "react-icons/fa";
import { RiJavascriptFill, RiTailwindCssFill } from "react-icons/ri";
import { SiMui, SiTypescript } from "react-icons/si";

const iconClassName: SVGAttributes<SVGElement>["className"] =
  "text-4xl xs:text-5xl md:text-6xl";

export const stack: { title: string; icon: ReturnType<IconType> }[] = [
  {
    title: "Bootstrap",
    icon: <FaBootstrap className={iconClassName} />,
  },
  {
    title: "CSS",
    icon: <FaCss3Alt className={iconClassName} />,
  },
  {
    title: "Docker",
    icon: <FaDocker className={iconClassName} />,
  },
  {
    title: "Figma",
    icon: <FaFigma className={iconClassName} />,
  },
  {
    title: "Git",
    icon: <FaGit className={iconClassName} />,
  },
  {
    title: "Html5",
    icon: <FaHtml5 className={iconClassName} />,
  },
  {
    title: "React",
    icon: <FaReact className={iconClassName} />,
  },
  {
    title: "JavaScript",
    icon: <RiJavascriptFill className={iconClassName} />,
  },
  {
    title: "TailwindCss",
    icon: <RiTailwindCssFill className={iconClassName} />,
  },
  {
    title: "Mui",
    icon: <SiMui className={iconClassName} />,
  },
  {
    title: "Typescript",
    icon: <SiTypescript className={iconClassName} />,
  },
];
