import ProjectData from "./ProjectData";
import Button from "../layout/button";
import { Link } from "react-router-dom";

function Projects() {
  return (
    <div className="pages project-page">
      My Projects
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
