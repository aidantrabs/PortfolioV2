import React from 'react';
import './Navbar.css';

const Navbar = () => {
     return (
          <>
               <nav className="navbar">
                    <div className="navbar__logo">
                         <h1>Aidan Traboulay</h1>
                    </div>
                    <div className="navbar__links">
                         <ul>
                              <li><a href="#">Home</a></li>
                              <li><a href="#">Projects</a></li>
                              <li><a href="#">Resume</a></li>
                              <li><a href="#">Contact</a></li>
                         </ul>
                    </div>
               </nav>
          </>
     );
};

export default Navbar;