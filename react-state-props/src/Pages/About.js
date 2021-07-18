import React from 'react';
import Footer from '../Footer';
import './About.css';

const About = (props) => {
  return (
    <section className="aboutTwittler">
      <div className="aboutTwittler__container">
        <div className="aboutTwittler__wrapper">
          <div className="aboutTwittler__detail">
            <p className="aboutTwittler__detailName">React Twittler Info</p>
          </div>
        </div>
      </div>
      <div className="aboutTwittler__content">
        <i className="fas fa-users"></i>
        <p>My Twittler Page</p>
      </div>
      <Footer />
    </section>
  );
};

export default About;
