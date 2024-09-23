import { Link } from "react-router-dom";
import { GiSuperMushroom } from "react-icons/gi";
import { Navigation } from "../Navigation";
import { paths } from "../../router/paths";

const Header = () => {
  return (
    <header className="py-8 xl:py-12 ">
      <div className="container mx-auto flex items-center justify-between">
        <Link to={paths.home}>
          <p className="text-6xl font-semibold relative">
            Paweł
            <span className="text-red-600">&nbsp;G</span>
            <span className="absolute bottom-0 translate-y-1/4 border inline-block rounded-full p-[2px]">
              <GiSuperMushroom className="text-base" />
            </span>
          </p>
        </Link>

        <div className="hidden xl:flex">
          <Navigation />
        </div>

        <div className="xl:hidden">mobile nav</div>
      </div>
    </header>
  );
};

export default Header;
