// src/components/sections/Services.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import SectionTitle from '../ui/SectionTitle';
import { SERVICES } from '../../utils/constants';
import './Services.css';

const ServiceItem = ({ title, path }) => {
  return (
    <div className="service-item">
      <Link to={`/services/${path}`} className="service-link">
        <h3 className="service-title">{title}</h3>
      </Link>
    </div>
  );
};

const Services = () => {
  return (
    <section id="services" className="services-section">
      <div className="container">
        <SectionTitle color="blue">Services</SectionTitle>
        
        <div className="services-content">
          <div className="services-text">
            <p className="services-intro">We have a team of skilled strategist, editors, videographers and graphic designers ready take your content to the next level.</p>
            
            <div className="services-list">
              {SERVICES.map((service, index) => (
                <ServiceItem key={index} title={service.title} path={service.path} />
              ))}
            </div>
          </div>
          
          <div className="services-visual">
            <div className="visual-container">
              <div className="visual-card visual-card-front"></div>
              <div className="visual-card visual-card-back"></div>
              <div className="visual-link">
                <Link to="/work" className="work-link">
                  Take a look at<br />our work
                  <svg 
                    className="work-link-arrow" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;