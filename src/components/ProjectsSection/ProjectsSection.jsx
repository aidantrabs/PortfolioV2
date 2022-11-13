import React from 'react';
import './ProjectsSection.scss';
import { Button, Badge, Container, Card, Group, Image, Text, Title, Divider } from '@mantine/core';
import { Carousel } from '@mantine/carousel';
import { Gradient } from '../../assets';

const ProjectsSection = () => {
     return (
          <section id="projects">
               <div className="projects__container">
                    <Container>
                         <Title order={1} align="left" color={"white"}> Projects💻 </Title>
                         <div className="spacer" style={{ width: "100%", height: "1.5em" }} />
                         <Divider />
                         <div className="spacer" style={{ width: "100%", height: "2em" }} />
                         <Carousel slideSize="50%" height={500} slideGap="lg" loop dragFree slidesToScroll={1} 
                              breakpoints={[
                                   { maxWidth: 'md', slideSize: '50%' },
                                   { maxWidth: 'sm', slideSize: '100%', slideGap: -10 },
                              ]}
                         >
                                   {/* Project 1 */}
                                   <Carousel.Slide>
                                        <Card shadow="sm" p="lg" radius="lg" withBorder>
                                             <Card.Section>
                                                  <Image 
                                                       src={Gradient}
                                                       height={150}
                                                       alt="Project 1"
                                                  />
                                             </Card.Section>

                                             <Group positon="apart" mt="md" mb="xs">
                                                  <Text weight={500}> Rendezvous </Text>
                                                  <Badge color="btn-color.6" variant="dark"> Discord Bot </Badge>
                                             </Group>

                                             <Text size="sm" color="dimmed">
                                                  A Python Discord bot which uses the Pycord library and the Ticketmaster API, hosted on Google Cloud's Compute Engine which allows users to filter events worldwide.
                                             </Text>

                                             <Button variant="dark" color="btn-color.6" mt="md" radius="md" fullWidth>
                                                  View Project Code
                                             </Button>
                                        </Card>
                                   </Carousel.Slide>

                                   {/* Project 2 */}
                                   <Carousel.Slide>
                                        <Card shadow="sm" p="lg" radius="lg" withBorder>
                                             <Card.Section>
                                                  <Image 
                                                  src={Gradient}
                                                  height={150}
                                                  alt="Project 2"
                                                  />
                                             </Card.Section>

                                             <Group positon="apart" mt="md" mb="xs">
                                                  <Text weight={500}> TechHunt </Text>
                                                  <Badge color="btn-color.6" variant="dark"> Web Development </Badge>
                                             </Group>

                                             <Text size="sm" color="dimmed">
                                             Open source full stack application that allows software developers to search for, upload, favorite, comment and request to join other open source projects. 
                                             </Text>

                                             <Button variant="dark" color="btn-color.6" mt="md" radius="md" fullWidth>
                                                  View Project Code
                                             </Button>
                                        </Card>
                                   </Carousel.Slide>

                                   {/* Project 3 */}
                                   <Carousel.Slide>
                                        <Card shadow="sm" p="lg" radius="lg" withBorder>
                                             <Card.Section>
                                                  <Image 
                                                  src={Gradient}
                                                  height={150}
                                                  alt="Project 3"
                                                  />
                                             </Card.Section>

                                             <Group positon="apart" mt="md" mb="xs">
                                                  <Text weight={500}> TabThat </Text>
                                                  <Badge color="btn-color.6" variant="dark"> REST API </Badge>
                                             </Group>

                                             <Text size="sm" color="dimmed">
                                             REST API to create, read, update and delete bookmarks, which sends and recieves data via a database. Built using Go, Gin Web Framework and MongoDB. 
                                             </Text>

                                             <Button variant="dark" color="btn-color.6" mt="md" radius="md" fullWidth>
                                                  View Project Code
                                             </Button>
                                        </Card>
                                   </Carousel.Slide>

                                   <Carousel.Slide>
                                        <Card shadow="sm" p="lg" radius="lg" withBorder>
                                             <Card.Section>
                                                  <Image 
                                                  src={Gradient}
                                                  height={150}
                                                  alt="Project 3"
                                                  />
                                             </Card.Section>

                                             <Group positon="apart" mt="md" mb="xs">
                                                  <Text weight={500}> MiniGames </Text>
                                                  <Badge color="btn-color.6" variant="dark"> Game Development </Badge>
                                             </Group>

                                             <Text size="sm" color="dimmed">
                                             Desktop application, built in Java, that contains two games, with instructions. Showcases use of Java Swing and AWT API. 
                                             </Text>

                                             <Button variant="dark" color="btn-color.6" mt="md" radius="md" fullWidth>
                                                  View Project Code
                                             </Button>
                                        </Card>
                                   </Carousel.Slide>
                              </Carousel>
                    </Container>
               </div>
          </section>
     );
};

export default ProjectsSection;