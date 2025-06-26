import React, { useState } from 'react';
import './Header.css';
import logo from './LearnifyAcademy-Logo.b9e022a9.png';

const courses = [
  {
    title: "Web Application Development",
    description: "Master the art of building robust, scalable web applications using the MERN stack.",
    link: "/courses/web-application-development",
  },
  {
    title: "Computer Information Technology",
    description: "Gain essential skills in IT, graphic design, web development, and AI tools.",
    link: "/courses/computer-information-technology",
  },
  {
    title: "Graphic Design",
    description: "Unlock your creative potential with our Graphic Designing Course.",
    link: "/courses/graphic-design",
  },
  {
    title: "Digital Marketing & SEO",
    description: "Learn digital marketing and advanced SEO techniques using practical tools.",
    link: "/courses/digital-marketing-and-seo",
  },
  {
    title: "E-Commerce",
    description: "Master Shopify, WordPress, and Daraz to grow your online business.",
    link: "/courses/e-commerce",
  },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileCoursesOpen, setMobileCoursesOpen] = useState(false);

  return (
    <header className="header">
      <div className="header-container">
        {/* Logo */}
        <a href="/" className="logo-link">
          <img src={logo} alt="Learnify Logo" className="logo-img" />
        </a>

        {/* Desktop Menu */}
        <nav className={`nav-menu ${menuOpen ? 'open' : ''}`}>
          <ul className="nav-list">
            <li><a href="/">Home</a></li>
            <li><a href="/about-us">About Us</a></li>
            <li className="dropdown">
              <span className="dropdown-toggle">
                Courses <span className="dropdown-icon">▼</span>
              </span>
              <ul className="dropdown-menu">
                {courses.map((course, index) => (
                  <li key={index} className={index === 4 ? 'full-row' : ''}>
                    <a href={course.link}>
                      <strong>{course.title}</strong>
                      <p className="dropdown-description">{course.description}</p>
                    </a>
                  </li>
                ))}
              </ul>
            </li>
            <li><a href="/contact-us">Contact Us</a></li>
            <li>
              <a href="/competitions">
                Competitions <span className="new-badge">NEW</span>
              </a>
            </li>
          </ul>
        </nav>

        {/* Enroll & Mobile Button */}
        <div className="contact-actions">
          <a href="tel:03462309242" className="call-us">
            <span className="call-label">Talk with us?</span>
            <span className="call-number">0341-8649483</span>
          </a>
          <button className="enroll-button">Enroll Now</button>
        </div>

        {/* Hamburger Button */}
        <button
          className="mobile-menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <div className="hamburger-icon">
            <span></span><span></span><span></span>
          </div>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div className="mobile-menu-overlay">
          <ul>
            <li><a href="/" onClick={() => setMenuOpen(false)}>Home</a></li>
            <li><a href="/about-us" onClick={() => setMenuOpen(false)}>About Us</a></li>
            <li className="mobile-dropdown">
              <span
                className="dropdown-toggle"
                onClick={() => setMobileCoursesOpen(!mobileCoursesOpen)}
              >
                Courses <span className="dropdown-icon">{mobileCoursesOpen ? '▲' : '▼'}</span>
              </span>
              <ul className={`dropdown-menu ${mobileCoursesOpen ? 'mobile-dropdown-open' : ''}`}>
                {courses.map((course, index) => (
                  <li key={index}>
                    <a href={course.link} onClick={() => setMenuOpen(false)}>
                      <strong>{course.title}</strong>
                      <p className="dropdown-description">{course.description}</p>
                    </a>
                  </li>
                ))}
              </ul>
            </li>
            <li><a href="/contact-us" onClick={() => setMenuOpen(false)}>Contact Us</a></li>
            <li>
              <a href="/competitions" onClick={() => setMenuOpen(false)}>
                Competitions <span className="new-badge">NEW</span>
              </a>
            </li>
            <li>
              <button className="enroll-button">Enroll Now</button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
