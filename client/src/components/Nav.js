import React from "react";

const Nav = ({ section, setSection, darkDiv }) => {
  return (
    <div className="section-left-body">
      <div className="nav">
        <div className="nav-row">
          <button className="nav-button" onClick={() => setSection("home")}>
            Home
          </button>
        </div>
        <div className="nav-row">
          <button className="nav-button" onClick={() => setSection("About")}>
            About
          </button>
          {darkDiv}
          <button className="nav-button" onClick={() => setSection("Projects")}>
            Projects
          </button>
        </div>
        <div className="nav-row">
          <button className="nav-button" onClick={() => setSection("Contact")}>
            Contact
          </button>
        </div>
      </div>
    </div>
  );
};

export default Nav;
