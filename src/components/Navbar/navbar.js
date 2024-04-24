import React from "react";
import "./navbar.css";
import { Link } from "react-scroll";
import contactImg from "../../images/contact.jpg";

const Navbar = () => {
  return (
    <div className="navbar" >
      <div className="logo">Banuka Ishara</div>
      <ul className="desktopMenu">
        <li><a className="desktopMenuListItem">Home</a></li>
        <li><a className="desktopMenuListItem">Clients</a></li>
        <li><a className="desktopMenuListItem">About</a></li>
        <li><a className="desktopMenuListItem">Portfolio</a></li>
      </ul>

      <button className="desktopMenuBtn">
        <img src={contactImg} alt="" className="desltopMenuImg" />
        <div className="contactmebtn">Contact Me</div>
      </button>
    </div>
  );
};

export default Navbar;
