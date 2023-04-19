import React from "react";

const Home = ({ darkMode }) => {
  return (
    <div className={`section-right-body ${darkMode ? "dark" : ""} contact`} />
  );
};

export default Home;
