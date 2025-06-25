import React from 'react';
import './HeroSection.css';


const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-container">

        {/* Left Side - Text */}
        <div className="hero-text">
          <div className="hero-title">
            <span>Ab Hoga</span>

            <span className="highlight">
              UpSkill
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 218 22" className="svg-underline">
                <path
                  stroke="#2ae7c9"
                  strokeLinecap="round"
                  strokeWidth="5"
                  d="M3 19C44.715 4.243 103.5 2.673 128.5 3c31 .405 64.5 5 86.5 9.878"
                />
              </svg>
            </span>

            <div className="hero-pakistan">Pakistan!</div>
          </div>

          <p className="hero-description">
            Embark on a transformative journey with Learnify Academy, uplifting Pakistan's potential through comprehensive upskilling.
          </p>

          <button className="enroll-button">
            Enroll Now
          </button>
        </div>

        {/* Right Side - Images */}
        <div className="hero-images">
          <img src="/images/hero-rocket.svg" alt="rocket" className="rocket-image" />
          <img src="" alt="hero" className="main-hero-image" />
        </div>

      </div>
    </section>
  );
};

export default HeroSection;
