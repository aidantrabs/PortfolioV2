import React from 'react';
import './ExperienceSection.scss';

import { Divider, Timeline, Text, Title } from '@mantine/core';

const ExperienceSection = () => {
     return (
          <section id="experience">
               <Title order={1} align="right">Experience</Title>
               <Divider />
               <Timeline active={1} color="dark" lineWidth={3} bulletSize={24} align="right">
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
          </section>
     );
};

export default ExperienceSection;