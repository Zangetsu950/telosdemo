import React from 'react';
import ClientCard from '../ui/ClientCard';
import SectionTitle from '../ui/SectionTitle';
import { CLIENTS } from '../../utils/constants';
import './Clients.css';

const Clients = () => {
  return (
    <section id="clients" className="clients-section">
      <div className="container">
        <SectionTitle color="blue">Clients</SectionTitle>
        
        <div className="clients-grid">
          {CLIENTS.map((client, index) => (
            <ClientCard
              key={index}
              name={client.name}
              followers={client.followers}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;