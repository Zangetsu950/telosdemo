import React from 'react';
import ProcessStep from '../ui/ProcessStep';
import SectionTitle from '../ui/SectionTitle';
import { PROCESS_STEPS } from '../../utils/constants';
import './Process.css';

const Process = () => {
  return (
    <section className="process-section">
      <div className="container">
        <SectionTitle color="blue">Our process</SectionTitle>
        
        <div className="process-grid">
          {PROCESS_STEPS.map((step) => (
            <ProcessStep
              key={step.number}
              number={step.number}
              title={step.title}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;