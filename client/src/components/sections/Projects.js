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
      <div className="projects-container">
        <div class="container noselect">
          <div class="canvas">
            <div class="tracker tr-1"></div>
            <div class="tracker tr-2"></div>
            <div class="tracker tr-3"></div>
            <div class="tracker tr-4"></div>
            <div class="tracker tr-5"></div>
            <div class="tracker tr-6"></div>
            <div class="tracker tr-7"></div>
            <div class="tracker tr-8"></div>
            <div class="tracker tr-9"></div>
            <div class="tracker tr-10"></div>
            <div class="tracker tr-11"></div>
            <div class="tracker tr-12"></div>
            <div class="tracker tr-13"></div>
            <div class="tracker tr-14"></div>
            <div class="tracker tr-15"></div>
            <div class="tracker tr-16"></div>
            <div class="tracker tr-17"></div>
            <div class="tracker tr-18"></div>
            <div class="tracker tr-19"></div>
            <div class="tracker tr-20"></div>
            <div class="tracker tr-21"></div>
            <div class="tracker tr-22"></div>
            <div class="tracker tr-23"></div>
            <div class="tracker tr-24"></div>
            <div class="tracker tr-25"></div>
            <div id="card">
              <p id="prompt">Mern Edu Site</p>
              <div class="title">
                Educational Site
                <br />
                dedicated to teaching the MERN tech stack
              </div>
              <Link to="" target="_blank" class="subtitle">
                Github
              </Link>
              <Link to="" target="_blank" class="subtitle">
                Live
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="planet" />
    </div>
  );
};

export default Projects;
