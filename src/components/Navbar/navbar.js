import React from "react";
import "./navbar.css";
import { Link } from "react-scroll";
import contactImg from '../../images/contact.png';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">Banuka Ishara</div>

      <img src="" alt="" />

      <div classname="desktopMenu"></div>
      <Link className="desktopMenuListItem">Home</Link>
      <Link className="desktopMenuListItem">Clients</Link>
      <Link className="desktopMenuListItem">About</Link>
      <Link className="desktopMenuListItem">Portfolio</Link>

      <button className="desktopMenuBtn">
        <img src={contactImg} alt="" className="desltopMenuImg" />
        <div className="contactmebtn">Contact Me</div>
      </button>
    </nav>
  );
};

export default Navbar;
