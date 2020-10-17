import React from 'react';
import './hero.css';
import heroImage from './hero-image.svg';
import { motion } from "framer-motion";
import rectPat from './rect-pat.svg'




function Navbar() {


  return (
        <section id="HeroSection">
           
            <motion.img className="hero-image"
            src={heroImage}
            alt="HeroImage"
            initial={{opacity: 0, y: 50}}
            animate={{opacity: 1, y: 0}}
            transition={{ delay:0.5, duration: 1}}
            ></motion.img>
            <motion.h1 
                initial={{opacity: 0, y: 50}}
                animate={{opacity: 1, y: 0}}
                transition={{ delay:1, duration: 1}}
            >ZSEC protocol is the world’s first E-commerce project
            combining yield farming, staking with deflationary
            components in a DEFI ecosystem.
            
            </motion.h1>
            <motion.p
                initial={{opacity: 0, y: 50}}
                animate={{opacity: 1, y: 0}}
                transition={{ delay:1.2, duration: 1}}
            >
                Purchasing real world products, collectibles, game skins
            </motion.p>
            <motion.div className="heroSectionDescContainer"
                initial={{opacity: 0, y: 50}}
                animate={{opacity: 1, y: 0}}
                transition={{ delay:1.2, duration: 1}}
            >
                <div className="heroSectionButtonContainer">
                    <button>Uniswap</button>
                    <button>Community</button>
                </div>
                <motion.img
                className="rectPat2"
                initial={{opacity: 0, y: 50}}
                animate={{opacity: 1, y: 0}}
                transition={{ delay:1.2, duration: 1}}
                src={rectPat} alt=""></motion.img>
                
            </motion.div>
            
        </section>
  );
}

export default Navbar;