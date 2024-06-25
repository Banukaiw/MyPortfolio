import React, { useState } from "react";
import "./about.css";
import Profile4 from "../../images/Banuka Ishara.jpg";

const About = () => {
  // State to keep track of active tab
  const [activeTab, setActiveTab] = useState("skills");

  // Function to handle tab click
  const openTab = (tabName) => {
    setActiveTab(tabName);
  };


  /* useEffect(() => {
    const canvas = document.querySelector('canvas');
    const ctx = canvas.getContext('2d');

    // Your canvas drawing code here
    ctx.fillStyle = 'rgb(255, 0, 0)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Clean up event listeners if necessary
    return () => {
      // Clean up code if needed
    };
  }, []);
 */

  return (
    <section id="about">
      <div className="container">
        <div className="row">
          <div className="about-col-1">
            <img className="Profile4" src={Profile4} alt="profile" />
          </div>
          <div className="about-col-2">

         
            <h1 className="subtitle">About Me</h1>
            <p className="aboutme">
              I am a dedicated QA engineer with a proven track record of
              ensuring software quality and reliability. having previously
              contributed to the success of SLT head office and currently
              leveraging my skills by covering relevant courses, I bring a deep
              understanding of testing methodologies, both manual and
              automation. My education from SLII has equipped me with a solid
              foundation in software engineering principles.
            </p>

            <div className="tab-titles">
              <div
                className={`tab-links ${activeTab === "skills" ? "active-link" : ""}`}
                onClick={() => openTab("skills")}
              >
                Skills
              </div>
              <div
                className={`tab-links ${activeTab === "experience" ? "active-link" : ""}`}
                onClick={() => openTab("experience")}
              >
                Experience
              </div>
              <div
                className={`tab-links ${activeTab === "education" ? "active-link" : ""}`}
                onClick={() => openTab("education")}
              >
                Education
              </div>
              <div
                className={`tab-links ${activeTab === "Sskills" ? "active-link" : ""}`}
                onClick={() => openTab("Sskills")}
              >
                Soft Skills
              </div>
              <div
                className={`tab-links ${activeTab === "course" ? "active-link" : ""}`}
                onClick={() => openTab("course")}
              >
                Certificate Courses
              </div>
            </div>

            {/* Tab content based on activeTab */}
            <div className={`tab-content ${activeTab === "skills" ? "active-tab" : ""}`} id="skills">
              <ul>
                <li>
                  <span>UI/UX</span>
                  <br />
                  Design Web/App interfaces
                </li>
                <li>
                  <span>Web Development</span>
                  <br />
                  Web app development
                </li>
                <li>
                  <span>App development</span>
                  <br />
                  Building Android/iOS apps
                </li>
              </ul>
            </div>

            <div className={`tab-content ${activeTab === "experience" ? "active-tab" : ""}`} id="experience">
              <ul>
                <li>
                  <span>2020 - current</span>
                  <br /> UI/UX Design in academic projects{" "}
                </li>
                <li>
                  <span>Jan - June (2023)</span>
                  <br />
                  Internship at SLT head office
                </li>
              </ul>
            </div>

            <div className={`tab-content ${activeTab === "education" ? "active-tab" : ""}`} id="education">
              <ul>
                <li>
                  <span>
                    BSc (Hons) in Information Technology Specialization in
                    Information Technology (2020 - Present)
                  </span>
                  <br />
                  SLIIT
                </li>
                <li>
                  <span>
                    Higher Diploma in Information Technology (2020 - 2022)
                  </span>
                  <br />
                  SLIIT
                </li>

                <li>
                  <span>
                    Certificate Course in English Language Level II (2019)
                  </span>
                  <br />
                  British Council
                </li>
              </ul>
            </div>

            <div className={`tab-content ${activeTab === "Sskills" ? "active-tab" : ""}`} id="Sskills">
              <ul class="Sskills">
                <li>
                  Self-Learn
                </li>
                <li>
                  Team Work
                </li>
                <li>
                  HarD work
                </li>
                <li>
                  Creative
                </li>
                <li>
                  Open Minded
                </li>
              </ul>
            </div>

            <div className={`tab-content ${activeTab === "course" ? "active-tab" : ""}`} id="course">
              <ul>
                <li>
                  <span>
                  Online Certificate Course in React Basics - Mobile 
                  and Web Development
                  </span>
                  <br />
                  Coursera
                </li>
                <li>
                  <span>
                  Online Certificate Course Selenium WebDriver for 
                  Beginners using JAVA.
                  </span>
                  <br />
                  Udemy
                </li>

                <li>
                  <span>
                  Online Certificate Course in Selenium Basics
                  </span>
                  <br />
                  Great Learning
                </li>
              </ul>
            </div>
          </div>

          <div className="about-col-3"></div>
        </div>
      </div>
    </section>
  );
};

export default About;
