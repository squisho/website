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
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/portfolio">Portfolio</Link>
                </li>
                <li>
                    <Link to="/resume">Resume</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
                <li className="right">
                    {props.theme === 'dark'
                        ? <button aria-label="dark mode" onClick={props.switchTheme}>
                            <DarkModeIcon />
                        </button>
                        : <button aria-label="Dark Mode" onClick={props.switchTheme}>
                            <LightModeIcon />
                        </button>
                    }
                </li>
            </ul>
            
        <Divider/>
        </div >
    );
};
export default Navbar;