import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import DarkModeTwoToneIcon from '@mui/icons-material/DarkModeTwoTone';
import "./Navbar.css";
import { useState } from "react";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false)
  const whiteCliked=()=>{
    setDarkMode(true)
  }
  const darkCliked=()=>{
    setDarkMode(false)
  }

  return (
    <div className="navbar">
      <div className="container">
        <div className="left">
          <h1 className="logo">Abdul <span className='lastName'>shakoor</span></h1>
        </div>
        <div className="right">
        <div className="nightMode">
         
          
          {darkMode ?<DarkModeTwoToneIcon onClick={darkCliked} />: <LightModeOutlinedIcon  onClick={whiteCliked}/> }
          </div>
          <div className="buttons">
          
            <button className="button">About</button>
            <button className="button">Projects</button>
            <button className="button">Contact</button>
            <button className="resume">Resume</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
