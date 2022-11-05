import { Menu, Button, Text } from '@mantine/core';
import { IconMail, IconBrandLinkedin, IconBrandGithub } from '@tabler/icons';

const ContactButton = () => {
  return (
     <Menu shadow="md" width={200}>
          <Menu.Target>
               <Button color="btn-color.6">Contact</Button>
          </Menu.Target>

          <Menu.Dropdown>
               <a href="https://linkedin.com/in/aidan-traboulay" target="_blank" rel="external noreferrer">
                    <Menu.Item icon={<IconBrandLinkedin size={18} />}> Linkedin </Menu.Item>
               </a>
               <a href="mailto:trab5590@mylaurier.ca" target="_blank" rel="external noreferrer">
                    <Menu.Item icon={<IconMail size={18} />}> Email </Menu.Item>
               </a>
               <a href="https://github.com/aidantrabs" target="_blank" rel="external noreferrer">
                    <Menu.Item icon={<IconBrandGithub size={18} />}> GitHub </Menu.Item>
               </a>
          </Menu.Dropdown>
     </Menu>
  );
};

export default ContactButton;