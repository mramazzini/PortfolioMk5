import React, { useEffect, useState, useRef } from "react";
import { TypeAnimation } from "react-type-animation";
import Nav from "./Nav";
import DarkModeToggle from "./DarkModeToggle";
import Home from "./sections/Home";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
const HomeBody = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [bodyActivated, setBodyActivated] = useState(false);
  const [section, setSection] = useState("home");
  const [initialized, setInitialized] = useState(false);
  const [textAnimationFontSize, setTextAnimationFontSize] = useState("2rem");
  const toggleDarkMode = () => {
    console.log(section);
    if (!initialized) {
      setInitialized(true);
      return;
    }
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    if (window.innerWidth > 768) {
      setTextAnimationFontSize("3rem");
    } else {
      setTextAnimationFontSize("1.5rem");
    }
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
          <h1 style={{ fontSize: textAnimationFontSize }}>Hi, I'm</h1>
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
              fontSize: "2.5em",
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
        <div className={`section-right ${darkMode ? "dark" : ""} `}>
          {section === "home" ? (
            <Home darkMode={darkMode} />
          ) : section === "About" ? (
            <About darkMode={darkMode} />
          ) : section === "Projects" ? (
            <Projects darkMode={darkMode} />
          ) : section === "Contact" ? (
            <Contact darkMode={darkMode} />
          ) : (
            <Home />
          )}
        </div>
      ) : (
        <div className="section-right body-hidden"></div>
      )}
    </div>
  );
};
export default HomeBody;
