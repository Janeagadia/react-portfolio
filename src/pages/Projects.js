import ProjectData from "./ProjectData";
import Button from "../layout/button";
import { Link } from "react-router-dom";

function Projects() {
  return (
    <div className="pages project-page">
      <h1>My Projects</h1>

      <div className="project-container">{ProjectData}</div>
      <div className="link-div">
        <Link to="/contact">
          <Button text="Contact" />
        </Link>
      </div>
    </div>
  );
}

export default Projects;
