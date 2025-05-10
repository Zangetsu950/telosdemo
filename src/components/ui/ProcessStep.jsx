import React from 'react';
import './ProcessStep.css';

const ProcessStep = ({ number, title }) => {
  return (
    <div className="process-step">
      <div className="process-step-header">
        <div className="process-step-number">{number}</div>
        <img 
          src={`/api/placeholder/50/50`} 
          alt={title} 
          className="process-step-icon"
        />
      </div>
      <p className="process-step-title">{title}</p>
    </div>
  );
};

export default ProcessStep;