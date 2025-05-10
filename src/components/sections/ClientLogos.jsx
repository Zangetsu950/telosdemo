import React from 'react';
import SectionTitle from '../ui/SectionTitle';
import { BRAND_CLIENTS } from '../../utils/constants';
import './ClientLogos.css';

const ClientLogos = () => {
  return (
    <section className="client-logos-section">
      <div className="container">
        <SectionTitle color="white">Our clients are backed by</SectionTitle>
        
        <div className="logos-grid logos-grid-top">
          {BRAND_CLIENTS.map((client, index) => (
            <img 
              key={`top-${index}`}
              src={`/api/placeholder/120/40`}
              alt={client}
              className="client-logo"
            />
          ))}
        </div>
        
        <div className="logos-grid logos-grid-bottom">
          {BRAND_CLIENTS.map((client, index) => (
            <img 
              key={`bottom-${index}`}
              src={`/api/placeholder/120/40`}
              alt={client}
              className="client-logo"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;