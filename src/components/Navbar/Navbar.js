import React,  { useState }  from 'react';
import logo from '../../logo.svg';
import sidebarBtn from './sidebarbtn.svg';
import menuItems from './MenuItems';
import Sidebar from './Sidebar';
import './navbar.css';



function App() {
    const [sideBarOpen, setsideBarOpen] = useState(false);
    let sidebarBtnClick = (sidebarBtnOpen) => {
        setsideBarOpen(!sidebarBtnOpen)
    }
  return (
    <div>
        

        <nav className="navbar">
            <div className="nav-logo" >
                <img src={logo}alt="ZSEC PROTOCOL Logo" ></img>
            </div>
            <div className="nav-list">
                <ul>
                    { menuItems.map((item)=>{
                        return(
                        <li className={item.cName}><a  href={item.url}>{item.title}</a></li>
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
        { sideBarOpen ? <Sidebar /> : ""} 
        {/* <Sidebar />   */}
        
        </div>
    </div>
  );
}

export default App;