import React from 'react';
import './Newsletter.css';
import underlineIcon from "./underline.svg";
import rectPat from './rect-pat.svg'

function NewsletterSection() {

  return (
        <section id="NewsletterSection">
            <div className="news-heading-container">
                <h1>Subscribe Newsletter</h1>
                <img src={underlineIcon} alt=''></img>
            </div>
           
           <div  className="news-input-container">
                <input placeholder="Your Email..."></input>
                <button>Subscribe</button>
           </div>
           <div class="news-pattern">
               <img src={rectPat} alt=""></img>
           </div>
        </section>
  );
}

export default NewsletterSection;