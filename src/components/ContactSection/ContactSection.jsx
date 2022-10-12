import React from 'react';
import './ContactSection.scss';
import { Title, Divider, Text } from '@mantine/core';
import { SocialBar } from '../index';

const ContactSection = () => {
     return (
          <section id="contact">
               <Title order={1} align="left">Contact</Title>
               <Divider />
               <Text size="lg" color="dimmed">
                    If you have any questions or would like to get in touch, please feel free to contact me.
               </Text>
               <SocialBar />
          </section>
     );
};

export default ContactSection;