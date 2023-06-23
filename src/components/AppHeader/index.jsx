import React, { useState } from 'react';
import './header.css';

const AppHeader = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    const rootElement = document.getElementById('root');
    rootElement.classList.toggle('theme-dark');
  };

  return (
    <div id="title">
      <h1>ENCRYPT</h1>
      <div className="checkbox-wrapper-54">
        <label className="switch">
          <input
            type="checkbox"
            checked={isDarkMode}
            onChange={toggleTheme}
          />
          <span className="slider"></span>
        </label>
      </div>
    </div>
  );
};

export default AppHeader;
