import React from "react";

const Nav = ({ section, setSection, darkDiv, darkMode }) => {
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
            }`}
            onClick={changeSection("About")}
          >
            About
          </button>
          {darkDiv}
          <button
            className={`nav-button ${darkMode ? "dark" : ""} ${
              section === "Projects" ? "active" : ""
            }  `}
            onClick={changeSection("Projects")}
          >
            Projects
          </button>
        </div>
        <div className="nav-row">
          <button
            className={`nav-button ${darkMode ? "dark" : ""} ${
              section === "Contact" ? "active" : ""
            } `}
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
