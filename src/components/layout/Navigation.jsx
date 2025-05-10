import { Link } from 'react-router-dom';
import HashLink from '../utils/HashLink';
import { NAVIGATION_LINKS } from '../../utils/constants';
import './Navigation.css';

const Navigation = () => {
  return (
    <nav className="main-navigation">
      {NAVIGATION_LINKS.map((link, index) => {
        // If it's a hash link (starts with #)
        if (link.href.startsWith('#')) {
          return (
            <HashLink 
              key={index} 
              to={link.href} 
              className="nav-link"
            >
              {link.name}
            </HashLink>
          );
        }
        
        // Regular router link
        return (
          <Link 
            key={index} 
            to={link.href} 
            className="nav-link"
          >
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
};

export default Navigation;