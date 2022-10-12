import React from 'react';
import './HeroSection.scss';
import { Button, Container, MediaQuery, Text } from '@mantine/core';
import { Link } from 'react-scroll';
import { AiOutlineArrowDown } from 'react-icons/ai';
import { Wave } from '../../assets';

const HeroSection = () => {
     return (
          <>
          <section id="hero">
               <Container fluid>
                    <div className="hero__container">
                         <div style={{ marginBottom: 30 }}>
                              <Text>
                                   <MediaQuery query="(max-width: 768px)" styles={{ fontSize: '2.8rem !important' }}>
                                        <h1 className="title">Aidan Traboulay</h1>
                                   </MediaQuery>                              
                              </Text>
                         </div>

                         <div style={{ marginBottom: 25 }}>
                              <Text size="xl" color="black">
                                   Hi there, I'm a third year Computer Science Student @ wlu
                              </Text>
                         </div>

                         <div className="button__container">
                              <Link to="about" smooth duration={400}>
                                   <Button color="blue" size="md" rightIcon={<AiOutlineArrowDown/>}>Learn More</Button>
                              </Link>
                         </div>
                    </div>
               </Container>
          </section>
          </>
     );
};

export default HeroSection;