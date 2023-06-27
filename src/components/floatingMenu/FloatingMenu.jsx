import React from "react";
import ThemeSwitch from "./themeSwitch";
import "./FloatingMenu.scss";
import vernamIcon from "/var/www/html/spé React/S9/EP3/encrypt/src/assets/web icons/vernam.png";
import generatorIcon from "/var/www/html/spé React/S9/EP3/encrypt/src/assets/web icons/generator.png";
import caesarIcon from "/var/www/html/spé React/S9/EP3/encrypt/src/assets/web icons/caesar.png";

const FloatingMenu = () => {
  return (
    <div id="menu">
      <input type="checkbox" id="menu-toggle" />
      <ul className="menu-items">
      <li className="menu-item">
          <ThemeSwitch />
        </li>
        <li className="menu-item">
          <a href="#caesar-section"><img src={caesarIcon} alt="Caesar Icon" /></a>
        </li>
        <li className="menu-item">
          <a href="#Vernam-section"><img src={vernamIcon} alt="Vernam Icon" /></a>
        </li>
        <li className="menu-item">
          <a href="#Password-section"><img src={generatorIcon} alt="Generator Icon" /></a>
        </li>
      </ul>
    </div>
  );
};

export default FloatingMenu;
