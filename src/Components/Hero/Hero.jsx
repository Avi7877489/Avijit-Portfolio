import React, { useRef, useEffect } from "react";
import "./Hero.css";
import profilephoto from "../../assets/profilephoto.png";
import resume from "../../assets/resume.pdf";
import { useNavigate } from "react-router-dom";
import Typed from "typed.js";

const Hero = () => {
  const navigate = useNavigate();
  const typedElement = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedElement.current, {
      strings: [
        "Web Developer!",
        "Full Stack Developer!",
        "MERN Stack Developer!",
      ],
      typeSpeed: 50,
    });

    return () => {
      typed.destroy();
    };
  }, []);
  const handleResumeDownload = () => {
    window.open(resume, "_blank");
    const link = document.createElement("a");
    link.href = resume;
    link.download = "Avijit_Ghosh_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleConnect = () => {
    navigate("./contact");
  };
  return (
    <div id="home" className="hero">
      <img src={profilephoto} alt="" />
      <h1>
        {" "}
        I'm Avijit Ghosh <br />
        <span ref={typedElement}></span>
      </h1>
      <p>
        I’m a passionate and dedicated Full Stack Developer based in India. I
        specialize in creating dynamic and beautiful web applications. With a
        strong background in both front-end and back-end technologies, I turn
        ideas into real-world solutions. Let's connect and bring your vision to
        life!
      </p>

      <div className="hero-action">
        <div className="hero-connect" onClick={handleConnect}>
          Connect with me
        </div>
        <div className="hero-resume" onClick={handleResumeDownload}>
          My Resume
        </div>
      </div>
    </div>
  );
};

export default Hero;
