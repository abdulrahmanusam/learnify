import React from 'react';
import './WhyChooseUs.css';

const WhyChooseUs = () => {
  return (
    <section className="why-section">
      <div className="container">
        <div className="main-card">
          <div className="left">
            <h2>Why You Choose</h2>
            <h2>Learnify Academy</h2>
            <p>
              Expert instructors, comprehensive courses, and a supportive community.
            </p>
            <a className="learn-more-btn" href="/about-us">Learn More</a>
          </div>
          <div className="right">
            <img
              src="/_next/static/media/whychoosingus.c435cce3.svg"
              alt="Why choosing us"
            />
          </div>
        </div>

        <div className="features-grid">
          <div className="feature-card">
            <div className="icon">🕒</div>
            <h3>Flexible Timings</h3>
            <p>
              We offer flexible schedules so students can manage studies alongside other commitments.
            </p>
          </div>
          <div className="feature-card">
            <div className="icon">📆</div>
            <h3>Weekend Classes</h3>
            <p>
              Classes on weekends make it easy for working professionals to learn.
            </p>
          </div>
          <div className="feature-card">
            <div className="icon">📚</div>
            <h3>Organized Modules</h3>
            <p>
              Structured modules improve the learning experience and help track progress.
            </p>
          </div>
          <div className="feature-card">
            <div className="icon">🎓</div>
            <h3>Certification</h3>
            <p>
              Get certified upon course completion — proof of your learning and skills.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
