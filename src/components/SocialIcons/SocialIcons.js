import React from 'react';
import fbIcon from './fb.svg';
import twIcon from './twitter.svg';
import mdIcon from './medium.svg';
import './socialIcons.css';



function SocialIcons() {
  return (
    
    <div className="social-icons-container">
        <a href="#a"><img src={fbIcon} alt="Facbook Icon"></img></a>
        <a href="#a"><img src={twIcon} alt="Twitter Icon"></img></a>
        <a href="#a"><img src={mdIcon} alt="Twitter Icon"></img></a>
    </div>      
    
  );
}

export default SocialIcons;
