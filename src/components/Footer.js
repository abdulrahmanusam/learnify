// Footer.js
import React from 'react';
import './Footer.css';
import logo from './images/LearnifyAcademy-Logo.b9e022a9.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <a href="/">
            <img src={logo} alt="Learnify Academy Logo" className="footer-logo" />
          </a>
          <div className="footer-contact">
            <h3>Get In Touch</h3>
            <a href="mailto:learnifyacademypk@gmail.com">learnifyacademypk@gmail.com</a>
            <a href="tel:03462309242">+92 346 2309242</a>
            <a href="tel:93308531573">+92 330 8531573</a>
            <a href="https://maps.app.goo.gl/gUMdG5vYLdgNJSSx7" target="_blank" rel="noopener noreferrer">
              HOUSE 6/7, AREA 36-D, Landhi 05, Karachi, Pakistan
            </a>
          </div>
        </div>

        <div className="footer-section">
          <h3>About</h3>
          <ul>
            <li><a href="/about-us">About Us</a></li>
            <li><a href="/contact-us">Contact</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Courses</h3>
          <ul>
            <li><a href="/courses/computer-information-technology">CIT</a></li>
            <li><a href="/courses/web-application-development">Web App Dev</a></li>
            <li><a href="/courses/graphic-design">Graphic Design</a></li>
            <li><a href="/courses/digital-marketing-and-seo">Digital Marketing</a></li>
            <li><a href="/courses/e-commerce">E-Commerce</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/registration">Admission Form</a></li>
            <li><a href="/competitions">Competitions <span className="new-badge">NEW</span></a></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 Learnify Academy. All rights reserved.</p>
        <div className="footer-social">
          <span>Connect with us:</span>
          <a href="https://www.linkedin.com/school/learnifyacademy" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://www.instagram.com/learnifyacademypk" target="_blank" rel="noopener noreferrer">Instagram</a>
          <a href="https://www.facebook.com/learnifyacademypk" target="_blank" rel="noopener noreferrer">Facebook</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
