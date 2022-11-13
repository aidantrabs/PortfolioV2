import React from 'react';
import './HeroSection.scss';
import { Container, Title, Button, Stack, Center } from '@mantine/core';
import Typed from "react-typed"
import { Link } from 'react-scroll';
import { AiOutlineArrowDown } from 'react-icons/ai';

const HeroSection = () => {
     return (
          <>
               <section id="hero">
                    <Container>

                         <Center>

                              <div className="hero__container">
                                   <Title order={1} align="center" color={"white"} styles={{display: "inline"}}> 
                                        {"Hi, I'm "}
                                        <Typed strings={["Aidan","a student","a developer",]} typeSpeed={100} backSpeed={100} loop style={{color: "#DA0037"}}/>
                                   </Title>
                              </div>
                         </Center>
                         <Center>
                              <div className="button__container">
                                   <Link to="experience" smooth={true} duration={500}>
                                        <Button color="btn-color.6" radius="md" size="md" styles={{display: "flex", alignItems: "center", justifyContent: "center"}}>
                                             Learn More 
                                             <AiOutlineArrowDown size={18} />
                                        </Button>
                                   </Link>
                              </div>
                         </Center>
                    </Container>
               </section>
          </>
     );
};

export default HeroSection;