import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import * as FaIcons from "react-icons/fa";
import * as IoIcons from "react-icons/io";
import { IconContext } from 'react-icons';
import { SidebarData } from './SidebarData';
import './Navbar.css';

function Navbar() {
    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);

    return (
        <>
            <IconContext.Provider value={{color: '#fff'}}>
                <div className='navbar-container'>
                    <div className="navbar">
                        <Link to="#" className='menu-bars'>
                            <FaIcons.FaBars onClick={showSidebar} />
                        </Link>
                    </div>
                    <h1 className='title'><Link to="/">🐱 Cyanimals 🐶</Link></h1>
                </div>
                <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                    <ul className='nav-menu-items' onClick={showSidebar} >
                        <li className='navbar-toggle'>
                            <Link to='#' className='menu-bars'>
                                <IoIcons.IoMdClose />
                            </Link>
                        </li>
                        {SidebarData.map((item, index) => {
                            return (
                                <li key={index} className={item.cName}>
                                    <Link to={item.path}>
                                        {item.icon}&nbsp;
                                        <span className='menuTitle'>{item.title}</span>
                                    </Link>
                                </li>
                            )
                        })}
                    </ul>
                </nav>
            </IconContext.Provider>
        </>
    );
}

export default Navbar
