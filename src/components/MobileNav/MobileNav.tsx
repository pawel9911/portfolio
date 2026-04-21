import { motion, useCycle, Variant } from "framer-motion";
import { useEffect } from "react";
import { GiSuperMushroom } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { TbMenu2 } from "react-icons/tb";
import { Link, useLocation } from "react-router-dom";
import { useAccessibleNavigationPaths } from "../../router/utils";
import { Socials } from "../Socials";

const navVariants = {
  open: {
    clipPath: `circle(150% at 90% 50%)`,
    transition: {
      type: "spring",
      stiffness: 30,
      restDelta: 2,
    },
  },
  closed: {
    clipPath: "circle(0% at 90% 50%)",
    transition: {
      delay: 0.1,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

const liVariants: Record<string, Variant> = {
  open: {
    opacity: 1,
    y: 0,
    transition: { y: { stiffness: 1000, velocity: -100 } },
  },
  closed: {
    opacity: 0,
    y: 20,
    transition: { y: { stiffness: 1000 } },
  },
};

const MobileNav = () => {
  const [statusNav, toggleStatusNav] = useCycle(false, true);
  const accessiblePaths = useAccessibleNavigationPaths();
  const location = useLocation();

  useEffect(() => {
    if (statusNav) toggleStatusNav();
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = statusNav ? "hidden" : "auto";
  }, [statusNav]);

  return (
    <nav className="flex items-center">
      <motion.button
        onClick={() => toggleStatusNav()}
        animate={statusNav ? { rotate: 180 } : { rotate: 0 }}
        whileTap={{ scale: 0.9 }}
        className="relative z-50 text-red-500 flex items-center justify-center transition-colors"
      >
        <span className="sr-only">Menu</span>
        {statusNav ? (
          <IoMdClose className="text-3xl" />
        ) : (
          <TbMenu2 className="text-3xl" />
        )}
      </motion.button>

      <motion.div
        initial="closed"
        animate={statusNav ? "open" : "closed"}
        variants={navVariants}
        className="fixed h-screen inset-0 z-40 bg-slate-950/95 backdrop-blur-2xl flex flex-col"
      >
        {/* Dekoracyjny element pulsujący w tle - spójny z logo */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-red-500/5 rounded-full blur-[120px] pointer-events-none animate-pulse" />

        <div className="container mx-auto h-full flex flex-col justify-between py-24 px-6 relative z-10">
          <motion.ul
            variants={{
              open: {
                transition: { staggerChildren: 0.1, delayChildren: 0.3 },
              },
              closed: {
                transition: { staggerChildren: 0.05, staggerDirection: -1 },
              },
            }}
            className="flex flex-col gap-4 items-center"
          >
            {accessiblePaths.map(({ name, path }) => {
              const isActive = location.pathname === path;
              return (
                <motion.li
                  key={path}
                  variants={liVariants}
                  className="w-full max-w-sm"
                >
                  <Link
                    to={path}
                    className={`group relative flex items-center justify-center gap-3 py-5 rounded-2xl border transition-all duration-300 ${
                      isActive
                        ? "bg-slate-900 border-red-500/50 shadow-[0_0_20px_rgba(239,68,68,0.1)]"
                        : "bg-slate-900/50 border-white/5 hover:border-red-500/30"
                    }`}
                  >
                    <span
                      className={`text-xl font-bold tracking-tighter uppercase transition-colors ${
                        isActive
                          ? "text-red-500"
                          : "text-slate-100 group-hover:text-red-400"
                      }`}
                    >
                      {name}
                    </span>
                    {isActive && (
                      <motion.div
                        initial={{ scale: 0, rotate: -20 }}
                        animate={{ scale: 1, rotate: 0 }}
                        className="relative"
                      >
                        <GiSuperMushroom className="relative text-2xl text-red-500" />
                      </motion.div>
                    )}
                  </Link>
                </motion.li>
              );
            })}
          </motion.ul>

          <motion.div
            variants={liVariants}
            className="flex flex-col items-center gap-8 border-t border-white/10 pt-10"
          >
            <Socials
              listStyles="flex gap-8"
              listElementStyles="text-3xl text-slate-300 hover:text-red-500 transition-all duration-300 hover:-translate-y-1"
            />
            <p className="text-[11px] uppercase tracking-[0.4em] text-slate-300 font-bold opacity-80">
              Design & Dev by <span className="text-red-500">Paweł</span>
            </p>
          </motion.div>
        </div>
      </motion.div>
    </nav>
  );
};

export default MobileNav;
