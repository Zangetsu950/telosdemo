import React from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import SectionTitle from '../components/ui/SectionTitle';
import Button from '../components/ui/Button';
import './ServiceDetails.css';

// Service details
const SERVICES_DATA = {
  "content-strategy": {
    title: "Content Strategy",
    description: "Our strategic approach to content creation helps you build a consistent brand and engage your audience effectively.",
    cover: "/api/placeholder/1200/400",
    benefits: [
      "Custom content strategy aligned with your goals",
      "Audience analysis and content optimization",
      "Trend research and content planning",
      "Performance tracking and adaptation",
      "Long-term growth planning"
    ],
    process: [
      {
        step: 1,
        title: "Discovery & Analysis",
        description: "We begin by understanding your brand, audience, and goals through in-depth research and analysis."
      },
      {
        step: 2,
        title: "Strategy Development",
        description: "Based on our findings, we create a tailored content strategy that aligns with your objectives."
      },
      {
        step: 3,
        title: "Content Calendar",
        description: "We develop a content calendar that outlines what content to create and when to publish it."
      },
      {
        step: 4,
        title: "Implementation",
        description: "Our team helps you implement the strategy with hands-on support and guidance."
      },
      {
        step: 5,
        title: "Performance Review",
        description: "We regularly review performance metrics and adjust the strategy as needed for optimal results."
      }
    ],
    caseStudies: [
      {
        client: "AsianJeff",
        result: "45% increase in engagement within 3 months",
        image: "/api/placeholder/400/300"
      },
      {
        client: "Break",
        result: "Doubled monthly views and 300k new subscribers",
        image: "/api/placeholder/400/300"
      }
    ]
  },
  "video-editing": {
    title: "Video Editing",
    description: "Our professional video editing service transforms your raw footage into engaging, high-quality content that captures your audience's attention.",
    cover: "/api/placeholder/1200/400",
    benefits: [
      "Professional editing that enhances your storytelling",
      "Consistent style that reinforces your brand",
      "Quick turnaround times to maintain your posting schedule",
      "Attention-grabbing intros and smooth transitions",
      "Optimization for platform-specific requirements"
    ],
    process: [
      {
        step: 1,
        title: "Briefing & Material Review",
        description: "We discuss your vision and review the raw footage to understand the project scope."
      },
      {
        step: 2,
        title: "First Cut",
        description: "Our editors create an initial cut that structures the content and establishes the flow."
      },
      {
        step: 3,
        title: "Refinement",
        description: "Based on your feedback, we refine the edit, adjusting pacing, transitions, and effects."
      },
      {
        step: 4,
        title: "Audio Enhancement",
        description: "We optimize audio quality, add music, sound effects, and ensure clear speech."
      },
      {
        step: 5,
        title: "Final Delivery",
        description: "After final approval, we deliver the video in your preferred formats, optimized for each platform."
      }
    ],
    caseStudies: [
      {
        client: "Plz",
        result: "Viral video with 12M views after our editing overhaul",
        image: "/api/placeholder/400/300"
      },
      {
        client: "Agent",
        result: "30% increase in average watch time after editing style change",
        image: "/api/placeholder/400/300"
      }
    ]
  }
};

const ServiceProcess = ({ process }) => {
  return (
    <div className="service-process">
      {process.map(step => (
        <div key={step.step} className="process-item">
          <div className="process-step-number">{step.step}</div>
          <div className="process-content">
            <h3 className="process-step-title">{step.title}</h3>
            <p className="process-step-description">{step.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

const CaseStudy = ({ caseStudy }) => {
  return (
    <div className="case-study">
      <div className="case-study-image">
        <img src={caseStudy.image} alt={caseStudy.client} />
      </div>
      <div className="case-study-content">
        <h3 className="case-study-client">{caseStudy.client}</h3>
        <p className="case-study-result">{caseStudy.result}</p>
      </div>
    </div>
  );
};

const ServiceDetails = () => {
  const { service } = useParams();
  const serviceKey = service || "content-strategy"; // Default to content strategy if no param
  const serviceData = SERVICES_DATA[serviceKey] || SERVICES_DATA["content-strategy"];
  
  return (
    <>
      <Header />
      <main className="main-content">
        <section className="service-header">
          <div className="service-cover">
            <img src={serviceData.cover} alt={serviceData.title} />
          </div>
          <div className="container">
            <SectionTitle color="blue">{serviceData.title}</SectionTitle>
            <p className="service-description">{serviceData.description}</p>
          </div>
        </section>
        
        <section className="service-benefits">
          <div className="container">
            <h2 className="section-heading">Benefits</h2>
            <ul className="benefits-list">
              {serviceData.benefits.map((benefit, index) => (
                <li key={index} className="benefit-item">
                  <svg className="benefit-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
        
        <section className="service-process-section">
          <div className="container">
            <h2 className="section-heading">Our Process</h2>
            <ServiceProcess process={serviceData.process} />
          </div>
        </section>
        
        <section className="case-studies-section">
          <div className="container">
            <h2 className="section-heading">Success Stories</h2>
            <div className="case-studies-grid">
              {serviceData.caseStudies.map((caseStudy, index) => (
                <CaseStudy key={index} caseStudy={caseStudy} />
              ))}
            </div>
          </div>
        </section>
        
        <section className="service-cta">
          <div className="container">
            <h2 className="cta-title">Ready to elevate your content?</h2>
            <p className="cta-text">Let's discuss how our {serviceData.title.toLowerCase()} services can help you achieve your goals.</p>
            <Button href="/contact" className="cta-button">Schedule a consultation</Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default ServiceDetails;