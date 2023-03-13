import React from "react";
import "./Footer.scss";
import { SocialBar } from "@components";

const Footer = () => {
     return (
          <footer>
               <div className="footer-container">
                    <div className="footer__info">
                         <p>© 2022 Aidan Traboulay. All rights reserved.</p>
                         <SocialBar />
                    </div>
               </div>
          </footer>
     );
};

export default Footer;