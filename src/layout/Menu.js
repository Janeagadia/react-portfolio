import { Link } from "react-router-dom";
import resume from "../asset/JANE'S RESUME.pdf";
import React, { useEffect, useState } from "react";

const Menu = () => {
  const [open, setOpen] = useState(false);

  const onClickIcon = () => {
    setOpen(true);
  };
  const onClickClose = () => {
    setOpen(false);
  };

  return (
    <div className="header">
      <span>
        {" "}
        <Link className="nav-links " to="/">
          Jane Agadia
        </Link>
      </span>

      <ul className={`nav-items ${open ? "active" : null}`}>
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
          <a className="nav-links" href={resume}>
            Resume
          </a>
        </li>
        <li>
          {" "}
          <Link className="nav-links" to="/contact">
            Contact
          </Link>{" "}
        </li>
      </ul>

      <div
        className={`open-nav-icon hidden ${!open ? "active" : null}`}
        onClick={onClickIcon}
      >
        <i className="bars icon large"></i>
      </div>
      <div
        className={`close-nav-icon hidden ${open ? "active" : null}`}
        onClick={onClickClose}
      >
        <i className="x icon large"></i>
      </div>
    </div>
  );
};

export default Menu;
