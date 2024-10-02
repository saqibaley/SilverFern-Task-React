// Header1.js
import React, { useState } from "react";
import searchLogo from "../images/seachIcon.svg";
import joinBtnArrow from "../images/joinBtnArrow.svg";
import arrowDown from "../images/arrowDown.svg";

const Header1 = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLinks, setActiveLinks] = useState({
    home: true,
    membership: false,
    hotels: false,
    infinia: false,
    history: false,
  });

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = (link) => {
    setActiveLinks((prevState) => ({
      ...prevState,
      [link]: !prevState[link],
    }));
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src={searchLogo} alt="Search Logo" className="navbar-logo" />
      </div>

      {/* Navigation Links */}
      <ul className={`navbar-links ${isOpen ? "open" : ""}`}>
        {["home", "membership", "hotels", "infinia", "history"].map((link) => (
          <li key={link}>
            <a
              href={`#${link}`}
              onClick={() => handleLinkClick(link)}
              className={activeLinks[link] ? "active" : ""}
            >
              {link.toUpperCase()}
            </a>
          </li>
        ))}
      </ul>

      {/* Join Us Button and Log In */}
      <div className="navbar-right">
        <button className="join-button">
          JOIN US
          <img src={joinBtnArrow} alt="Right Arrow" className="arrow-icon" />
        </button>

        <a href="#login" className="login-link">
          LOG IN
        </a>

        <div className="language-dropdown">
          EN{" "}
          <img src={arrowDown} alt="Down Arrow" className="down-arrow-icon" />
        </div>

        <div className="hamburger" onClick={toggleMenu}>
          <span className={`bar ${isOpen ? "open" : ""}`}></span>
          <span className={`bar ${isOpen ? "open" : ""}`}></span>
          <span className={`bar ${isOpen ? "open" : ""}`}></span>
        </div>
      </div>
    </nav>
  );
};

export default Header1;
