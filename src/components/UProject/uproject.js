 import {React, useRef} from "react";
import "./uproject.css";

const Uproject = () => {

    let imageContainerRef = useRef(null)
    let imageContainerRef2 = useRef(null)
    const prev = () => imageContainerRef.current.scrollLeft -= 250
    const next = () => imageContainerRef.current.scrollLeft += 250
    const prev2 = () => imageContainerRef2.current.scrollLeft -= 250
    const next2 = () => imageContainerRef2.current.scrollLeft += 250

  return (
    <div id="uproject">
      <div class="container01">
        <div class="section01">
          <div class="text1">
            <div>Android Studio | Java | Firebase</div>
          </div>
          <div class="text2">
            <div>University Project</div>
          </div>
          <div class="text3">
            <div>
              Jewellery online selling app for jewellery shop.This app was
              primarily tailred for the utilization of app users and staff. App
              users can buy jewellery via online, add to cart, view trending
              products and provide feedback. also drivers can use google map,
              and all about the cash on delivry related services{" "}
            </div>
          </div>
          <div class="body1">
            <div class="slider-wrapper">
              <i class="fa-solid fa-circle-chevron-left" id="backbtn" onClick={prev}></i>
              <div class="image-list" ref={imageContainerRef}>
                <img class="image-item" src="/images/j1.jpg" alt="j1"></img>
                <img class="image-item" src="/images/j2.jpeg" alt="j2"></img>
                <img class="image-item" src="/images/j3.jpeg" alt="j3"></img>
                <img class="image-item" src="/images/j4.jpeg" alt="j4"></img>
                <img class="image-item" src="/images/j5.jpeg" alt="j5"></img>
                <img class="image-item" src="/images/j7.jpg" alt="j6"></img>
                <img class="image-item" src="/images/j9.jpg" alt="j9"></img>
                <img class="image-item" src="/images/j6.jpeg" alt="j6"></img>
                <img class="image-item" src="/images/j8.jpeg" alt="j8"></img>
                <img class="image-item" src="/images/j10.jpeg" alt="j10"></img>
                <img class="image-item" src="/images/j11.jpeg" alt="j11"></img>
              </div>
              <i class="fa-solid fa-circle-chevron-right" id="nextbtn" onClick={next}></i>
            </div>
         
          </div>

          
        </div>


        <div class="section02">
          <div class="text1">
            <div>Figma Tool</div>
          </div>
          <div class="text2">
            <div>University Project</div>
          </div>
          <div class="text3">
            <div>
              707 Group Ink is one of the popular online ticket booking platfrom in world wild. But, that web application has lot of usability issues in the user interface. So, we designed new user interface to improve user inttraction and user experience of their interface. we completed that as group project. I design user interface for all about cruises pages, sign up page, loging page. We used figma tool to successfully complete the project.
            </div>
          </div>
          <div class="body2">
            <div class="slider-wrapper2">
              <i class="fa-solid fa-circle-chevron-left" id="backbtn" onClick={prev2}></i>
              <div class="image-list2" ref={imageContainerRef2}>
                <img class="image-item2" src="/images/f1.jpg" alt="j1"></img>
                <img class="image-item2" src="/images/f2.jpg" alt="j1"></img>
                <img class="image-item2" src="/images/f3.jpg" alt="j1"></img>
                <img class="image-item2" src="/images/f4.jpg" alt="j1"></img>
                <img class="image-item2" src="/images/f5.jpg" alt="j1"></img>
                <img class="image-item2" src="/images/f6.jpg" alt="j1"></img>
                <img class="image-item2" src="/images/f7.jpg" alt="j1"></img>
                <img class="image-item2" src="/images/f8.png" alt="j1"></img>
                <img class="image-item2" src="/images/f9.jpg" alt="j1"></img>
                <img class="image-item2" src="/images/f1.jpg" alt="j1"></img>
                <img class="image-item2" src="/images/f1.jpg" alt="j1"></img>
              </div>
              <i class="fa-solid fa-circle-chevron-right" id="nextbtn" onClick={next2}></i>
            </div>
         
          </div> 
        </div>

        <div class="section03">
          <div class="text1">
            <div>MERN Stack</div>
          </div>
          <div class="text2">
            <div>Internship Project</div>
          </div>
          <div class="text3">
            <div>
              This is the Racoon AI project, I have being devloped during my internship periode.I led the development this web application using 
              the MERN stack, incorporating the Material UI library. I was responsible for the majority of the frontend 
              development within the project.
 
            </div>
          </div>
          <div class="body2">
            <div class="slider-wrapper2">
              <i class="fa-solid fa-circle-chevron-left" id="backbtn" onClick={prev2}></i>
              <div class="image-list2" ref={imageContainerRef2}>
                <img class="image-item2" src="/images/r1.png" alt="j1"></img>
                <img class="image-item2" src="/images/r2.png" alt="j1"></img>
                <img class="image-item2" src="/images/r3.png" alt="j1"></img>
                <img class="image-item2" src="/images/r7.png" alt="j1"></img>
                <img class="image-item2" src="/images/r4.png" alt="j1"></img>
                <img class="image-item2" src="/images/r5.png" alt="j1"></img>
                <img class="image-item2" src="/images/r6.png" alt="j1"></img>
                
              </div>
              <i class="fa-solid fa-circle-chevron-right" id="nextbtn" onClick={next2}></i>
            </div>
         
          </div> 
        </div>
      </div>
     
    </div>
  );
};

export default Uproject;
 

/* import React, { useState } from 'react';
import "./uproject.css"; // Assume you have CSS for styling

const ImageSlider = () => {
  // State to keep track of the current image index
  const [currentIndex, setCurrentIndex] = useState(0);

  // List of images
  const images = [
    '/images/j1.jpg',
    '/images/j2.jpeg',
    '/images/j3.jpeg',
    '/images/j4.jpeg',
    '/images/j5.jpeg',
    '/images/j7.jpg',
    '/images/j9.jpg',
    '/images/j6.jpeg',
    '/images/j8.jpeg',
    '/images/j10.jpeg',
    '/images/j11.jpeg'
  ];

  // Function to handle the next button click
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Function to handle the back button click
  const handleBack = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="slider-wrapper">
      <i className="fa-solid fa-circle-chevron-left" id="backbtn" onClick={handleBack}></i>
      <div className="image-list">
        <img className="image-item" src={images[currentIndex]} alt="slider" />
      </div>
      <i className="fa-solid fa-circle-chevron-right" id="nextbtn" onClick={handleNext}></i>
    </div>
  );
};

export default ImageSlider; */
