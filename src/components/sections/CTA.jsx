// src/components/sections/CTA.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../ui/Button';
import './CTA.css';

const CTA = () => {
  return (
    <section id="schedule" className="cta-section">
      <div className="container">
        <h2 className="cta-title">READY TO WORK WITH US?</h2>
        <p className="cta-text">
          If you are a content creator looking to get your content to the next level let's talk and start working together!
        </p>
        
        <p className="cta-highlight">Schedule your free strategy call to get started.</p>
        
        <Link to="/contact" className="cta-button">
          <Button className="cta-button-inner">
            Schedule a call
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default CTA;