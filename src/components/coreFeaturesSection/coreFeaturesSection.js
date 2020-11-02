import React from 'react';
import './coreFeatures.css';
import underlineIcon from "./underline.svg";
import { useInView } from 'react-intersection-observer';
import { motion } from "framer-motion";



function CoreFeaturesSection() {
    const { ref, inView } = useInView({
        threshold: 0,
        triggerOnce: true
      });
      
    //Icons
    let contents = [
        {
            title: 'An E-commerce project with a DeFi integration',
            icon: '/assets/img/cart.svg',
            desc: 'ZSEC protocol is a DeFi resolution that’s on purpose to present where so many other projects have crashed. It’s invented to be a project that is a connection between De fiand E-Commerce.'
        },
        {
            title: 'Staking',
            icon: '/assets/img/staking.svg',
            desc: 'ZSEC protocol is a decentralised finance (Defi) platform to present a resolution for Defi to entry e-commerce such as shopping staking.'
        },
        {
            title: 'Yield Farming',
            icon: '/assets/img/yield.svg',
            desc: 'ZSEC protocol is a DeFi resolution that’s on purpose to present where so many other projects have crashed. It’s invented to be a project that is a connection between De fiand E-Commerce.'
        },
        {
            title: 'Buy Back',
            icon: '/assets/img/buyBack.svg',
            desc: 'When the number of tokens in the shopping capital is burned. A farther quantity of tokens will be repurchased from the store. This method renewed over time and will significantly expand the value of ZSEC protocol.'
        }
    ]
   
  return (
        <section ref={ref} id="coreFeaturesSection">
            { inView &&
            
            
            <motion.div
                transition={{delay: 0.5, duration: 1}}
                initial={{opacity:0, y: 50}}
                animate={{opacity: 1, y: 0}}          
            >

                <div className="core-features-heading-container">
                    <h1>Core Features</h1>
                    <img src={underlineIcon} alt=''></img>
                </div>
                <div className="core-features-contents">
                    {
                        contents.map((item,id)=>{
                            return (

                                    <div  className="feature-container lax" data-lax-preset="zoomIn-0.1" data-lax-opacity="0 1, vh 0"  key={id} >
                                        <img src={item.icon} alt={item.title}></img>
                                        <h2>{item.title}</h2>
                                        <p>{item.desc}</p>
                                    </div>

                                )
                        })
                    }                
                </div>
            </motion.div>
            }
        </section>
  );
}

export default CoreFeaturesSection;