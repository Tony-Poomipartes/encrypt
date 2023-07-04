import React, { useState } from 'react';

type ThemeSwitchProps = {
  initialDarkMode: boolean;
};

const ThemeSwitch: React.FC<ThemeSwitchProps> = ({ initialDarkMode }) => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(initialDarkMode);

  /**
   * Toggles the theme between light and dark mode.
   */
  const handleThemeChange = () => {
    setIsDarkMode(!isDarkMode);
    const rootElement = document.getElementById('root');
    rootElement?.classList.toggle('theme-dark');
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

export default ThemeSwitch;
