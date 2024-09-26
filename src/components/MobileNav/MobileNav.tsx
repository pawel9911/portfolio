import { motion, useCycle } from "framer-motion";
import { FaLinkedin } from "react-icons/fa";
import { ImGithub } from "react-icons/im";
import { IoMdClose } from "react-icons/io";
import { TbMenu2 } from "react-icons/tb";
import { Link, useLocation } from "react-router-dom";
import { useAccessibleNavigationPaths } from "../../router/utils";

const navVariants = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 50% -18px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: "circle(18px at 50% -18px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

const MobileNav = () => {
  const [statusNav, toggleStatusNav] = useCycle(false, true);
  const accessiblePaths = useAccessibleNavigationPaths();
  const location = useLocation();

  return (
    <nav>
      <motion.button
        onClick={() => toggleStatusNav()}
        animate={statusNav ? { transform: "rotate(180deg)" } : {}}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="p-2 w-10 h-10 inline-flex items-center justify-center rounded-full 
        text-red-600 hover:bg-red-300 focus:outline-none focus:ring-2 focus:ring-red-300 relative z-10"
      >
        <span className="sr-only">Open mobile menu</span>
        {statusNav ? <IoMdClose /> : <TbMenu2 />}
      </motion.button>
      <motion.div
        animate={statusNav ? "open" : "closed"}
        variants={navVariants}
        className="fixed inset-0 bg-nav pt-32 p-6"
      >
        <div className="container mx-auto h-full grid grid-rows-[1fr_auto] gap-7">
          <ul className="flex flex-col gap-7 pt-8">
            {accessiblePaths.map(({ isVisibleOnNavigation, name, path }) =>
              isVisibleOnNavigation ? (
                <li
                  key={path}
                  className={`${
                    location.pathname === path && "text-red-600"
                  } text-center font-bold text-3xl hover:text-red-600 transition-all`}
                >
                  <Link className="block" to={path}>
                    {name}
                  </Link>
                </li>
              ) : null
            )}
          </ul>
          <div className="flex justify-center gap-5">
            <Link to="https://github.com/pawel9911">
              <ImGithub className="text-4xl" />
            </Link>
            <Link to="https://www.linkedin.com/in/pawel-grzybek/">
              <FaLinkedin className="text-4xl" />
            </Link>
          </div>
        </div>
      </motion.div>
    </nav>
  );
};

export default MobileNav;
