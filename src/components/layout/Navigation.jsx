// src/components/layout/Navigation.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { NAVIGATION_LINKS } from '../../utils/constants';
import './Navigation.css';

const Navigation = () => {
  return (
    <nav className="main-navigation">
      {NAVIGATION_LINKS.map((link, index) => {
        // If the link starts with '/', it's a router link
        if (link.href.startsWith('/')) {
          return (
            <Link 
              key={index} 
              to={link.href} 
              className="nav-link"
            >
              {link.name}
            </Link>
          );
        }
        
        // Otherwise it's a hash link
        return (
          <a 
            key={index} 
            href={link.href} 
            className="nav-link"
          >
            {link.name}
          </a>
        );
      })}
    </nav>
  );
};

export default Navigation;