import React from 'react';
import './ContactSection.scss';
import { Container, Title, Divider, Text } from '@mantine/core';
import { SocialBar } from '../index';

const ContactSection = () => {
     return (
          <section id="contact">
               <Container>
                    <Title order={1} align="left">Contact</Title>
                    <div className="spacer" style={{ width: "100%", height: "1.5em" }} />
                    <Divider />
                    <div className="spacer" style={{ width: "100%", height: "2em" }} />
                    
                    <Text size="lg" color="dimmed">
                         If you have any questions or would like to get in touch, please feel free to contact me.
                    </Text>

                    <div className="spacer" style={{ width: "100%", height: "2em" }} />

                    <SocialBar />
               </Container>
          </section>
     );
};

export default ContactSection;