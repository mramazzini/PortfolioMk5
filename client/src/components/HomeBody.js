import React, { useEffect, useState, useRef } from "react";
import { TypeAnimation } from "react-type-animation";
import Nav from "./Nav";
import DarkModeToggle from "./DarkModeToggle";
import Home from "./sections/Home";
import Stars from "./Stars.js";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import { Link } from "react-router-dom";
const HomeBody = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [bodyActivated, setBodyActivated] = useState(false);
  const [section, setSection] = useState("home");
  const [initialized, setInitialized] = useState(false);
  const [textAnimationFontSize, setTextAnimationFontSize] = useState("2rem");
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [loadingScreen, setLoadingScreen] = useState(true);
  const [disengage, setDisengage] = useState(false);

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
      setLoadingScreen(false);
    }, 3000);
  }, []);
  useEffect(() => {
    if (window.innerWidth > 768) {
      setTextAnimationFontSize("3rem");
    } else {
      setTextAnimationFontSize("1.5rem");
    }
  }, []);

  const returnToHome = () => {
    setDisengage(true);
    setTimeout(() => {
      setSection("home");
    }, 400);
    setTimeout(() => {
      setDisengage(false);
    }, 1500);
  };

  const goToProjects = () => {
    setDisengage(true);
    setTimeout(() => {
      setSection("Projects");
    }, 400);
    setTimeout(() => {
      setDisengage(false);
    }, 1500);
  };
  useEffect(() => {
    if (section !== "home") {
      setBodyActivated(false);
    } else {
      setBodyActivated(true);
    }
  }, [section]);

  return !loadingScreen ? (
    <div className={`home-body ${darkMode ? "dark" : ""}`}>
      {disengage ? (
        <div className={`disengage ${darkMode ? "dark" : ""}`}>
          <div className='disengage-back' />
          <div className='disengage-right' />
          <div className='disengage-left' />
        </div>
      ) : null}
      <div
        className={`section-left ${darkMode ? "dark" : ""} ${
          section === "Projects" ? "project-hidden" : ""
        } `}
      >
        <div
          className={`section-left-header ${darkMode ? "dark" : ""} ${
            bodyActivated ? "" : "activated"
          }`}
        >
          <span style={{ fontSize: textAnimationFontSize }}>Hi, I'm</span>

          <TypeAnimation
            sequence={[
              "Matteo Ramazzini",
              2000,
              "a developer.",
              2000,
              "a student.",
              2000,
              "a learner.",

              2000,
              "Matteo Ramazzini",
            ]}
            wrapper='div'
            cursor={false}
            style={{
              textDecoration: "none",
              fontSize: "2.5em",
              fontWeight: "bolder",
            }}
          />
        </div>

        <Nav
          section={section}
          setSection={setSection}
          darkDiv={<DarkModeToggle toggleDarkMode={toggleDarkMode} />}
          darkMode={darkMode}
        />
        <div
          className={`media-icons-container ${
            bodyActivated ? "" : "mobile-hide"
          }`}
        >
          <div className='icon-container  clickable'>
            <div className='icon'>
              <div className={`hexagon  ${darkMode ? "dark" : ""}`} id='github'>
                <Link to='https://github.com/mramazzini' target='_blank'>
                  <div className='icon-image ' id='github' />
                </Link>
              </div>
            </div>
          </div>
          <div className='icon-container clickable'>
            <div className='icon'>
              <div
                className={`hexagon  ${darkMode ? "dark" : ""}`}
                id='linkedin'
              >
                <Link
                  to='https://www.linkedin.com/in/matteo-ramazzini/'
                  target='_blank'
                >
                  <div className='icon-image ' id='linkedin' />
                </Link>
              </div>
            </div>
          </div>
          <div className='icon-container clickable'>
            <div className='icon'>
              <div className={`hexagon ${darkMode ? "dark" : ""}`} id='resume'>
                <Link
                  to='https://drive.google.com/file/d/1g6_XrtjPJX9k0N6Ab3NX4WEXXVnNJ2qo/view?usp=sharing'
                  target='_blank'
                >
                  <div className='icon-image ' id='resume' />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {!bodyActivated || section !== "home" ? (
        <div
          className={`section-right ${darkMode ? "dark" : ""} ${
            section === "Projects" ? "section-right-projects" : ""
          }`}
        >
          {section === "home" ? (
            <div className='section-right body-hidden'></div>
          ) : section === "About" ? (
            <About darkMode={darkMode} />
          ) : section === "Projects" ? (
            <Projects
              darkMode={darkMode}
              returnToHome={returnToHome}
              open={goToProjects}
            />
          ) : //<h1>This site is under construction!</h1>
          section === "Contact" ? (
            <Contact darkMode={darkMode} />
          ) : (
            <Home />
          )}
        </div>
      ) : (
        <div className='section-right body-hidden'></div>
      )}
    </div>
  ) : (
    <div className={`loading-screen ${darkMode ? "dark" : ""}`}>
      <div
        aria-label='Orange and tan hamster running in a metal wheel'
        role='img'
        className='wheel-and-hamster'
      >
        <div className='wheel'></div>
        <div className='hamster'>
          <div className='hamster__body'>
            <div className='hamster__head'>
              <div className='hamster__ear'></div>
              <div className='hamster__eye'></div>
              <div className='hamster__nose'></div>
            </div>
            <div className='hamster__limb hamster__limb--fr'></div>
            <div className='hamster__limb hamster__limb--fl'></div>
            <div className='hamster__limb hamster__limb--br'></div>
            <div className='hamster__limb hamster__limb--bl'></div>
            <div className='hamster__tail'></div>
          </div>
        </div>
        <div className='spoke'></div>
      </div>
    </div>
  );
};
export default HomeBody;
