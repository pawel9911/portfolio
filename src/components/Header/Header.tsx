import { GiSuperMushroom } from "react-icons/gi";
import { Link } from "react-router-dom";
import { paths } from "../../router/paths";
import { MobileNav } from "../MobileNav";
import { Navigation } from "../Navigation";

const Header = () => {
  return (
    <header className="sticky top-0 z-10 w-full h-24 lg:h-28 flex items-center bg-slate-950/80 backdrop-blur-md border-b border-white/5">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link
          to={paths.home}
          className="group transition-transform duration-300 "
        >
          <div className="flex items-center gap-1">
            <p className="text-3xl lg:text-4xl font-bold tracking-tighter text-slate-100">
              Paweł <span className="text-red-500 italic">G</span>
            </p>

            <div className="relative flex items-center justify-center">
              <div className="absolute inset-0 bg-red-500/20 rounded-full blur-md animate-pulse"></div>
              <div className="relative border border-red-500/30 mx-2 rounded-full p-1.5 bg-slate-900 group-hover:border-red-500 transition-colors">
                <GiSuperMushroom className="text-xl text-red-500 group-hover:rotate-12 transition-transform" />
              </div>
            </div>
          </div>
        </Link>

        <div className="hidden lg:flex items-center gap-8">
          <div className="bg-slate-900/50 px-6 py-2 rounded-full border border-slate-800 shadow-inner">
            <Navigation />
          </div>
        </div>

        <div className="lg:hidden">
          <div className="p-2 rounded-xl bg-slate-900 border border-slate-800">
            <MobileNav />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
