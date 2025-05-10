// src/components/ui/Button.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Button.css';

const Button = ({ children, variant = 'primary', className = '', onClick, href, to, ...rest }) => {
  const buttonClass = `button button-${variant} ${className}`;
  
  // If there's a "to" prop, use React Router's Link
  if (to) {
    return (
      <Link to={to} className={buttonClass} {...rest}>
        {children}
      </Link>
    );
  }
  
  // If there's an href prop, use a regular anchor tag
  if (href) {
    return (
      <a href={href} className={buttonClass} onClick={onClick} {...rest}>
        {children}
      </a>
    );
  }
  
  // Otherwise, it's a regular button
  return (
    <button className={buttonClass} onClick={onClick} {...rest}>
      {children}
    </button>
  );
};

export default Button;