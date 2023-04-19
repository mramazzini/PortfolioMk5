import React from "react";
import { Link } from "react-router-dom";
const About = ({ darkMode }) => {
  return (
    <div className={`section-right-body ${darkMode ? "dark" : ""} about`}>
      <div className={`section-header ${darkMode ? "dark" : ""}`}>
        <div className="header-text">About</div>
        <div className={`header-line ${darkMode ? "dark" : ""}`} />
      </div>
      <div className="current-positions">
        <div className="current-position">
          <div className="company-logo" id="edx-logo" />
          <div className="current-position-header">
            <div className="current-position-title">Teaching Assistant</div>
            <div
              className={`current-position-company ${darkMode ? "dark" : ""}`}
            >
              Edx
            </div>
            <div className={`header-line ${darkMode ? "dark" : ""}`} />
          </div>
        </div>
        <div className="current-position">
          <div className="company-logo" id="uh-logo" />
          <div className="current-position-header">
            <div className="current-position-title">
              Computer Science and Sales
            </div>
            <div
              className={`current-position-company ${darkMode ? "dark" : ""}`}
            >
              University of Houston
            </div>
            <div className={`header-line ${darkMode ? "dark" : ""}`} />
          </div>
        </div>
      </div>

      <div className="icons-container">
        <div className={`icon-container ${darkMode ? "dark" : ""}`}>
          <div className="icon">
            <div className={`hexagon ${darkMode ? "dark" : ""}`}>
              <div className="icon-image" id="speedometer" />
            </div>
          </div>
          <div className="icon-text">
            <div className="bold"> Fast</div>

            <div className="normal">Load times and lag free interaction</div>
          </div>
        </div>
        <div className={`icon-container ${darkMode ? "dark" : ""}`}>
          <div className="icon">
            <div className={`hexagon ${darkMode ? "dark" : ""}`}>
              <div className="icon-image" id="responsive" />
            </div>
          </div>
          <div className="icon-text">
            <div className="bold"> Responsive</div>

            <div className="normal">Design works on any device</div>
          </div>
        </div>
        <div className={`icon-container ${darkMode ? "dark" : ""}`}>
          <div className="icon">
            <div className={`hexagon ${darkMode ? "dark" : ""}`}>
              <div className="icon-image" id="bulb" />
            </div>
          </div>
          <div className="icon-text">
            <div className="bold"> Intuitive</div>

            <div className="normal">UX/UI design that focuses on the user</div>
          </div>
        </div>
      </div>
      <div className="media-icons-container">
        <div className="icon-container  clickable">
          <div className="icon">
            <div className={`hexagon  ${darkMode ? "dark" : ""}`} id="github">
              <Link to="https://github.com/mramazzini" target="_blank">
                <div className="icon-image " id="github" />
              </Link>
            </div>
          </div>
        </div>
        <div className="icon-container clickable">
          <div className="icon">
            <div className={`hexagon  ${darkMode ? "dark" : ""}`} id="linkedin">
              <Link
                to="https://www.linkedin.com/in/matteo-ramazzini/"
                target="_blank"
              >
                <div className="icon-image " id="linkedin" />
              </Link>
            </div>
          </div>
        </div>
        <div className="icon-container clickable">
          <div className="icon">
            <div className={`hexagon ${darkMode ? "dark" : ""}`} id="resume">
              <Link
                to="https://docs.google.com/document/d/1c4Osj5DolhG_0aajPyQpNgGjOwkETryZPVIWtfE56f4/edit?usp=sharing "
                target="_blank"
              >
                <div className="icon-image " id="resume" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
