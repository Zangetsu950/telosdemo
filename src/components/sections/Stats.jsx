import React from 'react';
import { STATS } from '../../utils/constants';
import './Stats.css';

const Stats = () => {
  return (
    <section className="stats-section">
      <div className="container">
        <div className="stats-grid">
          {STATS.map((stat, index) => (
            <div key={index} className="stat-item">
              <h3 className="stat-value">{stat.value} {stat.label}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;