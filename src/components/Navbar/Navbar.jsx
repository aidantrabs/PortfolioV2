import React from 'react';
import './Navbar.scss';
import { Anchor, Button, Burger, Drawer, Text, Title } from '@mantine/core';
import { Link } from 'react-scroll';
import { SocialBar } from '../../components';

const Navbar = () => {

     const [opened, setOpened] = React.useState(false);

     return (
          <header>
               <div className="navbar__desktop">
                    <div>

                    </div>
                    <div className="navbar">
                         <div className="navbar__item"><Link to="about" smooth duration={400}>About</Link></div>
                         <div className="navbar__item"><Link to="experience" smooth duration={400}>Experience</Link></div>
                         <div className="navbar__item"><Link to="projects" smooth duration={400}>Projects</Link></div>

                         <Button color="" size="sm"> Contact </Button>
                    </div>
               </div>

               <div className="navbar__mobile">
                    <div className="burger__button">
                         <Burger
                              opened={opened}
                              onClick={() => setOpened((open) => !open)}
                              size="sm"
                         />
                    </div>

                    <Drawer 
                         transition="rotate-right"
                         transitionDuration={300}
                         transitionTimingFunction="ease"
                         opened={opened}
                         onClose={() => setOpened(false)}
                         position="right"
                         overlayOpacity={0.5}
                         padding="xl"
                    >
                         <div className="drawer__content">
                              <div className="drawer__items">
                                   <div className="drawer__item"><Link to="#" smooth duration={400} onClick={() => setOpened(false)}><Title order={2}>About</Title></Link></div>
                                   <div className="drawer__item"><Link to="#" smooth duration={400} onClick={() => setOpened(false)}><Title order={2}>Experience</Title></Link></div>
                                   <div className="drawer__item"><Link to="#" smooth duration={400} onClick={() => setOpened(false)}><Title order={2}>Projects</Title></Link></div>
                              </div>

                              <div className="drawer__items">
                                   <SocialBar/>
                              </div>
                         </div>
                    </Drawer>
               </div>
          </header>
     );
};

export default Navbar;