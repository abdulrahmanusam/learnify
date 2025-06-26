import React from 'react';
import './CoursesSection.css';

// ✅ Import images with valid variable names
import webDevImg from './images/MERN-Course-Learnify-Academy (1).webp';
import citImg from './images/CIT-Course-Learnify-Academy (1).jpg';
import designImg from './images/Graphic-Designing-Course-Learnify-Academy (1).webp';
import seoImg from './images/Digital-Marketing-Course-Learnify-Academy.webp';
import ecommerceImg from './images/E-commerce-course-Learnify-Academy.jpg';

const courses = [
  {
    title: "Web Application Development",
    description:
      "Master the art of building robust, scalable web applications using the MERN stack.",
    image: webDevImg,
    link: "/courses/web-application-development",
  },
  {
    title: "Computer Information Technology",
    description:
      "Gain essential skills in IT, graphic design, web development, and AI tools.",
    image: citImg,
    link: "/courses/computer-information-technology",
  },
  {
    title: "Graphic Design",
    description:
      "Unlock your creative potential with our Graphic Designing Course.",
    image: designImg,
    link: "/courses/graphic-design",
  },
  {
    title: "Digital Marketing & SEO",
    description:
      "Learn digital marketing and advanced SEO techniques using practical tools.",
    image: seoImg,
    link: "/courses/digital-marketing-and-seo",
  },
  {
    title: "E-Commerce",
    description:
      "Master Shopify, WordPress, and Daraz to grow your online business.",
    image: ecommerceImg,
    link: "/courses/e-commerce",
  },
];

const CoursesSection = () => {
  return (
    <section className="courses">
      <div className="courses-header">
        <h2>Courses We Offer</h2>
        <p>
          Explore expertly crafted courses designed to boost your skills. Whether you're aiming for career growth or personal learning, we’ve got you covered.
        </p>
      </div>

      <div className="courses-grid">
        {courses.map((course, index) => (
          <div className="course-card" key={index}>
            <div className="card-inner">
              <div className="image-wrapper">
                <img src={course.image} alt={course.title} />
              </div>
              <div className="course-content">
                <h3>{course.title}</h3>
                <p>{course.description}</p>
                <a href={course.link} className="button">View Details</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CoursesSection;
