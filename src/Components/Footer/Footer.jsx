import React from "react";
import "./Footer.css";
import { FaUserSecret, FaLinkedin, FaGithub, FaTwitter, FaInstagram } from "react-icons/fa";
import logo from '../../assets/logo.jpg'

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="footer-top-left">
          <img src={logo} alt="Footer_Logo" />
          <p>
            I am a full stack developer from, India with 2 years of experience
            
          </p>
        </div>
        <div className="footer-top-right">
          <div className="footer-email-input">
            <FaUserSecret />
            <input type="email" placeholder="Enter your email" />
          </div>
          <div className="footer-subscribe">Subscribe</div>
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <p className="footer-bottom-left">&copy; 2025 Avijit Ghosh. All rights reserved.</p>
        <div className="footer-bottom-right">
          <a href="https://www.linkedin.com/in/avijit-ghosh-208798204/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://github.com/Avi7877489" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href="https://twitter.com/your-profile" target="_blank" rel="noopener noreferrer">
            <FaTwitter />
          </a>
          <a href="https://www.instagram.com/your-profile" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
