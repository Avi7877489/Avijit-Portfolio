import React, { useState } from "react";
import "./Project.css";
import Portfolio_data from "../../assets/Portfolio_data";
import { FaArrowRight, FaGithub, FaEye } from "react-icons/fa6";

const Project = () => {
  const [itemsToShow, setItemsToShow] = useState(3);

  const openInNewTab = (link) => {
    if (link) window.open(link, "_blank");
  };

  const showMore = () => {
    setItemsToShow((prev) => prev + 3);
  };

  return (
    <div id="project" className="portfolio">
      <div className="portfolio-container">
        {Portfolio_data.slice(0, itemsToShow).map((work, index) => (
          <div key={index} className="portfolio-item">
            <img src={work.w_img} alt={work.w_name} />
            <div className="portfolio-icons">
              <FaEye onClick={() => openInNewTab(work.w_link)} title="Preview" />
              <FaGithub onClick={() => openInNewTab(work.repo_link)} title="GitHub Repo" />
            </div>
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
