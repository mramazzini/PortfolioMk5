import React from "react";

const About = ({ darkMode }) => {
  return (
    <div className={`section-right-body ${darkMode ? "dark" : ""}`}>
      <div className={`section-right-header ${darkMode ? "dark" : ""}`}>
        <h1>About</h1>
      </div>

      <div className="about">
        <p>
          Welcome to my personal website! This website was built using React,
          Node.js, and MongoDB. The code for this website can be found on my
          GitHub.
        </p>
      </div>
    </div>
  );
};

export default About;
