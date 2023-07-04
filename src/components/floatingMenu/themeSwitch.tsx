import React, { useState, useEffect } from 'react';

type ThemeSwitchProps = {
  initialDarkMode: boolean;
};

const ThemeSwitch: React.FC<ThemeSwitchProps> = ({ initialDarkMode = false}: ThemeSwitchProps): JSX.Element => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(initialDarkMode);

  useEffect(() => {
    const rootElement: HTMLElement | null = document.getElementById('root');
    if (isDarkMode) {
      rootElement?.classList.add('theme-dark');
    } else {
      rootElement?.classList.remove('theme-dark');
    }
  }, [isDarkMode]);

  /**
   * Toggles the theme between light and dark mode.
   *
   * @returns {void}
   */
  const handleThemeChange = (): void => {
    setIsDarkMode(!isDarkMode);
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
