import { Link } from "react-router-dom";

function Layout(props) {
  return (
    <div>
      <div className="header-container">
        <div className="header">
          <span>
            {" "}
            <Link className="nav-links" to="/">
              Jane Agadia
            </Link>
          </span>

          <ul>
            <li>
              <Link className="nav-links" to="/">
                Home
              </Link>
            </li>
            <li>
              {" "}
              <Link className="nav-links" to="/projects">
                Projects
              </Link>{" "}
            </li>
            <li>
              {" "}
              <Link className="nav-links" to="/contact">
                Resume
              </Link>{" "}
            </li>
            <li>
              {" "}
              <Link className="nav-links" to="/contact">
                Contact
              </Link>{" "}
            </li>
          </ul>
        </div>
      </div>

      {props.children}
    </div>
  );
}

export default Layout;
