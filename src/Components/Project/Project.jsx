import React, { useState } from "react";
import "./Project.css";
import Portfolio_data from "../../assets/Portfolio_data";
import { FaArrowRight } from "react-icons/fa6";

const Project = () => {
  const [itemsToShow, setItemsToShow] = useState(3);
  const handleClick = (link) => {
    window.open(link, "_blank");
  };
  const showMore = () => {
    setItemsToShow((prevItemsToShow) => prevItemsToShow + 3);
  };
  return (
    <div className="portfolio">
      <div className="portfolio-container">
        {Portfolio_data.slice(0, itemsToShow).map((work, index) => (
          <div key={index} onClick={() => handleClick(work.w_link)}>
            <img key={index} src={work.w_img} alt="work.w_name" />
          </div>
        ))}
      </div>
      {itemsToShow < Portfolio_data.length && (
        <div className="protfolio-showmore" onClick={showMore}>
          <p>Show More</p>
          <p>
            <FaArrowRight />
          </p>
        </div>
      )}
    </div>
  );
};

export default Project;
