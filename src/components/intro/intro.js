import React, { useState, useEffect } from "react";
import "./intro.css";
import Preloader from "../preloader/Preloader";
import Backvideo from "../../images/backvideo.mp4";

const Intro = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      setLoading(false);
    };
    window.addEventListener("load", handleLoad);
    return () => {
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  return (
    <div>
      <div>{loading ? <Preloader /> : <p></p>}</div>

      <section id="intro">
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
                I am a dedicated Software developer with extensive experience.
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
            </div>
            <div className="introimg"></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Intro;
