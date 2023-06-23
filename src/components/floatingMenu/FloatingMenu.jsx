import React, { useState } from 'react';
import './FloatingMenu.css';

const FloatingMenu = ({ onThemeChange }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = (e) => {
    // Logique pour rediriger vers différentes sections de la page
    // Vous pouvez utiliser la navigation React Router ou toute autre méthode de navigation de votre choix
  };

  return (
    <div className="floating-menu">
      <div className="menu-icon" onClick={toggleMenu}>
        {/* Icône de votre choix pour représenter le menu */}
      </div>
      {isMenuOpen && (
        <div className="menu-dropdown">
          <ul>
            <li> 
              <div className="checkbox-wrapper-54">
                <label className="switch">
                  <input
                    type="checkbox"
                    onChange={onThemeChange} // Appel de la fonction de gestion du thème passée en tant que prop
                  />
                  <span className="slider"></span>
                </label>
              </div>
            </li>
            <li onClick={handleLinkClick}>Accueil</li>
            <li onClick={handleLinkClick}>Services</li>
            <li onClick={handleLinkClick}>À propos</li>
            {/* Ajoutez d'autres liens pour les différentes sections de la page */}
          </ul>
        </div>
      )}
    </div>
  );
};

export default FloatingMenu;
