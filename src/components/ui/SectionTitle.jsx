import React from 'react';
import './SectionTitle.css';

const SectionTitle = ({ children, color = 'blue', className = '' }) => {
  return (
    <h2 className={`section-title section-title-${color} ${className}`}>
      {children}
    </h2>
  );
};

export default SectionTitle;