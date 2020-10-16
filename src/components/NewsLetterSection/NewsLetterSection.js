import React from 'react';
import './Newsletter.css';
import underlineIcon from "./underline.svg";
import rectPat from './rect-pat.svg'
import { useInView } from 'react-intersection-observer';
import { motion } from "framer-motion";


function NewsletterSection() {
    const { ref, inView } = useInView({
        threshold: 0,
      });

  return (
      <div  ref={ref} >
          {inView && <motion.section transition={{delay: 0.5, duration: 1}} initial={{opacity:0}} animate={{opacity: 1}} id="NewsletterSection" className="lax" data-lax-preset="fadeIn"
            
        
            >
                
                <div className="news-heading-container">
                    <h1>Subscribe Newsletter</h1>
                    <img src={underlineIcon} alt=''></img>
                </div>
               
               <div  className="news-input-container">
                    <input placeholder="Your Email..."></input>
                    <button>Subscribe</button>
               </div>
               <div className="news-pattern">
                   <img src={rectPat} alt=""></img>
               </div>
            </motion.section>
          
          
          }
      </div>
        
  );
}

export default NewsletterSection;