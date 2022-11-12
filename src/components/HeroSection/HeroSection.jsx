import React from 'react';
import './HeroSection.scss';
import { Container, Title } from '@mantine/core';
import Typed from "react-typed"
import { Link } from 'react-scroll';
import { AiOutlineArrowDown } from 'react-icons/ai';

const HeroSection = () => {
     return (
          <>
               <section id="hero">
                    <Container fluid>
                         <div className="hero__container">
                              <Title order={1} align="center" color={"white"} styles={{display: "inline"}}> 
                                   {"Hi, I'm "}
                                   <Typed strings={["Aidan","a student","a developer",]} typeSpeed={100} backSpeed={100} loop style={{color: "#DA0037"}}/>
                              </Title>
                         </div>
                    </Container>
               </section>
          </>
     );
};

export default HeroSection;