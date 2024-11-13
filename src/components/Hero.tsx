import React from 'react';
import Navbar from './Navbar';
import '../app/styles/hero.css';

const Hero = () => {
  return (
    <div id="hero" className="hero-container">
      
      <div className="navbar-container">
        <Navbar />
      </div>

      {/* Hero Content */}
      <div className="hero-content">

      <div className="hero-image"></div>

        {/* Text Content */}
        <div className="hero-text">
          <div>
            <p data-aos="zoom-in-up">Hi! I&apos;m</p>
            <p data-aos="zoom-in-up">Ramsha</p>
            <p data-aos="zoom-in-up">Fawad.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
