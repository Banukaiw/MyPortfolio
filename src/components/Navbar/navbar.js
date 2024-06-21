import React, {useState} from "react";
import "./navbar.css";
//import { Link } from "react-scroll";
//import contactImg from "../../images/contact.jpg";

const Navbar = () => {

  const [showMenu, setShowMenu] = useState(false);
  return (
    <div className="navbody">
      <div className="navbar">
        <div className="logo">Banuka Ishara</div>
        <ul className="desktopMenu">
          <li>
            <a href="#intro" activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">Home</a>
          </li>
          <li>
            <a href="#about" activeClass='active' to='about' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">Clients</a>
          </li>
          <li>
            <a href="#services" className="desktopMenuListItem">Services</a>
          </li>
          <li>
            <a href="#portfolio" className="desktopMenuListItem">Portfolio</a>
          </li>
        
        </ul>

        <button className="contactmebtn">
          <i href="#contact" class="fa-solid fa-briefcase"></i>Contact Me
        </button>



        <div className="icon3" onClick={()=>setShowMenu(!showMenu)}>
           
           <i  class="fa-solid fa-bars" onClick={()=>setShowMenu(!showMenu)}></i>
         </div>

        
  <ul className="navMenu" style={{display: showMenu? 'flex':'none'}}>
          <li>
            <a href="#intro"  className="ListItem" onClick={()=>setShowMenu(false)}> Home</a>
          </li>
          <li>
            <a href="#about"  className="ListItem" onClick={()=>setShowMenu(false)}>Clients</a>
          </li>
          <li>
            <a href="#services" className="ListItem" onClick={()=>setShowMenu(false)}>services2</a>
          </li>
          <li>
            <a href="#portfolio" className="ListItem" onClick={()=>setShowMenu(false)}>Portfolio</a>
          </li>
        
        </ul>    
      </div>
    </div>
  );
};

export default Navbar;
