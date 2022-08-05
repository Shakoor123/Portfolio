import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeTwoToneIcon from "@mui/icons-material/DarkModeTwoTone";
import "./Navbar.css";
import { useContext } from "react";
import { AuthContext } from "../../Context/Context";
const Navbar = () => {
  const { dark, setDark } = useContext(AuthContext);

  const changeDark = () => {
    if (dark) {
      setDark(false);
    } else {
      setDark(true);
    }
  };
  return (
    <div className="navbar">
      <div className="container">
        <div className="left">
          <h1 className="logo">
            Abdul <span className="lastName">shakoor</span>
          </h1>
        </div>
        <div className="right">
          <div className="nightMode">
            <div className="darkOuter">
              {dark ? (
                <LightModeOutlinedIcon className="moon" onClick={changeDark} />
              ) : (
                <DarkModeTwoToneIcon className="moon" onClick={changeDark} />
              )}
            </div>
          </div>
          <div className="buttons">
            <a href="#" className="button">
              About
            </a>
            <a href="#projects" className="button">
              Projects
            </a>
            <a href="#contact" className="button">
              Contact
            </a>
            <a
              href="https://drive.google.com/file/d/1kqXP2fGav5HDApcjViLby45PWb7mpmVu/view?usp=sharing"
              className="resume"
            >
              Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
