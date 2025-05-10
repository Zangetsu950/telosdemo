import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import SectionTitle from '../components/ui/SectionTitle';
import Button from '../components/ui/Button';
import './Team.css';

// Sample team members
const TEAM_MEMBERS = [
  {
    id: 1,
    name: "Alex Morgan",
    role: "Founder & Creative Director",
    image: "/api/placeholder/300/300",
    bio: "Alex founded TELOS with a vision to help creators achieve their maximum potential."
  },
  {
    id: 2,
    name: "Jamie Chen",
    role: "Content Strategy Lead",
    image: "/api/placeholder/300/300",
    bio: "With 7+ years in digital strategy, Jamie has helped dozens of creators scale their channels."
  },
  {
    id: 3,
    name: "Taylor Williams",
    role: "Head of Video Production",
    image: "/api/placeholder/300/300",
    bio: "Award-winning filmmaker who specializes in turning concepts into captivating visual stories."
  },
  {
    id: 4,
    name: "Sam Rodriguez",
    role: "Social Media Manager",
    image: "/api/placeholder/300/300",
    bio: "Sam has managed accounts with combined followings of over 15 million across platforms."
  },
  {
    id: 5,
    name: "Jordan Lee",
    role: "Graphic Design Lead",
    image: "/api/placeholder/300/300",
    bio: "Specializing in thumbnails and brand identity, Jordan's designs consistently achieve above-average CTRs."
  },
  {
    id: 6,
    name: "Casey Thompson",
    role: "Video Editor",
    image: "/api/placeholder/300/300",
    bio: "Fast-paced editing style that has contributed to numerous viral videos with 10M+ views."
  }
];

// Sample job openings
const JOB_OPENINGS = [
  {
    id: 1,
    title: "Senior Video Editor",
    type: "Full-time",
    location: "Remote"
  },
  {
    id: 2,
    title: "Content Strategist",
    type: "Full-time",
    location: "Los Angeles, CA"
  },
  {
    id: 3,
    title: "Motion Graphics Designer",
    type: "Contract",
    location: "Remote"
  }
];

const TeamMember = ({ member }) => {
  return (
    <div className="team-member">
      <div className="member-image">
        <img src={member.image} alt={member.name} />
      </div>
      <h3 className="member-name">{member.name}</h3>
      <p className="member-role">{member.role}</p>
      <p className="member-bio">{member.bio}</p>
      <div className="member-social">
        <a href="#" className="social-link" aria-label="Twitter">
          <svg className="social-icon" fill="currentColor" viewBox="0 0 24 24">
            <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
          </svg>
        </a>
        <a href="#" className="social-link" aria-label="LinkedIn">
          <svg className="social-icon" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
          </svg>
        </a>
        <a href="#" className="social-link" aria-label="Instagram">
          <svg className="social-icon" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
          </svg>
        </a>
      </div>
    </div>
  );
};

const JobOpening = ({ job }) => {
  return (
    <div className="job-opening">
      <div className="job-details">
        <h3 className="job-title">{job.title}</h3>
        <div className="job-meta">
          <span className="job-type">{job.type}</span>
          <span className="job-location">{job.location}</span>
        </div>
      </div>
      <Button className="job-apply-btn">Apply Now</Button>
    </div>
  );
};

const Team = () => {
  return (
    <>
      <Header />
      <main className="main-content">
        <section className="page-header">
          <div className="container">
            <SectionTitle color="blue">Meet Our Team</SectionTitle>
            <p className="page-intro">
              We're a group of passionate professionals dedicated to helping content creators 
              achieve their goals. Get to know the people behind TELOS who will work with you 
              to take your content to the next level.
            </p>
          </div>
        </section>
        
        <section className="team-members">
          <div className="container">
            <div className="team-grid">
              {TEAM_MEMBERS.map(member => (
                <TeamMember key={member.id} member={member} />
              ))}
            </div>
          </div>
        </section>
        
        <section className="careers">
          <div className="container">
            <SectionTitle color="blue">Join Our Team</SectionTitle>
            <p className="careers-intro">
              We're always looking for talented people to join our team. Check out our current openings 
              below or send us your resume for future opportunities.
            </p>
            
            <div className="job-openings">
              {JOB_OPENINGS.map(job => (
                <JobOpening key={job.id} job={job} />
              ))}
            </div>
            
            <div className="open-application">
              <h3 className="open-title">Don't see a position that fits?</h3>
              <p className="open-text">
                We're always interested in meeting talented people. Send us your resume and we'll keep it on file.
              </p>
              <Button className="open-btn">Send Open Application</Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Team;