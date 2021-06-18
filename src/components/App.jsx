import React, { useState, useEffect } from 'react';
import Hero from './Hero/Hero';
import About from './About/About';
import Projects from './Projects/Projects';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';
import Skills from './Skills';
import Journey from './Journey';
import Professional from './Professional';

import { PortfolioProvider } from '../context/context';

import { heroData, aboutData, projectsData, contactData, 
  footerData, skillsData, journeyData, professionalData } from '../mock/data';

function App() {
  const [hero, setHero] = useState({});
  const [about, setAbout] = useState({});
  const [projects, setProjects] = useState([]);
  const [contact, setContact] = useState({});
  const [footer, setFooter] = useState({});
  const [skills, setSkills] = useState({});
  const [journey, setJourney] = useState({});
  const [professional, setProfessional] = useState({});
  
  useEffect(() => {
    setHero({ ...heroData });
    setAbout({ ...aboutData });
    setProjects([...projectsData]);
    setContact({ ...contactData });
    setSkills({ ...skillsData });
    setFooter({ ...footerData });
    setJourney({ ...journeyData });
    setProfessional({ ...professionalData });
  }, []);

  return (
    <PortfolioProvider value={{ hero, about, projects, contact, 
        footer, skills, journey, professional }}>
      <About />
      <Skills />
      <Professional />
      <Projects />
      <Journey />
      <Contact />
      <Footer /> 
    </PortfolioProvider>
  );
}

export default App;
