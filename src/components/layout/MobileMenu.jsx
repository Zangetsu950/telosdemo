// src/components/layout/MobileMenu.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { NAVIGATION_LINKS } from '../../utils/constants';
import Button from '../ui/Button';
import './MobileMenu.css';

const MobileMenu = ({ isOpen, onItemClick }) => {
  if (!isOpen) return null;
  
  return (
    <div className="mobile-menu">
      <div className="mobile-menu-content">
        <div className="mobile-menu-links">
          {NAVIGATION_LINKS.map((link, index) => {
            // If the link starts with '/', it's a router link
            if (link.href.startsWith('/')) {
              return (
                <Link 
                  key={index}
                  to={link.href} 
                  className="mobile-menu-link"
                  onClick={onItemClick}
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
                className="mobile-menu-link"
                onClick={onItemClick}
              >
                {link.name}
              </a>
            );
          })}
          <Button 
            to="/contact" 
            className="mobile-cta-button"
            onClick={onItemClick}
          >
            Schedule a call
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;