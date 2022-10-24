import React from 'react';
import './AboutSection.scss';
import { Blockquote, Container, Grid, Text, Image, Title, Divider } from '@mantine/core';
import { Headshot } from '../../assets';

const AboutSection = () => {
     return (
          <section id="about">
               <Container>
                    <Grid justify="space-around">
                         <Grid.Col xs={6} sm={8} md={8} lg={8}>
                              <div style={{ marginBottom: 20 }}>
                                   <Text color="white">
                                        <Title order={1}> About </Title>
                                        <div className="spacer" style={{ width: "100%", height: "1.5em" }} />                                       
                                        <Divider />
                                        <div className="spacer" style={{ width: "100%", height: "2em" }} />
                                        <Blockquote color="btn-color.3">
                                             <Text color="white">
                                                  I'm a third year Computer Science student at Wilfrid Laurier University. I'm passionate about building software that is both functional and beautiful. I'm currently looking for a co-op position for the summer of 2022.
                                             </Text>
                                        </Blockquote>
                                   </Text>
                              </div>
                         </Grid.Col>
                         <Grid.Col xs={6} sm={4} lg={4}>
                              <Image src={Headshot} alt="headshot" style={{ width: '100%' }} radius="lg" />
                         </Grid.Col>
                    </Grid>
               </Container>
          </section>
     );
};

export default AboutSection;