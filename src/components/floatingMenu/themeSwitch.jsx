import React, { useState } from 'react';
import './App.css';
import FloatingMenu from './FloatingMenu';

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleThemeChange = () => {
    setIsDarkMode(!isDarkMode);
    const rootElement = document.getElementById('root');
    rootElement.classList.toggle('theme-dark');
  };

  return (
    <div className="app">
      <h1>Mon application</h1>
      <FloatingMenu onThemeChange={handleThemeChange} />
      {/* Le reste du contenu de votre application */}
    </div>
  );
};

export default App;
