import React from "react";
import "./intro.css";
//import ProfileImg from "../../images/profile3.png";
//import ProfileImg2 from "../../images/proba.png";
///import BagImg from "../../images/bag.png";
//import { Link } from "react-scroll";
import Backvideo from "../../images/backvideo.mp4"

const Intro = () => {
  return (
    <section id="intro">
      {/*   <video autoPlay loop className="back-video" muted playsInline>
        <source src="/images/backvideo.mp4" type="video/mp4"/>
      </video>  */}

          <video className="video" src={Backvideo} autoPlay loop muted></video>

      <div className="container">

        
  
       <div className="intro">
        
          <div className="introContent">
          
            <span className="hello">Hello, It's Me</span>
            <span className="introText">
              <span className="introname">Banuka Ishara</span>
              <br />
              Software Developer
            </span>
            <p className="intropara">
              I am a dedicated web developer with extensive experience.
              <br />
              expertise is to create and website design, Frontend design and
              many more ..
            </p>

            <button className="btn">
              <div className="btnImg">
                <i class="fa-solid fa-briefcase"></i>
              </div>
              Hire me
            </button>

            {/* <img className="bg" src={ProfileImg} alt="Profile" /> */}
           {/* <img className="bg1" src={ProfileImg2} alt="Profile" />  */}
          </div>
          <div className="introimg"></div>
        </div> 

        
      </div>
    </section>
  );
};

export default Intro;
