import React from "react";
import "./About.css";

// Example icons/images for skills (replace with your own)
import htmlIcon from "../../assets/skills/htmlIcon.png";
import cssIcon from "../../assets/skills/cssIcon.png";
import reactIcon from "../../assets/skills/reactIcon.png";
import jsIcon from "../../assets/skills/jsIcon.png";
import nodeIcon from "../../assets/skills/nodeIcon.png";
import expressIcon from "../../assets/skills/expressIcon.png";
import githubIcon from "../../assets/skills/githubIcon.png";
import firebaseIcon from "../../assets/skills/firebaseIcon.png";
import sqlIcon from "../../assets/skills/sqlIcon.png";
import mongoIcon from "../../assets/skills/mongoIcon.png";

const About = () => {
  return (
    <div id="about" className="about">

      {/* ---------- SKILLS SECTION ---------- */}
      <div className="about-skills">
        <h2>Technical Skills</h2>
        <div className="skills-grid">
          <div className="skill-card">
            <img src={htmlIcon} alt="HTML" />
            <p>HTML</p>
          </div>
          <div className="skill-card">
            <img src={cssIcon} alt="CSS" />
            <p>CSS</p>
          </div>
          <div className="skill-card">
            <img src={reactIcon} alt="React.js" />
            <p>React.js</p>
          </div>
          <div className="skill-card">
            <img src={jsIcon} alt="JavaScript" />
            <p>JavaScript</p>
          </div>
          <div className="skill-card">
            <img src={nodeIcon} alt="Node.js" />
            <p>Node.js</p>
          </div>
          <div className="skill-card">
            <img src={expressIcon} alt="Express.js" />
            <p>Express.js</p>
          </div>
          <div className="skill-card">
            <img src={githubIcon} alt="GitHub" />
            <p>GitHub</p>
          </div>
          <div className="skill-card">
            <img src={firebaseIcon} alt="Firebase" />
            <p>Firebase</p>
          </div>
          <div className="skill-card">
            <img src={sqlIcon} alt="SQL" />
            <p>SQL</p>
          </div>
          <div className="skill-card">
            <img src={mongoIcon} alt="MongoDB" />
            <p>MongoDB</p>
          </div>
        </div>
      </div>

      
      
    </div>
  );
};

export default About;
