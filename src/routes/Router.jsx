// src/routes/Router.jsx
import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Work from '../pages/Work';
import Team from '../pages/Team';
import ServiceDetails from '../pages/ServiceDetails';
import Contact from '../pages/Contact';
import ScrollToTop from '../components/utils/ScrollToTop';

const Router = () => {
  return (
    <HashRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work" element={<Work />} />
        <Route path="/team" element={<Team />} />
        <Route path="/services/:service" element={<ServiceDetails />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </HashRouter>
  );
};

export default Router;