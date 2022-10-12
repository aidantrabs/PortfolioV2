import React from 'react';
import './ExperienceSection.scss';

import { Container, Divider, Grid, Timeline, Text, Title } from '@mantine/core';

const ExperienceSection = () => {
     return (
          <section id="experience">
               <Container>
                    <Title order={1} align="left">Experience</Title>
                    <div className="spacer" style={{ width: "100%", height: "1.5em" }} />
                    <Divider />
                    <div className="spacer" style={{ width: "100%", height: "2em" }} />
                    <Grid justify="space-around"> 
                         <Grid.Col>    
                              <Timeline active={1} color="dark" lineWidth={3} bulletSize={24} align="left">
                                   <Timeline.Item title="Vice President of Development & Technology" >
                                        <Text>  </Text>
                                        <Text size="xs"> 2022 - 2023512 </Text>
                                   </Timeline.Item>

                                   <Timeline.Item title="Vice President of Development & Technology">
                                        <Text> i did xyz </Text>
                                        <Text> 2022 - 2023512 </Text>
                                   </Timeline.Item>

                                   <Timeline.Item title="Vice President of Development & Technology">
                                        <Text> i did xyz </Text>
                                        <Text> 2022 - 2023512 </Text>
                                   </Timeline.Item>
                              </Timeline>
                         </Grid.Col>
                    </Grid>
               </Container>
          </section>
     );
};

export default ExperienceSection;