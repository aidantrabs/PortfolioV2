import React from 'react';
import './ProjectsSection.scss';
import { Center, Button, Badge, Container, Card, Group, Image, Text, Title, Divider } from '@mantine/core';
import { Carousel } from '@mantine/carousel';
import { Gradient } from '@assets';

const ProjectsSection = () => {
     return (
          <section id="projects">
               <div className="projects__container">
                    <Container>
                         <Title order={1} align="left" color={"white"}> Projects💻 </Title>
                         <div className="spacer" style={{ width: "100%", height: "1.5em" }} />
                         <Divider />
                         <div className="spacer" style={{ width: "100%", height: "2em" }} />
                         <Carousel slideSize="40%" height={500} slideGap="lg" loop dragFree slidesToScroll={1} 
                              breakpoints={[
                                   { maxWidth: 'md', slideSize: '50%' },
                                   { maxWidth: 'sm', slideSize: '100%', slideGap: -10 },
                              ]}
                         >
                                   {/* Project 1 */}
                                   <Carousel.Slide>
                                        <Card shadow="sm" p="md" radius="lg" withBorder>
                                             <Card.Section>
                                                  <Image 
                                                       src={Gradient}
                                                       height={150}
                                                       alt="Project 1"
                                                  />
                                             </Card.Section>

                                             <Group positon="apart" mt="md" mb="xs">
                                                  <Text weight={500}> Rendezvous </Text>
                                                  <Badge gradient={{ from: 'indigo', to: 'cyan' }} variant="gradient"> Discord Bot </Badge>
                                             </Group>

                                             <Text size="sm" color="dimmed">
                                                  A Python Discord bot which uses the Pycord library and the Ticketmaster API, hosted on Google Cloud's Compute Engine which allows users to filter events worldwide.
                                             </Text>
                                             <div className="spacer" style={{ width: "100%", height: "2em" }} />
                                             <Center>
                                                  <Button component="a" href="https://github.com/aidantrabs/Rendezvous" target="_blank" rel="noreferrer" variant="dark" color="btn-color.6" radius="md">
                                                       View Project Code
                                                  </Button>
                                             </Center>
                                        </Card>
                                   </Carousel.Slide>

                                   {/* Project 2 */}
                                   <Carousel.Slide>
                                        <Card shadow="sm" p="md" radius="lg" withBorder>
                                             <Card.Section>
                                                  <Image 
                                                  src={Gradient}
                                                  height={150}
                                                  alt="Project 2"
                                                  />
                                             </Card.Section>

                                             <Group positon="apart" mt="md" mb="xs">
                                                  <Text weight={500}> TechHunt </Text>
                                                  <Badge variant="gradient" gradient={{ from: '#ed6ea0', to: '#ec8c69', deg: 35 }}> Web Development </Badge>
                                             </Group>

                                             <Text size="sm" color="dimmed">
                                                  Open source full stack application that allows software developers to search for, upload, favorite, comment and request to join other open source projects. 
                                             </Text>
                                             <div className="spacer" style={{ width: "100%", height: "2em" }} />
                                             <Center>
                                                  <Button component="a" href="https://github.com/aidantrabs/TechHunt" target="_blank" rel="noreferrer" variant="dark" color="btn-color.6" radius="md">
                                                       View Project Code
                                                  </Button>
                                             </Center>
                                        </Card>
                                   </Carousel.Slide>

                                   {/* Project 3 */}
                                   <Carousel.Slide>
                                        <Card shadow="sm" p="md" radius="lg" withBorder>
                                             <Card.Section>
                                                  <Image 
                                                  src={Gradient}
                                                  height={150}
                                                  alt="Project 3"
                                                  />
                                             </Card.Section>

                                             <Group positon="apart" mt="md" mb="xs">
                                                  <Text weight={500}> TabThat </Text>
                                                  <Badge variant="gradient" gradient={{ from: 'teal', to: 'lime', deg: 105 }}> REST API </Badge>
                                             </Group>

                                             <Text size="sm" color="dimmed">
                                                  REST API to create, read, update and delete bookmarks, which sends and recieves data via a database. Built using Go, Gin Web Framework and MongoDB. 
                                             </Text>
                                             <div className="spacer" style={{ width: "100%", height: "2em" }} />
                                             <Center>
                                                  <Button component="a" href="https://github.com/aidantrabs/TabThat" target="_blank" rel="noreferrer" variant="dark" color="btn-color.6" radius="md">
                                                       View Project Code
                                                  </Button>
                                             </Center>
                                        </Card>
                                   </Carousel.Slide>

                                   <Carousel.Slide>
                                        <Card shadow="sm" p="md" radius="lg" withBorder>
                                             <Card.Section>
                                                  <Image 
                                                  src={Gradient}
                                                  height={150}
                                                  alt="Project 3"
                                                  />
                                             </Card.Section>

                                             <Group positon="apart" mt="md" mb="xs">
                                                  <Text weight={500}> MiniGames </Text>
                                                  <Badge variant="gradient" gradient={{ from: 'orange', to: 'red' }}> Game Development </Badge>
                                             </Group>

                                             <Text size="sm" color="dimmed">
                                                  Desktop application, built in Java, that contains two games, with instructions. Showcases use of Java Swing and AWT API. 
                                             </Text>
                                             <div className="spacer" style={{ width: "100%", height: "3.4em" }} />
                                             <Center>
                                                  <Button component="a" href="https://github.com/aidantrabs/MiniGames" target="_blank" rel="noreferrer" variant="dark" color="btn-color.6" radius="md">
                                                       View Project Code
                                                  </Button>
                                             </Center>
                                        </Card>
                                   </Carousel.Slide>
                              </Carousel>
                    </Container>
               </div>
          </section>
     );
};

export default ProjectsSection;