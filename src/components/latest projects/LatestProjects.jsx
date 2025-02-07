import React from "react";
import "./LatestProjects.css";

const LatestProjects = ({ projectTitle, projectUrl, imgUrl }) => {
  return (
    <section className="latest-project">
      <h3 className="latest-project-title">
        <a href={projectUrl} target="_blank">
          {projectTitle}
          <div className="latest-project-img">
            <figure>
              <img src={imgUrl} alt={imgUrl} />
            </figure>
          </div>
        </a>
      </h3>
    </section>
  );
};

export default LatestProjects;
