import React from 'react';
import '../styles/Hero.css'; // Import the CSS file for Pricing styles


const Hero = () => {
    return (
      <div className="hero">
        <div className="hero-content">
        <div class="contentH">
            <h1 class="title">Chandra
                <div class="aurora">
                <div class="aurora__item"></div>
                <div class="aurora__item"></div>
                <div class="aurora__item"></div>
                <div class="aurora__item"></div>
                </div>
            </h1>
        </div>
            <p className="subtitle">your future in web integration
            <div class="aurora">
                <div class="aurora__item"></div>
                <div class="aurora__item"></div>
                <div class="aurora__item"></div>
                <div class="aurora__item"></div>
                </div>
            </p>
        </div>
      </div>
    );
  };
  
  export default Hero;