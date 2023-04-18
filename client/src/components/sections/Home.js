import React from "react";

const Home = ({ darkMode }) => {
  return (
    <div className=" home section-right-body">
      <div className={`home-header-main ${darkMode ? "dark" : ""}`}>
        Thanks for stopping by!
      </div>

      <svg
        className="arrow"
        width="200"
        height="200"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g>
          <title>Layer 1</title>
          <path
            transform="rotate(180 99.7053 74.5494)"
            stroke={darkMode ? "#fff" : "#000"}
            fill="none"
            d="m84.60448,18.5786l0,-16.0786l-82.10449,49.80088l82.10449,49.80132l0,-17.25262c22.27951,-0.01094 61.39275,1.98929 61.39275,16.16555c0,19.80754 -40.84918,30.37427 -40.84918,30.37427l0,15.18696c0,0 91.76248,3.29387 91.76248,-69.98904c0,-57.57399 -78.59112,-59.73747 -112.30604,-58.00871l0,-0.00001z"
            id="svg_9"
            stroke-width="5"
          />
        </g>
      </svg>
      <p>
        Click on the links above to learn more about me, my projects, and how to
        contact me.
      </p>
    </div>
  );
};

export default Home;
