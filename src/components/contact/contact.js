import React from 'react'
import "./contact.css";

const Contact = () => {

    const handleClick1 = () => {
        alert("Succesfully Downloaded the CV!")
    }
    
  return (
    <div id="contact">
        <div className="container">
            <div className="row">
                <div className="contact-left">
                    <h1 className="sub-title">Contact Me</h1>
                    <p><i class="fa-solid fa-envelope"></i>banukaiw@gmail.com</p>
                    <p><i class="fa-solid fa-phone"></i>(+94) 789642771 / (+94) 711044256</p>
                    <p><i class="fa-solid fa-location-dot"></i>Dambakolle Watta, Palatuwa, Matara</p>
                  <div className="social-icon">
                        {/* <a href="#"><i class="fa-brands fa-facebook"></i></a>
                        <a href="#"><i class="fa-brands fa-twitter-square"></i></a>
                        <a href="#"><i class="fa-brands fa-instagram"></i></a>
                        <a href="#"><i class="fa-brands fa-linkedin"></i></a> */}
                    </div> 
                    <a onClick={handleClick1} id="cvbtn2" href="images/Banuka Ishara CV.pdf" download className="btn2"><i class="fa-solid fa-download"></i> Download CV</a>
                </div>
                <div className="contact-right">
                    <form>
                        <input type="text" name="Name" placeholder="Your name hear.." required></input>
                        <input type="email" name="Email" placeholder="Enter your email hear.." required></input>
                        <textarea name="Message" rows="6" placeholder="Enter Your.." ></textarea>
                        <button type="submit" className="btn2" ><i class="fa-solid fa-cloud-arrow-up"></i> Submit</button>
                    </form>
                </div>
            </div>
        </div>
        <div className="copywrite">
            <p>Copywrite <i class="fa-regular fa-copyright"></i> 2024 | all rights reserved | design by <span className="Banuka">Banuka</span> Made with <i class="fa-solid fa-heart"></i></p>
            <p><a href="#1">Privacy Policy | Terms & Conditions</a></p>
        </div>
    </div>
  )
}

export default Contact

//https://script.google.com/macros/s/AKfycbzvlWvr9P3vNQd31GXgIiRuBEeSwzw5SpXcyCXyXH5d4kOdFFkYUSZGQ3GwffcPgQg/exec