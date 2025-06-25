import React, { useState } from 'react';
import './Header.css';
import logo from './5920.jpg'; // use your logo image

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="header-container">
        {/* Logo */}
        <a href="/" className="logo-link">
          <img src={logo} alt="Learnify Logo" className="logo-img" />
        </a>

        {/* Desktop Nav */}
        <nav className={`nav-menu ${menuOpen ? 'open' : ''}`}>
          <ul className="nav-list">
            <li><a href="/">Home</a></li>
            <li><a href="/about-us">About us</a></li>
            <li><a href="#">Courses</a></li>
            <li><a href="/contact-us">Contact us</a></li>
            <li>
              <a href="/competitions">
                Competitions <span className="new-badge">NEW</span>
              </a>
            </li>
          </ul>
        </nav>

        {/* Contact & Button */}
        <div className="contact-actions">
          <a href="tel:03462309242" className="call-us">
            <span className="call-label">Talk with us?</span>
            <span className="call-number">0341-8649483</span>
          </a>
          <button type="button" className="enroll-button">Enroll Now</button>
        </div>

        {/* Hamburger */}
        <button
          className="mobile-menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
        >
          <div className="hamburger-icon">
            <div></div>
            <div></div>
            <div></div>
          </div>
        </button>
      </div>

      {/* Mobile Overlay */}
      {menuOpen && (
        <div className="mobile-menu-overlay">
          <ul>
            <li><a href="/" onClick={() => setMenuOpen(false)}>Home</a></li>
            <li><a href="/about-us" onClick={() => setMenuOpen(false)}>About us</a></li>
            <li><a href="#" onClick={() => setMenuOpen(false)}>Courses</a></li>
            <li><a href="/contact-us" onClick={() => setMenuOpen(false)}>Contact us</a></li>
            <li>
              <a href="/competitions" onClick={() => setMenuOpen(false)}>
                Competitions <span className="new-badge">NEW</span>
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
