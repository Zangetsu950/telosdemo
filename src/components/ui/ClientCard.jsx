import React from 'react';
import './ClientCard.css';

const ClientCard = ({ name, followers }) => {
  return (
    <div className="client-card">
      <div className="client-image">
        <img 
          src={`/api/placeholder/100/100`} 
          alt={name}
        />
      </div>
      <p className="client-name">{name}</p>
      <p className="client-followers">{followers} followers</p>
    </div>
  );
};

export default ClientCard;