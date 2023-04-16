import React, { useEffect, useState } from "react";

const DarkModeToggle = ({ toggleDarkMode }) => {
  const [isChecked, setIsChecked] = useState(true);

  useEffect(() => {
    const body = document.body;
    if (isChecked) {
      body.classList.add("dark-mode");
    } else {
      body.classList.remove("dark-mode");
    }
    toggleDarkMode(isChecked);
  }, [isChecked]);

  const toggle = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="toggleWrapper">
      <input
        type="checkbox"
        className="dn"
        id="dn"
        checked={isChecked}
        onChange={toggle}
      />
      <label htmlFor="dn" className="toggle">
        <span className="toggle__handler">
          <span className="crater crater--1"></span>
          <span className="crater crater--2"></span>
          <span className="crater crater--3"></span>
        </span>
        <span className="star star--1"></span>
        <span className="star star--2"></span>
        <span className="star star--3"></span>
        <span className="star star--4"></span>
        <span className="star star--5"></span>
        <span className="star star--6"></span>
      </label>
    </div>
  );
};

export default DarkModeToggle;
