import React,  { useState }  from 'react';
import logo from '../../logo.svg';
import sidebarBtn from './sidebarbtn.svg';
import menuItems from './MenuItems';
import Sidebar from './Sidebar';
import { motion, AnimatePresence } from "framer-motion";
import './navbar.css';



function Navbar() {
    const [sideBarOpen, setsideBarOpen] = useState(false);
    let sidebarBtnClick = (sidebarBtnOpen) => {
        setsideBarOpen(!sidebarBtnOpen)
    }
  return (
    <div className="NavContainer">

        <nav className="navbar">
            
            <div className="nav-logo" >
                <img src={logo}alt="ZSEC PROTOCOL Logo" ></img>
            </div>
            <div className="nav-list">
                <ul>
                    { menuItems.map((item)=>{
                        return(
                        <li key={item.title} className={item.cName}><a  href={item.url}>{item.title}</a></li>
                        )
                        })
                    }
                </ul>
            </div>
            <div className="sidebarbtn" onClick={()=>{sidebarBtnClick(sideBarOpen)}}>
                <img src={sidebarBtn}alt="Side bar"></img>
            </div>
            
        </nav>
        <div>
        <AnimatePresence>
        { 
            sideBarOpen &&
            
                <motion.div  key="sidebar" transition={{delay: 0, duration: 0.5}} exit={{ x: "100vw" }}>
                    <Sidebar
                        SidebarStates = {{sideBarOpen, setsideBarOpen}} 
                    />
                </motion.div>
            
        }
        </AnimatePresence> 
        
        </div>
    </div>
  );
}

export default Navbar;