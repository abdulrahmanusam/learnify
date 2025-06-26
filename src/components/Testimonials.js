import React from 'react';
import Slider from 'react-slick';
import './Testimonials.css';
import avatar from './images/demo-learnified-avatar.png'; // ✅ adjust path if needed

const testimonials = [
  {
    name: 'Muhib Khan',
    feedback:
      "I would highly recommend Learnify Academy to anyone looking to gain a comprehensive education in computer science. The skills and knowledge I gained have opened doors to new career opportunities, and I'm grateful for the experience. 5/5 stars!",
  },
  {
    name: 'Arham Malik',
    feedback:
      "Learnify Academy stands out for its top-tier faculty and cutting-edge resources. Each instructor brings a wealth of experience and a passion for teaching that makes complex concepts accessible and engaging. Highly recommended for anyone serious about their professional growth.",
  },
  {
    name: 'Waseem Ashir',
    feedback:
      "Learnfy Academy delivers top-notch education with expert instructors and a well-structured curriculum. Highly recommend for anyone looking to advance their skills!",
  },
  {
    name: 'Zoya Ali',
    feedback:
      "I recently completed the CIT and Basic English courses at Learnify Academy, and I must say it was an amazing experience! The course content was well-structured and easy to understand. The instructors were knowledgeable and supportive, always ready to clarify doubts.",
  },
];

const Testimonials = () => {
  const settings = {
    dots: false, // ❌ Remove circles
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000, // 🐢 Slower speed (4 seconds)
    pauseOnHover: false,
  };

  return (
    <section className="testimonials-section">
      <div className="testimonials-header">
        <h2>Testimonials</h2>
        <p>
          Here is what our Alumni are saying about the impactful journey they've had with us.
        </p>
      </div>

      <Slider {...settings} className="testimonials-carousel">
        {testimonials.map((testimonial, index) => (
          <div className="testimonial-card" key={index}>
            <img
              className="testimonial-avatar"
              src={avatar}
              alt={testimonial.name}
              loading="lazy"
            />
            <h3 className="testimonial-name">{testimonial.name}</h3>
            <p className="testimonial-feedback">{testimonial.feedback}</p>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default Testimonials;
