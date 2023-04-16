import React, { useEffect, useState, useRef } from "react";
import { TypeAnimation } from "react-type-animation";
import Nav from "./Nav";
import DarkModeToggle from "./DarkModeToggle";

const HomeBody = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [bodyActivated, setBodyActivated] = useState(false);
  const [section, setSection] = useState("home");
  const [initialized, setInitialized] = useState(false);
  const toggleDarkMode = () => {
    console.log(darkMode);
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
              fontSize: "3rem",
            }}
          />
        </div>

        {bodyActivated ? (
          <Nav
            section={section}
            setSection={setSection}
            darkDiv={<DarkModeToggle toggleDarkMode={toggleDarkMode} />}
          />
        ) : (
          ""
        )}
      </div>
      {bodyActivated ? (
        <div className={`section-right ${darkMode ? "dark" : ""}`}></div>
      ) : (
        <div className="section-right body-hidden"></div>
      )}
    </div>
  );
};
export default HomeBody;
