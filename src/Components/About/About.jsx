import React from "react";
import "./About.css";
import profilephoto from "../../assets/profilephoto.png";

const About = () => {
  return (
    <div id="about" className="about">
      <div className="about-section">
        <div className="about-left">
          <img src={profilephoto} alt="Profile" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              I am a passionate full-stack developer with a love for building
              scalable, efficient, and innovative web applications.
            </p>
            <p>
              With a strong foundation in front-end and back-end technologies, I
              strive to create seamless user experiences and solve real-world
              problems through code.
            </p>
          </div>
          <div className="about-skills">
            <div className="about-skill">
              <p>HTML & CSS</p>
              <hr style={{ width: "80%" }} />
            </div>
            <div className="about-skill">
              <p>React.js</p>
              <hr style={{ width: "70%" }} />
            </div>
            <div className="about-skill">
              <p>JavaScript</p>
              <hr style={{ width: "75%" }} />
            </div>
            <div className="about-skill">
              <p>Node.js</p>
              <hr style={{ width: "75%" }} />
            </div>
            <div className="about-skill">
              <p>Express.js</p>
              <hr style={{ width: "75%" }} />
            </div>
            <div className="about-skill">
              <p>GitHub</p>
              <hr style={{ width: "60%" }} />
            </div>
            <div className="about-skill">
              <p>Firebase</p>
              <hr style={{ width: "70%" }} />
            </div>
            <div className="about-skill">
              <p>SQL</p>
              <hr style={{ width: "80%" }} />
            </div>
            <div className="about-skill">
              <p>MongoDB</p>
              <hr style={{ width: "60%" }} />
            </div>
          </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
          <h1>1+</h1>
          <p>YEARS OF EXPERIENCE</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>5+</h1>
          <p>PROJECTS COMPLETED</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>3+</h1>
          <p>HAPPY CLIENTS</p>
        </div>
      </div>
    </div>
  );
};

export default About;
