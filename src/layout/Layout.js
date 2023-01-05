import { Link } from "react-router-dom";

function Layout(props) {
  return (
    <div className="nav-bar">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          {" "}
          <Link to="/projects">Projects</Link>{" "}
        </li>
        <li>
          {" "}
          <Link to="/contact">Contact</Link>{" "}
        </li>
      </ul>

      {props.children}
    </div>
  );
}

export default Layout;
