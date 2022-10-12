import React from "react";
import './HomePage.css';

import { Navbar, HeroSection, AboutSection, ExperienceSection, ProjectsSection, ContactSection } from "../../components";

const HomePage = () => {
     return (
          <>
               <Navbar />
               <HeroSection />
               <AboutSection />
               <ExperienceSection />
               <ProjectsSection />
               <ContactSection />
          </>
     );
};

export default HomePage;
