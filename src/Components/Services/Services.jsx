import React from "react";
import "./Services.css";
import Services_Data from "../../assets/Services_data";
import { FaArrowRightLong } from "react-icons/fa6";

const Services = () => {
  return (
    <div className="services">
      <div className="services-container">
        {Services_Data.map((service, index) => (
          <div key={index} className="services-format">
            <h3>{service.s_no}</h3>
            <h2>{service.s_name}</h2>
            <p>{service.s_desc}</p>
            <div className="services-readmore">
                <p>Read More</p>
                <FaArrowRightLong />
                
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
