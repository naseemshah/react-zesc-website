import React from 'react';
// import {useEffect} from 'react';
import closeBtn from './closeSidebarBtn.svg'
import menuItems from './MenuItems';
import './sidebar.css';
import { motion } from "framer-motion";



function Sidebar() {
    // const variants = {
    //     hidden: { opacity: 0 },
    //     visible: { opacity: 1 },
    //   }
  return (
      <div>
        <motion.div className="sideBar" 
        initial={{x: '100vw'}}
        animate={{x: '0'}}
        transition={{delay: 0.5, duration: 0.5}}
        
        >
            <motion.div className="sideBarHead"
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{delay: 1, duration: 0.5}}>
                <motion.h1
                    initial={{opacity: 0,x:-200}}
                    animate={{opacity: 1, x: 0}}
                    transition={{delay: 1, duration: 1}}
                >Menu</motion.h1>
                <img src={closeBtn} alt="Close"></img>
            </motion.div>

            <div  className="nav-links-container">
                <ul>
                    { menuItems.map((item)=>{
                        return(
                        <motion.li 
                            whileHover={{scale: 1.3}}
                            className={item.cName}><a  href={item.url}>{item.title}</a></motion.li>
                        )
                        })
                    }
                </ul>
            </div>
                  
        </motion.div>
      </div>
    
  );
}

export default Sidebar;
