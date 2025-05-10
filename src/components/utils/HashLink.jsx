import { Link, useLocation } from 'react-router-dom';

const HashLink = ({ to, children, ...props }) => {
  const location = useLocation();
  const isAnchorOnly = to.startsWith('#');
  
  if (isAnchorOnly) {
    // For regular anchors on the same page
    // We need to handle this differently with HashRouter
    const targetId = to.substring(1);
    
    const handleClick = (e) => {
      e.preventDefault();
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    };
    
    return <a href={to} onClick={handleClick} {...props}>{children}</a>;
  }
  
  // For links to other pages
  return <Link to={to} {...props}>{children}</Link>;
};

export default HashLink;