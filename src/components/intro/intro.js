import React from "react";
import "./intro.css";
import ProfileImg from "../../images/profile3.png";
import BagImg from "../../images/bag.png";
import { Link } from "react-scroll";

const Intro = () => {
  return (
    <section id="intro">
      <div className="container">
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
            expertise is to create and website design, Frontend design and many
            more ..
          </p>
          <Link>
            <button className="btn">
              <img src={BagImg} alt="hire me" className="btnImg" />
              Hire me
            </button>
          </Link>
        </div>
        <img src={ProfileImg} alt="Profile" className="bg" />
      </div>
    </section>
  );
};

export default Intro;
