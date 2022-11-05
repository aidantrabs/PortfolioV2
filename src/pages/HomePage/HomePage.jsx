import React from "react";
import './HomePage.css';
import { Navbar, HeroDivider, ExperienceDivider, ProjectDivider, HeroSection, AboutSection, ExperienceSection, ProjectsSection, Footer, ContactDivider } from "../../components";

const HomePage = () => {
     return (
          <div className="home">
               <Navbar />
               <HeroSection />
               <HeroDivider />
               <ExperienceSection />
               <ExperienceDivider />
               <ProjectsSection />
               <ProjectDivider />
               <AboutSection />
               <ContactDivider />
               <Footer />
          </div>
     );
};

export default HomePage;
