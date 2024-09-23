import { GiSuperMushroom } from "react-icons/gi";
import { Link } from "react-router-dom";
import { paths } from "../../router/paths";
import { MobileNav } from "../MobileNav";
import { Navigation } from "../Navigation";

const Header = () => {
  return (
    <header className="h-32 lg:h-40 flex items-center">
      <div className="container mx-auto flex items-center justify-between">
        <Link to={paths.home} className="z-10">
          <p className="text-6xl font-semibold relative">
            Paweł
            <span className="text-red-600">&nbsp;G</span>
            <span className="absolute bottom-0 translate-y-1/4 border inline-block rounded-full p-[2px]">
              <GiSuperMushroom className="text-base" />
            </span>
          </p>
        </Link>

        <div className="hidden lg:flex">
          <Navigation />
        </div>

        <div className="lg:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
