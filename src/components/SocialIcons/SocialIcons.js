import React from 'react';
import twIcon from './twitter.svg';
import mdIcon from './medium.svg';
import tgIcon from './telegram.svg';
import ghIcon from './github.svg';
import './socialIcons.css';



function SocialIcons() {
  return (    
    <div className="social-icons-container">
        <a href="https://t.me/zsec_official"><img src={tgIcon} alt="Telegram Icon"></img></a>
        <a href="https://twitter.com/zsec_official"><img src={twIcon} alt="Twitter Icon"></img></a>
        <a href="https://medium.com/@zsecprotocol"><img src={mdIcon} alt="Medium Icon"></img></a>
        <a href="https://github.com/zsecprotocol"><img src={ghIcon} alt="Github Icon"></img></a>
    </div>      
    
  );
}

export default SocialIcons;
