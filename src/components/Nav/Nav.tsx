import { Link, useLocation } from "react-router-dom";
import { useAccessibleNavigationPaths } from "../../router/utils";

const Nav = () => {
  const accessiblePaths = useAccessibleNavigationPaths();
  const location = useLocation();

  return (
    <nav>
      <ul className="flex gap-8">
        {accessiblePaths.map(({ isVisibleOnNavigation, name, path }) =>
          isVisibleOnNavigation ? (
            <li
              key={path}
              className={`${
                location.pathname === path &&
                "text-red-600 border-b-2 border-red-600"
              } font-medium hover:text-red-600 transition-all`}
            >
              <Link to={path}>{name}</Link>
            </li>
          ) : null
        )}
      </ul>
    </nav>
  );
};

export default Nav;
