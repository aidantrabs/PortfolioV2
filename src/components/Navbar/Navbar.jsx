import React from 'react';
import './Navbar.scss';
import { Button, Burger, Drawer, Title } from '@mantine/core';
import { Link } from 'react-scroll';
import { ContactButton } from '../../components';
import { Brand } from '../../assets';

const Navbar = () => {

     const [opened, setOpened] = React.useState(false);

     return (
          <header>
               <div className="navbar__desktop">
                    <div className="desktop__icon">
                         <Link to="hero" smooth={true} duration={500}>
                              <img src={Brand} alt="Navbar icon"/>
                         </Link>
                    </div>
                    <div className="navbar">
                         <div className="navbar__item"><Link to="experience" smooth duration={400}> Experience </Link></div>
                         <div className="navbar__item"><Link to="projects" smooth duration={400}> Projects </Link></div>
                         <div className="navbar__item"><Link to="about" smooth duration={400}> About </Link></div>  
                         <div className="navbar__item"><a href=".\Aidan_Traboulay_Resume.pdf" target="_blank" rel="next noreferrer"> Resume </a> </div>
                         <ContactButton />
                    </div>
               </div>

               <div className="navbar__mobile">
                    <div className="burger__icon">
                         {/* Navbar icon */}
                         <Link to="hero" smooth={true} duration={500}>
                              <img src={Brand} alt="Navbar icon" />
                         </Link>
                    </div>
                    <div className="burger__button">
                         <Burger
                              opened={opened}
                              onClick={() => setOpened((open) => !open)}
                              size="sm"
                              color="#DA0037"
                         />
                    </div>

                    <Drawer 
                         transition="rotate-left"
                         transitionDuration={300}
                         transitionTimingFunction="ease"
                         opened={opened}
                         onClose={() => setOpened(false)}
                         position="top"
                         overlayOpacity={0.55}
                         overlayColor="var(--color-background)"
                         overlayBlur={3}
                         padding="xl"
                    >
                         <div className="drawer__content">
                              <div className="drawer__items">
                                   <div className="drawer__item"><Link to="experience" smooth duration={400} onClick={() => setOpened(false)}><Title order={3}>Experience</Title></Link></div>
                                   <div className="drawer__item"><Link to="projects" smooth duration={400} onClick={() => setOpened(false)}><Title order={3}>Projects</Title></Link></div>
                                   <div className="drawer__item"><Link to="socials" smooth duration={400} onClick={() => setOpened(false)}><Title order={3}>Socials</Title></Link></div>
                              </div>

                              <div className="drawer__items">
                                   <ContactButton/>
                              </div>
                         </div>
                    </Drawer>
               </div>
          </header>
     );
};

export default Navbar;