import React from 'react';
import './ExperienceSection.scss';
import { Accordion, Badge, Container, Divider, Grid, Timeline, Text, Title } from '@mantine/core';
import { BsClipboardCheck, BsLaptop } from 'react-icons/bs';
import Typed from "react-typed";

const ExperienceSection = () => {
     return (
          <section id="experience">
               <Container fluid>
                    <Title order={1} align="left" color={"white"}> Experience 🎓 </Title>
                    <div className="spacer" style={{ width: "100%", height: "1.5em" }} />
                    <Divider />
                    <div className="spacer" style={{ width: "100%", height: "2em" }} />
                    <Grid justify="space-around"> 
                         <Grid.Col>    
                              <Timeline active={1} color="btn-color.6" lineWidth={3} bulletSize={24} align="left">     
                                   <Timeline.Item title="Vice President of Development & Technology"> 
                                        <Badge color="btn-color.6" variant="dark"> Volunteering </Badge>
                                        <Text size="lg" color="white" weight={600}> Laurier Computing Society </Text>
                                        <Text size="sm" color="white" weight={600}> Waterloo, Ontario </Text>
                                        <Accordion variant="seperated">
                                             <Accordion.Item title="Responsibilities" value="LCS-exp">
                                                  <Accordion.Control icon={<BsClipboardCheck size={20} color="white"/>}><Text size="md" color="white" weight={550}>Responsibilities</Text></Accordion.Control>
                                                  <Accordion.Panel>
                                                       <ul>
                                                            <li>Created and managed React, Django & Git workshops for 300+ students</li>
                                                            <li>Responsible for ensuring all subgroups of the development team completed and reported sprints weekly, utilizing Kanban and Agile methodologies</li>
                                                            <li>Managed 5 project teams, consisting of 4‑5 members, in the areas of cybersecurity, artificial intelligence, game development web development</li>
                                                            <li>Directed and coordinated 400+ students in a month long hackthon‑style program with University of Waterloo’s Computer Science and Data Science clubs</li>
                                                            <li>Redesigned and rebuilt the official LCS website using Figma, React and Firebase</li>
                                                       </ul>
                                                  </Accordion.Panel>
                                             </Accordion.Item>
                                             <Accordion.Item title="Technologies" value="LCS-resp">
                                                  <Accordion.Control icon={<BsLaptop size={20} color="white"/>}><Text size="md" color="white" weight={550}>Technologies</Text></Accordion.Control>
                                                  <Accordion.Panel>
                                                       <ul>
                                                            <li>React.js</li>
                                                            <li>Node.js</li>
                                                            <li>Firebase</li>
                                                            <li>Git</li>
                                                            <li>Figma</li>
                                                            <li>Notion</li>
                                                            <li>Discord</li>
                                                       </ul>
                                                  </Accordion.Panel>
                                             </Accordion.Item>
                                        </Accordion>
                                   </Timeline.Item>

                                   <Timeline.Item title="Vice President of Development & Technology">
                                        <Badge color="btn-color.6" variant="dark"> Volunteering </Badge>
                                        <Text size="lg" color="white" weight={600}> HawkHacks </Text>
                                        <Text size="sm" color="white" weight={600}> Waterloo, Ontario </Text>
                                        <Accordion variant="seperated">
                                             <Accordion.Item title="Responsibilities" value="HawkHacks-exp">
                                                  <Accordion.Control icon={<BsClipboardCheck size={20} color="white"/>}><Text size="md" color="white" weight={550}>Responsibilities</Text></Accordion.Control>
                                                  <Accordion.Panel>
                                                       <ul>
                                                            <li>Worked with a team of 20+ executives to run a hackathon with more than 750 annual participants</li>
                                                            <li>Utilizied a Kanban project‑management methodology to ensure that the development team completed their tickets weekly</li>
                                                            <li>Designed and developed an Major League Hacking approved website for the hackathon using React.js and Firebase which increased interest by 200%</li>
                                                       </ul>
                                                  </Accordion.Panel>
                                             </Accordion.Item>
                                             <Accordion.Item title="Technologies" value="HawkHacks-resp">
                                                  <Accordion.Control icon={<BsLaptop size={20} color="white"/>}><Text size="md" color="white" weight={550}>Technologies</Text></Accordion.Control>
                                                  <Accordion.Panel>
                                                       <ul>
                                                            <li>React.js</li>
                                                            <li>Node.js</li>
                                                            <li>Git</li>
                                                            <li>Firebase</li>
                                                            <li>Figma</li>
                                                            <li>Notion</li>
                                                            <li>Discord</li>
                                                       </ul>
                                                  </Accordion.Panel>
                                             </Accordion.Item>
                                        </Accordion>
                                   </Timeline.Item>

                                   <Timeline.Item title="Analyst Programmer">
                                        <Badge color="btn-color.6" variant="dark"> Internship </Badge>
                                        <Text size="lg" color="white" weight={600}> Guardian Group </Text>
                                        <Text size="sm" color="white" weight={600}> Port-of-Spain, Trinidad & Tobago </Text>
                                        <Accordion variant="seperated">
                                             <Accordion.Item title="Responsibilities" value="Guardian-exp">
                                                  <Accordion.Control icon={<BsClipboardCheck size={20} color="white"/>}><Text size="md" color="white" weight={550}>Responsibilities</Text></Accordion.Control>
                                                  <Accordion.Panel>
                                                       <ul>
                                                            <li>Managed site vulnerability using reCAPTCHA within React.js forms, which drove down bot spam by 95%</li>
                                                            <li>Utilized Azure DevOps boards in order to track and update tasks and issues through Agile and Scrum methodologies which enabled a more stream-lined workflow across the team of 15 developers</li>
                                                            <li>Created and maintained CI/CD pipelines for deployment, allowing for a more streamlined work flow</li>
                                                       </ul>
                                                  </Accordion.Panel>
                                             </Accordion.Item>
                                             <Accordion.Item title="Technologies" value="Guardian-resp">
                                                  <Accordion.Control icon={<BsLaptop size={20} color="white"/>}><Text size="md" color="white" weight={550}>Technologies</Text></Accordion.Control>
                                                  <Accordion.Panel>
                                                       <ul>
                                                            <li>React.js</li>
                                                            <li>Node.js</li>
                                                            <li>Git</li>
                                                            <li>Azure DevOps</li>
                                                            <li>reCAPTCHA Enterprise</li>
                                                       </ul>
                                                  </Accordion.Panel>
                                             </Accordion.Item>
                                        </Accordion>
                                   </Timeline.Item>

                                   <Timeline.Item title="Software Engineer">
                                        <Badge color="btn-color.6" variant="dark"> Internship </Badge>
                                        <div className="company__desc">
                                             <Text size="lg" color="white" weight={600}> WiPay Caribbean </Text>
                                             <Text size="sm" color="white" weight={600}> Port-of-Spain, Trinidad & Tobago </Text>
                                        </div>
                                        <Accordion variant="seperated">
                                             <Accordion.Item title="Responsibilities" value="WiPay-exp">
                                                  <Accordion.Control icon={<BsClipboardCheck size={20} color="white"/>}><Text size="md" color="white" weight={550}>Responsibilities</Text></Accordion.Control>
                                                  <Accordion.Panel>
                                                       <ul>
                                                            <li>Developed an Android application for the WiPay platform which increased consumer interaction by 150%</li>
                                                            <li>Refactored the codebase for the internal admin panel using Laravel, MySQL and Apache which allowed for better team usability</li>
                                                       </ul>
                                                  </Accordion.Panel>
                                             </Accordion.Item>
                                             <Accordion.Item title="Technologies" value="WiPay-resp">
                                                  <Accordion.Control icon={<BsLaptop size={20} color="white"/>}><Text size="md" color="white" weight={550}>Technologies</Text></Accordion.Control>
                                                  <Accordion.Panel>
                                                       <ul>
                                                            <li>Linux</li>
                                                            <li>Apache</li>
                                                            <li>MySQL</li>
                                                            <li>PHP</li>
                                                            <li>Git</li>
                                                            <li>Android</li>
                                                            <li>Laravel</li>
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