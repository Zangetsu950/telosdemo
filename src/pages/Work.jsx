import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import SectionTitle from '../components/ui/SectionTitle';
import Button from '../components/ui/Button';
import './Work.css';

// Sample work items
const WORK_ITEMS = [
  {
    id: 1,
    title: "TechTalk Series",
    client: "AsianJeff",
    category: "Video Production",
    image: "/api/placeholder/600/400",
    description: "A series of tech review videos that increased engagement by 45%"
  },
  {
    id: 2,
    title: "Gaming Highlights",
    client: "Plz",
    category: "Editing & Strategy",
    image: "/api/placeholder/600/400",
    description: "Weekly gaming highlights that grew the channel by 200k followers"
  },
  {
    id: 3,
    title: "Social Media Campaign",
    client: "Break",
    category: "Content Strategy",
    image: "/api/placeholder/600/400",
    description: "Cross-platform campaign that generated 5M views in one week"
  },
  {
    id: 4,
    title: "Brand Partnership",
    client: "Prestige",
    category: "Branded Content",
    image: "/api/placeholder/600/400",
    description: "Seamless brand integration with Logitech that outperformed projections by 300%"
  },
  {
    id: 5,
    title: "Channel Rebrand",
    client: "Agent",
    category: "Design & Strategy",
    image: "/api/placeholder/600/400",
    description: "Complete channel redesign that refreshed the brand and attracted new audience segments"
  },
  {
    id: 6,
    title: "Viral Challenge Series",
    client: "AgarioRaffe",
    category: "Content Creation",
    image: "/api/placeholder/600/400",
    description: "Challenge-based content that generated over 50M views across platforms"
  }
];

const WorkItem = ({ item }) => {
  return (
    <div className="work-item">
      <div className="work-image">
        <img src={item.image} alt={item.title} />
        <div className="work-overlay">
          <div className="work-client">{item.client}</div>
          <div className="work-category">{item.category}</div>
        </div>
      </div>
      <h3 className="work-title">{item.title}</h3>
      <p className="work-description">{item.description}</p>
    </div>
  );
};

const Work = () => {
  return (
    <>
      <Header />
      <main className="main-content">
        <section className="page-header">
          <div className="container">
            <SectionTitle color="blue">Our Work</SectionTitle>
            <p className="page-intro">
              Check out some of the projects we've completed for our clients. 
              Each project represents our commitment to quality, creativity, and results.
            </p>
          </div>
        </section>
        
        <section className="work-gallery">
          <div className="container">
            <div className="work-filters">
              <button className="filter-button filter-active">All</button>
              <button className="filter-button">Video Production</button>
              <button className="filter-button">Content Strategy</button>
              <button className="filter-button">Design</button>
              <button className="filter-button">Social Media</button>
            </div>
            
            <div className="work-grid">
              {WORK_ITEMS.map(item => (
                <WorkItem key={item.id} item={item} />
              ))}
            </div>
          </div>
        </section>
        
        <section className="work-cta">
          <div className="container">
            <h2 className="work-cta-title">Ready to create something amazing?</h2>
            <p className="work-cta-text">
              We'd love to help you take your content to the next level.
            </p>
            <Button href="/contact" className="work-cta-button">
              Let's talk about your project
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Work;