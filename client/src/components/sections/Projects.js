import React from "react";
import { Link } from "react-router-dom";
const Projects = ({ darkMode, returnToHome, disengage }) => {
  return (
    <div className={`section-right-body ${darkMode ? "dark" : ""} projects `}>
      <div className={`section-header ${darkMode ? "dark" : ""}`}>
        <div className="header-text">What am I working on?</div>
        <div className={`header-line ${darkMode ? "dark" : ""}`} />
      </div>
      <div className="return-home-button" onClick={returnToHome}>
        Go Back
      </div>
      <div className="project-container">
        <div className="featured-project">
          <div className="project-image" id="project-image-1" />
          <div className="project-text">
            <div className="project-title">MERN Stack Educational Site</div>
            <div className="project-image" id="featured" />
            <div className="project-description">
              Full Stack application dedicated to teaching HTML, CSS,
              Javascript, React, MongoDB and NodeJS. This site is currently
              under construction, but the link is live and you can see the
              progress.
            </div>
            <div className="project-links">
              <Link to="" target="_blank" className="project-link">
                <div className="project-link-text">Github</div>

                <div className="project-link-icon" id="github-icon" />
              </Link>
              <Link to="" target="_blank" className="project-link">
                <div className="project-link-text">Live</div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
