import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="container">
        <div className="hero-content">
          <div className="hero-heading">
            <h1 className="hero-title">
              AIM FOR<br />
              THE STARS<br />
              REACH<br />
              YOUR<br />
              <span className="hero-highlight">TELOS</span>
            </h1>
          </div>
          
          <div className="hero-text">
            <p>
              We help <span className="hero-accent">creators</span> optimize<br />
              social media strategy<br />
              and content creation
            </p>
          </div>
        </div>
      </div>
      
      {/* Background text elements */}
      <div className="bg-text bg-text-cover">COVER</div>
      <div className="bg-text bg-text-price">PRICE $$$$$</div>
      <div className="bg-text bg-text-porsche">PORSCHE</div>
      <div className="bg-text bg-text-risk">DEAL RISK</div>
    </section>
  );
};

export default Hero;