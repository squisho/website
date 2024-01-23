import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import { Divider } from "@mui/material";

const Navbar = (props) => {

    return (
        <div className='navBar'>
            <ul>
                <li>
                    <Link className="button" to="/">Home</Link>
                </li>
                <li>
                    <Link className="button" to="/portfolio">Portfolio</Link>
                </li>
                <li>
                    <Link className="button" to="/resume">Resume</Link>
                </li>
                <li>
                    <Link className="button" to="/contact">Contact</Link>
                </li>
                <li className="right">
                    {props.theme === 'dark'
                        ? 
                            <DarkModeIcon style={{padding:12}} onClick={props.switchTheme} />
                        :
                            <LightModeIcon style={{padding:12}} onClick={props.switchTheme} />
                    }
                </li>
            </ul>
            
        <Divider/>
        </div >
    );
};
export default Navbar;