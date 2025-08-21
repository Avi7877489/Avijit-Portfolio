import React, { useRef } from "react";
import "./Contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { FiPhoneCall } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import { SiBlogger } from "react-icons/si";
import { Link } from "react-router-dom";

const Contact = () => {
  const formRef = useRef(null);
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "d1d32033-4f5b-48fb-8b46-a019a7bdb524");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      alert(res.message);
      formRef.current.reset();
    }
  };
  return (
    <div id="contact" className="contact">
      <div className="contact-container">
        <div className="contact-left">
          <h1>Let's talk</h1>
          <p>
            I'm currently available to take on new projects, so feel free to
            send me a message about anything that you want me to work on. You
            can contact anytime.
          </p>
          <div className="contact-details">
            <div className="contact-detail">
              <p>
              <SiBlogger />
              </p>
              <Link
              className="web"
                to="https://avithecoder1.blogspot.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Website
              </Link>
            </div>
            <div className="contact-detail">
              <p>
                <MdOutlineEmail />
              </p>{" "}
              <p>avi7877489@gmail.com</p>
            </div>
            <div className="contact-detail">
              <p>
                <FiPhoneCall />
              </p>{" "}
              <p>+91-7063022111</p>
            </div>
            <div className="contact-detail">
              <p>
                <IoLocationOutline />
              </p>{" "}
              <p>Kolkata,India</p>
            </div>
          </div>
        </div>
        <form ref={formRef} onSubmit={onSubmit} className="contact-right">
          <label htmlFor="">Your Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            name="name"
            required
          />
          <label htmlFor="">Your Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            name="email"
            required
          />
          <label htmlFor="">Write your message here</label>
          <textarea
            name="message"
            rows="8"
            placeholder="Enter your message"
            required
          ></textarea>
          <button type="submit" className="contact-submit">
            Submit now
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
