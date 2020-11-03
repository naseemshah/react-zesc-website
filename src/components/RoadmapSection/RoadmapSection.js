import React from 'react';
import './roadmap.css';
import underlineIcon from "../coreFeaturesSection/underline.svg";
import InView, { useInView } from 'react-intersection-observer';
import { motion } from "framer-motion";
import q42020image from './q4-2020.svg';
import q12021image from './q1-2021.svg';





function RoadmapSection() {
    const { ref, inView } = useInView({
        threshold: 0,
      });
      
    
    let contents = [];
   
  return (
        <section ref={ref} >
            { inView &&
            
            
            <motion.div
                transition={{delay: 0.5, duration: 1}}
                initial={{opacity:0, y: 50}}
                animate={{opacity: 1, y: 0}}          
            >

                <div className="roadmap-heading-container">
                    <h1>Zsec Roadmap</h1>
                    <img src={underlineIcon} alt=''></img>
                </div>
                <div className="roadmap">
                    
                    <p>Q4 2020</p>
                    <img src={q42020image} alt="q4 2020"></img>
                    <p>Q1 2021</p>
                    <img src={q12021image} alt="q1 2021"></img>  

                </div>
            </motion.div>
            }
        </section>
  );
}

export default RoadmapSection;