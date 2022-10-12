import React from 'react';
import './ProjectsSection.scss';
import { Button, Badge, Card, Group, Grid, Image, Text, Title, Divider } from '@mantine/core';

const ProjectsSection = () => {
     return (
          <section id="projects">
               <div className="projects__container">
                    <Title order={1} align="center">Projects</Title>
                    <Divider />
                    <Grid grow>
                         <Grid.Col md={6} lg={3}>
                              {/* Project 1 */}
                              <Card shadow="sm" p="lg" radius="lg" withBorder>
                                   <Card.Section>
                                        <Image 
                                             src=""
                                             height={150}
                                             alt="Project 1"
                                        />
                                   </Card.Section>

                                   <Group positon="apart" mt="md" mb="xs">
                                        <Text weight={500}>This my 1st project card</Text>
                                        <Badge color="blue" variant="light"> Cybersecurity </Badge>
                                   </Group>

                                   <Text size="sm" color="dimmed">
                                        This is a description of my 1st project card
                                   </Text>

                                   <Button variant="light" color="blue" mt="md" radius="md" fullWidth>
                                        View Project Code
                                   </Button>
                              </Card>
                         </Grid.Col>

                         <Grid.Col md={6} lg={3}>
                              {/* Project 2 */}
                              <Card shadow="sm" p="lg" radius="lg" withBorder>
                                   <Card.Section>
                                        <Image 
                                        src=""
                                        height={150}
                                        alt="Project 2"
                                        />
                                   </Card.Section>

                                   <Group positon="apart" mt="md" mb="xs">
                                        <Text weight={500}>This my 2nd project card</Text>
                                        <Badge color="blue" variant="light"> Cybersecurity </Badge>
                                   </Group>

                                   <Text size="sm" color="dimmed">
                                        This is a description of my 2nd project card
                                   </Text>

                                   <Button variant="light" color="blue" mt="md" radius="md" fullWidth>
                                        View Project Code
                                   </Button>
                              </Card>
                         </Grid.Col>

                         <Grid.Col md={6} lg={3}>
                              {/* Project 3 */}
                              <Card shadow="sm" p="lg" radius="lg" withBorder>
                                   <Card.Section>
                                        <Image 
                                        src=""
                                        height={150}
                                        alt="Project 3"
                                        />
                                   </Card.Section>

                                   <Group positon="apart" mt="md" mb="xs">
                                        <Text weight={500}>This my 3rd project card</Text>
                                        <Badge color="blue" variant="light"> Cybersecurity </Badge>
                                   </Group>

                                   <Text size="sm" color="dimmed">
                                        This is a description of my 3rd project card
                                   </Text>

                                   <Button variant="light" color="blue" mt="md" radius="md" fullWidth>
                                        View Project Code
                                   </Button>
                              </Card>
                         </Grid.Col>
                    </Grid>
               </div>
          </section>
     );
};

export default ProjectsSection;