import React from 'react';
import SocialIcons from '../SocialIcons/SocialIcons'
import './footer.css';


function Footer() {
  return (
    
    <footer>
        <section>
            <div className="footer-links-container">
                <div className="footer-nav-links-container">
                    <p><a href="#a">Whitepaper</a></p>
                    <p><a href="#a">Token Tracker</a></p>
                </div>
                <SocialIcons />
            </div>
            <div className="footer-copyright">
                <p>© Copyright 2020 ZSEC</p>
            </div>
            
        </section>
    </footer>      
    
  );
}

export default Footer;
