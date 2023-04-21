import React, { useEffect, useState } from "react";

const Nav = ({ section, setSection, darkDiv, darkMode }) => {
  const [animateButtons, setAnimateButtons] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setAnimateButtons(false);
    }, 3000);
  }, []);

  const changeSection = (section) => {
    return () => {
      setSection(section);
    };
  };

  return (
    <div className="section-left-body">
      <div className="nav">
        <div className="nav-row">
          <button
            className={`nav-button ${darkMode ? "dark" : ""} ${
              section === "home" ? "active" : ""
            }`}
            onClick={changeSection("home")}
          >
            Home
          </button>
        </div>
        <div className="nav-row">
          <button
            className={`nav-button ${darkMode ? "dark" : ""} ${
              section === "About" ? "active" : ""
            } ${animateButtons ? "animate" : ""}`}
            onClick={changeSection("About")}
          >
            About
          </button>

          <button
            className={`nav-button ${darkMode ? "dark" : ""} ${
              section === "Projects" ? "active" : ""
            }  ${animateButtons ? "animate" : ""}`}
            onClick={changeSection("Projects")}
          >
            Projects
          </button>
        </div>
        <div className="nav-row">
          <button
            className={`nav-button ${darkMode ? "dark" : ""} ${
              section === "Contact" ? "active" : ""
            } ${animateButtons ? "animate" : ""}`}
            onClick={changeSection("Contact")}
          >
            Contact
          </button>
        </div>
      </div>
    </div>
  );
};

export default Nav;
