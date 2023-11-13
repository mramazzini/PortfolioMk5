import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Stars from "../Stars.js";
const Projects = ({ darkMode, returnToHome, open }) => {
  const [deactive, setDeactive] = useState(false);
  const [activeCard, setActiveCard] = useState([false, false, false]);
  useEffect(() => {
    open();
    setTimeout(() => {
      setDeactive(true);
    }, 800);
  }, []);

  const pauseAnimation = (id) => {
    console.log(id);
    setActiveCard(
      [...activeCard].map((index, i) => {
        if (i === id) {
          return true;
        } else {
          return false;
        }
      })
    );
  };
  const continueAnimation = (id) => {
    setTimeout(() => {
      setActiveCard(
        activeCard.map((index) => {
          return false;
        })
      );
    }, 4000);
  };
  return (
    <div
      className={`section-right-body ${darkMode ? "dark" : ""} projects ${
        deactive ? "" : "deactive"
      }`}
    >
      <div className='projects-header'>
        Hover over a project to learn more! <br /> Click to go to the link!
      </div>
      <Stars />
      {/* <div className={`section-header ${darkMode ? "dark" : ""}`}>
        <div className="header-text">What am I working on?</div>
        <div className={`header-line ${darkMode ? "dark" : ""}`} />
      </div> */}
      <div className='projects-container'>
        <Link
          to='https://github.com/mramazzini/furniture-building'
          target='_blank'
          className={`card-container noselect ${activeCard[0] ? "active" : ""}`}
        >
          <div className={`canvas `}>
            <div className='tracker tr-1'></div>
            <div className='tracker tr-2'></div>
            <div className='tracker tr-3'></div>
            <div className='tracker tr-4'></div>
            <div className='tracker tr-5'></div>
            <div className='tracker tr-6'></div>
            <div className='tracker tr-7'></div>
            <div className='tracker tr-8'></div>
            <div className='tracker tr-9'></div>
            <div className='tracker tr-10'></div>
            <div className='tracker tr-11'></div>
            <div className='tracker tr-12'></div>
            <div className='tracker tr-13'></div>
            <div className='tracker tr-14'></div>
            <div className='tracker tr-15'></div>
            <div className='tracker tr-16'></div>
            <div className='tracker tr-17'></div>
            <div className='tracker tr-18'></div>
            <div className='tracker tr-19'></div>
            <div className='tracker tr-20'></div>
            <div className='tracker tr-21'></div>
            <div className='tracker tr-22'></div>
            <div className='tracker tr-23'></div>
            <div className='tracker tr-24'></div>
            <div className='tracker tr-25'></div>

            <div id='card'>
              <div className='card-background'> </div>
              <div id='prompt'>Personal Portfolio</div>
              <div className='title'>
                Swift Solutions furniture website.
                <br />
                Built with React and Node.js.
                <br />
              </div>
            </div>
            <div className='card-backdrop' />
          </div>
        </Link>
        <Link
          to='https://github.com/mramazzini/edu-site'
          target='_blank'
          className={`card-container noselect ${activeCard[0] ? "active" : ""}`}
        >
          <div className={`canvas `}>
            <div className='tracker tr-1'></div>
            <div className='tracker tr-2'></div>
            <div className='tracker tr-3'></div>
            <div className='tracker tr-4'></div>
            <div className='tracker tr-5'></div>
            <div className='tracker tr-6'></div>
            <div className='tracker tr-7'></div>
            <div className='tracker tr-8'></div>
            <div className='tracker tr-9'></div>
            <div className='tracker tr-10'></div>
            <div className='tracker tr-11'></div>
            <div className='tracker tr-12'></div>
            <div className='tracker tr-13'></div>
            <div className='tracker tr-14'></div>
            <div className='tracker tr-15'></div>
            <div className='tracker tr-16'></div>
            <div className='tracker tr-17'></div>
            <div className='tracker tr-18'></div>
            <div className='tracker tr-19'></div>
            <div className='tracker tr-20'></div>
            <div className='tracker tr-21'></div>
            <div className='tracker tr-22'></div>
            <div className='tracker tr-23'></div>
            <div className='tracker tr-24'></div>
            <div className='tracker tr-25'></div>

            <div id='card'>
              <div className='card-background'> </div>
              <div id='prompt'>Game Maker</div>
              <div className='title'>
                Desktop application to create 2D games.
                <br />
                built with React, Node and Electron.
                <br />
              </div>
            </div>
            <div className='card-backdrop' />
          </div>
        </Link>
        <Link
          to='https://github.com/mramazzini/C-Game-engine'
          target='_blank'
          className={`card-container noselect ${activeCard[0] ? "active" : ""}`}
        >
          <div className={`canvas `}>
            <div className='tracker tr-1'></div>
            <div className='tracker tr-2'></div>
            <div className='tracker tr-3'></div>
            <div className='tracker tr-4'></div>
            <div className='tracker tr-5'></div>
            <div className='tracker tr-6'></div>
            <div className='tracker tr-7'></div>
            <div className='tracker tr-8'></div>
            <div className='tracker tr-9'></div>
            <div className='tracker tr-10'></div>
            <div className='tracker tr-11'></div>
            <div className='tracker tr-12'></div>
            <div className='tracker tr-13'></div>
            <div className='tracker tr-14'></div>
            <div className='tracker tr-15'></div>
            <div className='tracker tr-16'></div>
            <div className='tracker tr-17'></div>
            <div className='tracker tr-18'></div>
            <div className='tracker tr-19'></div>
            <div className='tracker tr-20'></div>
            <div className='tracker tr-21'></div>
            <div className='tracker tr-22'></div>
            <div className='tracker tr-23'></div>
            <div className='tracker tr-24'></div>
            <div className='tracker tr-25'></div>

            <div id='card'>
              <div className='card-background'> </div>
              <div id='prompt'>Game Engine</div>
              <div className='title'>
                2D Game Engine.
                <br />
                Built with C++ and SDL library.
                <br />
              </div>
            </div>
            <div className='card-backdrop' />
          </div>
        </Link>
      </div>
      <button className='planet-btn' onClick={returnToHome}>
        <div className='planet'></div>
        <div className='planet-backdrop' />
        <div className='planet-text'>Go Back</div>
      </button>
      <div className='orbit-container'>
        <div className='orbit-box'>
          <div className='orbit' id='orbit-1' />
        </div>
        <div className='orbit-box'>
          <div className='orbit' id='orbit-2' />
        </div>
        <div className='orbit-box'>
          <div className='orbit' id='orbit-3' />
        </div>
      </div>
    </div>
  );
};

export default Projects;
