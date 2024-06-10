//import React from "react";
import "./test.css";
import { Link } from "react-scroll";
import contactImg from "../../images/contact.jpg";
import React, { useState } from 'react';

const Test = () => {

   const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }; 
  
  return (
    
    
      <nav>
        <ul className="sidebar">
          <li><a href="#1">Banuka Ishara</a></li>
          <li><a href="#2">Home</a></li>
          <li><a href="#3">Client</a></li>
          <li><a href="#4">Portfolio</a></li>
          <li><a href="#5">About</a></li>
          <li><a href="#6">{/* <i id ="bar" className={this.state.clicked ? "fas fa-time" : "fas fa-bars"} class="fa-solid fa-xmark"></i> */}</a></li>
        </ul>
        <ul  className={isMenuOpen ? 'nav-menu active' : 'nav-menu'} >
          <li><a href="#5">Banuka Ishara</a></li>
          <li><a href="#6">Home</a></li>
          <li><a href="#7">Client</a></li>
          <li><a href="#5">Portfolio</a></li>
          <li><a href="#8">About</a></li>
          <li><a href="#3"><i class="fa-solid fa-bars"></i></a></li>
        </ul>

       <div className="menu-icon" onClick={toggleMenu}>
          <i className={isMenuOpen ? 'fas fa-times' : 'fas fa-bars'}></i>
        </div> 

        
        
      </nav>
     

     
   
  );
};

export default Test;
