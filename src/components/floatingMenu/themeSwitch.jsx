import React, { useState } from 'react';

const themeSwitch = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleThemeChange = () => {
    setIsDarkMode(!isDarkMode);
    const rootElement = document.getElementById('root');
    rootElement.classList.toggle('theme-dark');
  };

  return (
    <div className="checkbox-wrapper-54">
    <label className="switch">
      <input
        type="checkbox"
        checked={isDarkMode}
        onChange={handleThemeChange}
      />
      <span className="slider"></span>
    </label>
  </div>
  );
};

export default themeSwitch;
