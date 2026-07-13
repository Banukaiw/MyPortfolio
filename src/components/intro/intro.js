import React from "react";
import "./intro.css";
//import Navbar from "../Navbar/navbar";
/* import Preloader from "../preloader/Preloader"; */
// Video served as a static asset from the public folder to avoid webpack bundling issues

const Intro = () => {
  /* const [loading, setLoading] = useState(true); */

  /*  useEffect(() => {
     const handleLoad = () => {
       setLoading(false);
     };
     window.addEventListener("load", handleLoad);
     return () => {
       window.removeEventLsitener("load", handleLoad);
     };
   }, []); */

  return (
    <div>
      {/* <div>{loading ? <Preloader /> : <p></p>}</div> */}

      <section id="intro">
        <video className="video" src={process.env.PUBLIC_URL + "/backvideo.mp4"} autoPlay loop muted playsInline></video>

        {/* <Navbar/> */}

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
