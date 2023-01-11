import Button from "../layout/button";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className="pages ">
      {/* <h1>ABOUT ME</h1> */}
      <h1>Hello! I'm Jane Agadia, </h1>
      <p className="role-text">A Front-end Developer.</p>
      <p className="homepage-text">
        I enjoy creating interactive websites and applications.
        <br /> I also enjoy teaching, smart conversations and connecting with
        people.
      </p>

      <div>
        Some of the technologies I've been working with are;
        <ul className="tools-icons">
          <li>
            <i className=" large yellow js icon"></i>{" "}
          </li>
          <li>
            {" "}
            <i className=" large green html5 icon"></i>{" "}
          </li>
          <li>
            <i className=" large blue css3 alternate icon"></i>
          </li>
          <li>
            <i className=" large blue react icon"></i>
          </li>
          <li>
            <i className=" large  github icon"></i>
          </li>
        </ul>
      </div>
      <div className="link-div">
        <Link to="/projects">
          <Button text="Projects" />
        </Link>
      </div>
    </div>
  );
}

export default HomePage;
