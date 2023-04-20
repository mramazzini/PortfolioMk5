import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const Projects = ({ darkMode, returnToHome, open }) => {
  const [deactive, setDeactive] = useState(false);
  useEffect(() => {
    open();
    setTimeout(() => {
      setDeactive(true);
    }, 800);
  }, []);
  return (
    <div
      className={`section-right-body ${darkMode ? "dark" : ""} projects ${
        deactive ? "" : "deactive"
      }`}
    >
      <div className={`section-header ${darkMode ? "dark" : ""}`}>
        <div className="header-text">What am I working on?</div>
        <div className={`header-line ${darkMode ? "dark" : ""}`} />
      </div>
      <div className="featured-project">
        <div className="project-image" id="project-image-1" />
        <div className="project-text">
          <div className="project-title">MERN Stack Educational Site</div>
          <div className="project-image" id="featured" />
          <div className="project-description">
            Full Stack application dedicated to teaching HTML, CSS, Javascript,
            React, MongoDB and NodeJS. This site is currently under
            construction, but the link is live and you can see the progress.
          </div>
          <div className="project-links">
            <Link to="" target="_blank" className="project-link">
              <div className="project-link-text">Github</div>

              <div className="project-link-icon" id="github-icon" />
            </Link>
            <Link to="" target="_blank" className="project-link">
              <div className="project-link-text">Live</div>
            </Link>
            <button className="return-home-button" onClick={returnToHome}>
              Go Back
            </button>
          </div>
        </div>
      </div>{" "}
      <div className="planet" />
    </div>
  );
};

export default Projects;
