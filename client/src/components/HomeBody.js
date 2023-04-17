import React, { useEffect, useState, useRef } from "react";
import { TypeAnimation } from "react-type-animation";
import Nav from "./Nav";
import DarkModeToggle from "./DarkModeToggle";

const HomeBody = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [bodyActivated, setBodyActivated] = useState(false);
  const [section, setSection] = useState("home");
  const [initialized, setInitialized] = useState(false);
  const toggleDarkMode = () => {
    console.log(section);
    if (!initialized) {
      setInitialized(true);
      return;
    }
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    setTimeout(() => {
      setBodyActivated(true);
    }, 2000);
  }, []);

  return (
    <div className={`home-body ${darkMode ? "dark" : ""}`}>
      <div
        className={`section-left ${darkMode ? "dark" : ""} ${
          bodyActivated ? "section-left-adjusted" : " "
        }`}
      >
        <div className={`section-left-header ${darkMode ? "dark" : ""}`}>
          <h1>Hi, I'm</h1>
          <TypeAnimation
            sequence={[
              "Matteo Ramazzini",
              2000,
              "a student.",
              2000,
              "a developer.",
              2000,
              "a learner.",

              2000,
              "Matteo Ramazzini",
            ]}
            wrapper="div"
            cursor={false}
            style={{
              textDecoration: "none",
              fontSize: "3vw",
            }}
          />
        </div>

        {bodyActivated ? (
          <Nav
            section={section}
            setSection={setSection}
            darkDiv={<DarkModeToggle toggleDarkMode={toggleDarkMode} />}
            darkMode={darkMode}
          />
        ) : (
          ""
        )}
      </div>
      {bodyActivated ? (
        <div className={`section-right ${darkMode ? "dark" : ""}`}>
          {section === "home" ? (
            <div className="section-right-body">
              <h1>Home</h1>
            </div>
          ) : section === "About" ? (
            <div className="section-right-body">
              <h1>About</h1>
            </div>
          ) : section === "Projects" ? (
            <div className="section-right-body">
              <h1>Projects</h1>
            </div>
          ) : section === "Contact" ? (
            <div className="section-right-body">
              <h1>Contact</h1>
            </div>
          ) : (
            <div className="section-right-body">
              <h1>Home</h1>
            </div>
          )}
        </div>
      ) : (
        <div className="section-right body-hidden"></div>
      )}
    </div>
  );
};
export default HomeBody;
