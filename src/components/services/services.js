import React from "react";
import "./services.css";
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


//import contactImg from "../../images/contact.jpg";

const Services = () => {
  return (
    <div id = "services">
        <div class = "container">
            
            <h1 class="sub-title">My Services</h1>
            <div class="services-list">
                <div>
                <i class="fa-solid fa-code"></i>
                 
                    <h2>Web Design</h2>
                    <p>Figma, Draw.IO, MockFlow, Adobe XD</p>
                    <a href = "#1">Learn more</a>
                </div>
                <div>
                <i class="fa-solid fa-crop"></i>
                    <h2>Web Developer</h2>
                   <p>C, C++, C#, Python, HTML, CSS, Java, 
                    JavaScript, PHP, MySQL, SQLite, Bootsrap, Mongo DB, MSSQL, React JS, Node JS</p> 
                    <a href = "#2">Learn more</a>
                </div>
                <div>
                <i class="fa-brands fa-app-store-ios"></i>
                    <h2>App Design</h2>
                    <p>Android studio - Java</p>
                    <a href = "#3">Learn more</a>
                </div>
            </div>

        
        </div>
    </div>
   
  );
};

export default Services;
