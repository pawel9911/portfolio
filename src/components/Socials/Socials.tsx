import { motion } from "framer-motion";
import { FaLinkedin } from "react-icons/fa";
import { ImGithub } from "react-icons/im";
import { IoLogoMedium } from "react-icons/io5";
import { Link } from "react-router-dom";

const socials = [
  {
    path: "https://www.linkedin.com/in/pawel-grzybek/",
    icon: <FaLinkedin />,
  },
  {
    path: "https://github.com/pawel9911",
    icon: <ImGithub />,
  },
  {
    path: "https://medium.com/@pawelgrzybek2",
    icon: <IoLogoMedium />,
  },
];

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

const Socials = () => {
  return (
    <ul className="flex justify-center gap-5">
      {socials.map((e) => (
        <motion.li
          key={e.path}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          variants={variants}
        >
          <Link to={e.path} className="text-3xl sm:text-5xl">
            {e.icon}
          </Link>
        </motion.li>
      ))}
    </ul>
  );
};

export default Socials;
