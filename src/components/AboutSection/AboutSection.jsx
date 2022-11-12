import React from 'react';
import './AboutSection.scss';
import { Blockquote, Container, Grid, Text, Image, Title, Divider } from '@mantine/core';
import { Headshot } from '../../assets';

const AboutSection = () => {
     return (
          <section id="about">
               <Container>
                    <div style={{ marginBottom: 20 }}>
                         <Text color="white">
                              <Title order={1}> Get to know me more! 🚀  </Title>
                              <div className="spacer" style={{ width: "100%", height: "1.5em" }} />                                       
                              <Divider />
                              <div className="spacer" style={{ width: "100%", height: "2em" }} />
                              <Blockquote color="btn-color.6">
                                   <Text color="white">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                   </Text>
                              </Blockquote>
                              <p>
                                   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl nec aliquam aliquam, nunc nisl aliquet nunc, eget aliquam nisl nisl sit amet nunc. Sed euismod, nisl nec aliquam aliquam, nunc nisl aliquet nunc, eget aliquam nisl nisl sit amet nunc. Sed euismod, nisl nec aliquam aliquam, nunc nisl aliquet nunc, eget aliquam nisl nisl sit amet nunc. Sed euismod, nisl nec aliquam aliquam, nunc nisl aliquet nunc, eget aliquam nisl nisl sit amet nunc. Sed euismod, nisl nec aliquam aliquam, nunc nisl aliquet nunc, eget aliquam nisl nisl sit amet nunc. Sed euismod, nisl nec aliquam aliquam, nunc nisl aliquet nunc, eget aliquam nisl nisl sit amet nunc. Sed euismod, nisl nec aliquam aliquam, nunc nisl aliquet nunc, eget aliquam nisl nisl sit amet nunc. Sed euismod, nisl nec aliquam aliquam, nunc nisl aliquet nunc, eget aliquam nisl nisl sit amet nunc. Sed euismod, nisl nec aliquam aliquam, nunc nisl aliquet nunc, eget aliquam nisl nisl sit amet nunc. Sed euismod, nisl nec aliquam aliquam, nunc nisl aliquet nunc, eget aliquam nisl nisl sit amet nunc. Sed euismod, nisl nec aliquam aliquam, nunc nisl aliquet nunc, eget aliquam nisl nisl sit amet nunc. Sed euismod, nisl nec aliquam aliquam, nunc nisl aliquet nunc, eget aliquam nisl nisl sit amet nunc. Sed euismod, nisl nec aliquam aliquam, nunc nisl aliquet nunc, eget aliquam nisl nisl sit amet nunc. Sed euismod, nisl nec aliquam aliquam, nunc nisl aliquet nunc, eget aliquam nisl nisl sit amet nunc. Sed euismod, nisl nec aliquam aliquam, nunc
                              </p>
                         </Text>
                    </div>
               </Container>
          </section>
     );
};

export default AboutSection;