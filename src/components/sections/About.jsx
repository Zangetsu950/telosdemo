import React from 'react';
import Button from '../ui/Button';
import SectionTitle from '../ui/SectionTitle';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <SectionTitle color="white">About us</SectionTitle>
        
        <div className="about-content">
          <div className="about-text">
            <p className="about-paragraph">We're a group of young creatives who've been obsessed with creating since we were kids.</p>
            
            <p className="about-paragraph">Now, we use that passion to help content creators turn their ideas into real, consistent growth.</p>
            
            <p className="about-paragraph">Our goal is to help creators all over the world plan smarter, create better, and stay ahead of the game - partnering with them for long-term success with their audience.</p>
            
            <p className="about-paragraph">We know what it's like to love creating and we're here to make the process smoother, more strategic, and a lot more fun.</p>
          </div>
          
          <div className="about-visual">
            <div className="team-image">
              <img 
                src="/api/placeholder/400/320" 
                alt="Our team" 
              />
            </div>
            
            <div className="team-cta">
              <h3 className="team-cta-title">Meet our team</h3>
              <Button 
                href="#team" 
                className="team-cta-button"
              >
                Join our team
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;