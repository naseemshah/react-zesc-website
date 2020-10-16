import React from 'react';
import SocialIcons from '../SocialIcons/SocialIcons' 
import closeBtn from './closeSidebarBtn.svg'
import menuItems from './MenuItems';
import './sidebar.css';
import { motion, AnimatePresence } from "framer-motion";



function Sidebar(props) {
    
    const variants = {
        visible: i => ({
          opacity: 1,
          transition: {
            delay: 2 + (i * 0.1),
          },
        }),
        hidden: { opacity: 0 },
      }
    
  return (
      <div>
        <AnimatePresence>
            <motion.div className="sideBar"
                
                initial={{ position: "fixed", zindex: 100, x: '100vw'}}
                animate={{ position: "fixed", zindex: 100, x: '0'}}
                transition={{delay: 0.5, duration: 0.5}}
                exit={{ opacity: 0 }}
            >
            {/* {console.log(props.SidebarStates.setsideBarOpen)} */}
                <motion.div className="sideBarHead"
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{delay: 1, duration: 0.5}}>
                    <motion.h1
                        initial={{opacity: 0,x:-200}}
                        animate={{opacity: 1, x: 0}}
                        transition={{delay: 1, duration: 1}}
                    >Menu</motion.h1>
                    <img src={closeBtn} onClick={()=>{props.SidebarStates.setsideBarOpen(false)}} alt="Close"></img>
                </motion.div>

                <div  className="nav-links-container">
                    <ul>
                        { menuItems.map((item,i)=>{
                            return(
                            <motion.li
                                custom={i}
                                key={item.title}
                                initial="hidden"   
                                whileHover={{scale: 1.3}}
                                animate="visible"
                                variants={variants}
                                className={item.cName}><a  href={item.url}>{item.title}</a></motion.li>
                            )
                            })
                        }
                    </ul>
                </div>
                <div className="sidebar-copyright">
                    <div>
                        <div className="sidebar-social">
                            <SocialIcons />
                            <p>© Copyright 2020 ZSEC</p>
                        </div>
                        
                    </div>
                </div>
            </motion.div>

        </AnimatePresence>
        
      </div>
    
  );
}

export default Sidebar;
