import React from 'react';
import './HeroSection.scss';
import ParticlesBg from "particles-bg";
import { Button, Container, MediaQuery, Text, Image, Grid, Title, Divider, Blockquote } from '@mantine/core';
import { Link } from 'react-scroll';
import { AiOutlineArrowDown } from 'react-icons/ai';
import { Hero } from '../../assets';


const HeroSection = () => {
     return (
          <>
               <section id="hero">
                    <Container fluid>
                         <ParticlesBg color="#ffffff" num={120} type="cobweb" bg={true} />
                         <p>Test</p>
                    </Container>
               </section>
          </>
     );
};

export default HeroSection;