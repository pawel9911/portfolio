import { Link } from "react-router-dom";
import { paths } from "../../router/paths";

const Nav = () => {
  return (
    <nav>
      <ul className="flex gap-8">
        <li>
          <Link to={paths.home}>Home</Link>
        </li>
        <li>
          <Link to={paths.resume}>Resume</Link>
        </li>
        <li>
          <Link to={paths.projects}>Projects</Link>
        </li>
        <li>
          <Link to={paths.contact}>Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
