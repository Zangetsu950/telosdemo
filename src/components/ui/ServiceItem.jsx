import React from 'react';
import './ServiceItem.css';

const ServiceItem = ({ title }) => {
  return (
    <div className="service-item">
      <h3 className="service-title">{title}</h3>
    </div>
  );
};

export default ServiceItem;