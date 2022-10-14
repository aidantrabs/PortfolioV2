import React from 'react';
import './ExperienceSection.scss';
import { Accordion, Badge, Container, Divider, Grid, Timeline, Text, Title } from '@mantine/core';
import { BsClipboardCheck, BsLaptop } from 'react-icons/bs';

const ExperienceSection = () => {
     return (
          <section id="experience">
               <Container>
                    <Title order={1} align="left" color={"white"}> Experience </Title>
                    <div className="spacer" style={{ width: "100%", height: "1.5em" }} />
                    <Divider />
                    <div className="spacer" style={{ width: "100%", height: "2em" }} />
                    <Grid justify="space-around"> 
                         <Grid.Col>    
                              <Timeline active={1} color="light" lineWidth={3} bulletSize={24} align="left">     
                                   <Timeline.Item title="Vice President of Development & Technology"> 
                                        <Badge color="blue" variant="light"> Volunteering </Badge>
                                        <Text size="lg" color="white" weight={600}> Laurier Computing Society </Text>
                                        <Text size="sm" color="white" weight={600}> Waterloo, Ontario </Text>
                                        <Accordion>
                                             <Accordion.Item title="Responsibilities" value="LCS-exp">
                                                  <Accordion.Control icon={<BsClipboardCheck size={20} color="white"/>}><Text size="md" color="white" weight={550}>Responsibilities</Text></Accordion.Control>
                                                  <Accordion.Panel>
                                                       <ul>
                                                            <li>Developed and maintained the LCS</li>
                                                            <li>Developed and maintained the LCS</li>
                                                            <li>Developed and maintained the LCS</li>
                                                            <li>Developed and maintained the LCS</li>
                                                            <li>Developed and maintained the LCS</li>
                                                       </ul>
                                                  </Accordion.Panel>
                                             </Accordion.Item>
                                             <Accordion.Item title="Technologies" value="LCS-resp">
                                                  <Accordion.Control icon={<BsLaptop size={20} color="white"/>}><Text size="md" color="white" weight={550}>Technologies</Text></Accordion.Control>
                                                  <Accordion.Panel>
                                                       <ul>
                                                            <li>Developed and maintained the LCS website using React.js</li>
                                                            <li>Developed and maintained the LCS Discord bot using Python</li>
                                                            <li>Developed and maintained the LCS API using Node.js</li>
                                                            <li>Developed and maintained the LCS mobile app using React Native</li>
                                                            <li>Developed and maintained the LCS backend using Node.js</li>
                                                       </ul>
                                                  </Accordion.Panel>
                                             </Accordion.Item>
                                        </Accordion>
                                   </Timeline.Item>

                                   <Timeline.Item title="Vice President of Development & Technology">
                                        <Badge color="blue" variant="light"> Volunteering </Badge>
                                        <Text size="lg" color="white" weight={600}> HawkHacks </Text>
                                        <Text size="sm" color="white" weight={600}> Waterloo, Ontario </Text>
                                        <Accordion>
                                             <Accordion.Item title="Responsibilities" value="HawkHacks-exp">
                                                  <Accordion.Control icon={<BsClipboardCheck size={20} color="white"/>}><Text size="md" color="white" weight={550}>Responsibilities</Text></Accordion.Control>
                                                  <Accordion.Panel>
                                                       <ul>
                                                            <li>Developed and maintained the LCS website using React.js</li>
                                                            <li>Developed and maintained the LCS Discord bot using Python</li>
                                                            <li>Developed and maintained the LCS API using Node.js</li>
                                                            <li>Developed and maintained the LCS mobile app using React Native</li>
                                                            <li>Developed and maintained the LCS backend using Node.js</li>
                                                       </ul>
                                                  </Accordion.Panel>
                                             </Accordion.Item>
                                             <Accordion.Item title="Technologies" value="HawkHacks-resp">
                                                  <Accordion.Control icon={<BsLaptop size={20} color="white"/>}><Text size="md" color="white" weight={550}>Technologies</Text></Accordion.Control>
                                                  <Accordion.Panel>
                                                       <ul>
                                                            <li>Developed and maintained the LCS website using React.js</li>
                                                            <li>Developed and maintained the LCS Discord bot using Python</li>
                                                            <li>Developed and maintained the LCS API using Node.js</li>
                                                            <li>Developed and maintained the LCS mobile app using React Native</li>
                                                            <li>Developed and maintained the LCS backend using Node.js</li>
                                                       </ul>
                                                  </Accordion.Panel>
                                             </Accordion.Item>
                                        </Accordion>
                                   </Timeline.Item>

                                   <Timeline.Item title="Analyst Programmer">
                                        <Badge color="blue" variant="light"> Internship </Badge>
                                        <Text size="lg" color="white" weight={600}> Guardian Group </Text>
                                        <Text size="sm" color="white" weight={600}> Port-of-Spain, Trinidad & Tobago </Text>
                                        <Accordion>
                                             <Accordion.Item title="Responsibilities" value="Guardian-exp">
                                                  <Accordion.Control icon={<BsClipboardCheck size={20} color="white"/>}><Text size="md" color="white" weight={550}>Responsibilities</Text></Accordion.Control>
                                                  <Accordion.Panel>
                                                       <ul>
                                                            <li>Developed and maintained the LCS website using React.js</li>
                                                            <li>Developed and maintained the LCS Discord bot using Python</li>
                                                            <li>Developed and maintained the LCS API using Node.js</li>
                                                            <li>Developed and maintained the LCS mobile app using React Native</li>
                                                            <li>Developed and maintained the LCS backend using Node.js</li>
                                                       </ul>
                                                  </Accordion.Panel>
                                             </Accordion.Item>
                                             <Accordion.Item title="Technologies" value="Guardian-resp">
                                                  <Accordion.Control icon={<BsLaptop size={20} color="white"/>}><Text size="md" color="white" weight={550}>Technologies</Text></Accordion.Control>
                                                  <Accordion.Panel>
                                                       <ul>
                                                            <li>Developed and maintained the LCS website using React.js</li>
                                                            <li>Developed and maintained the LCS Discord bot using Python</li>
                                                            <li>Developed and maintained the LCS API using Node.js</li>
                                                            <li>Developed and maintained the LCS mobile app using React Native</li>
                                                            <li>Developed and maintained the LCS backend using Node.js</li>
                                                       </ul>
                                                  </Accordion.Panel>
                                             </Accordion.Item>
                                        </Accordion>
                                   </Timeline.Item>

                                   <Timeline.Item title="Software Engineer">
                                        <Badge color="blue" variant="light"> Internship </Badge>
                                        <div className="company__desc">
                                             <Text size="lg" color="white" weight={600}> WiPay Caribbean </Text>
                                             <Text size="sm" color="white" weight={600}> Port-of-Spain, Trinidad & Tobago </Text>
                                        </div>
                                        <Accordion>
                                             <Accordion.Item title="Responsibilities" value="WiPay-exp">
                                                  <Accordion.Control icon={<BsClipboardCheck size={20} color="white"/>}><Text size="md" color="white" weight={550}>Responsibilities</Text></Accordion.Control>
                                                  <Accordion.Panel>
                                                       <ul>
                                                            <li>Developed and maintained the LCS website using React.js</li>
                                                            <li>Developed and maintained the LCS Discord bot using Python</li>
                                                            <li>Developed and maintained the LCS API using Node.js</li>
                                                            <li>Developed and maintained the LCS mobile app using React Native</li>
                                                            <li>Developed and maintained the LCS backend using Node.js</li>
                                                       </ul>
                                                  </Accordion.Panel>
                                             </Accordion.Item>
                                             <Accordion.Item title="Technologies" value="WiPay-resp">
                                                  <Accordion.Control icon={<BsLaptop size={20} color="white"/>}><Text size="md" color="white" weight={550}>Technologies</Text></Accordion.Control>
                                                  <Accordion.Panel>
                                                       <ul>
                                                            <li>Developed and maintained the LCS website using React.js</li>
                                                            <li>Developed and maintained the LCS Discord bot using Python</li>
                                                            <li>Developed and maintained the LCS API using Node.js</li>
                                                            <li>Developed and maintained the LCS mobile app using React Native</li>
                                                            <li>Developed and maintained the LCS backend using Node.js</li>
                                                       </ul>
                                                  </Accordion.Panel>
                                             </Accordion.Item>
                                        </Accordion>
                                   </Timeline.Item>
                              </Timeline>
                         </Grid.Col>
                    </Grid>
               </Container>
          </section>
     );
};

export default ExperienceSection;