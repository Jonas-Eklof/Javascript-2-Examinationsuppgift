import React from "react";
import "./LatestProjects.css";

const LatestProjects = ({ projectTitle, projectUrl }) => {
  return (
    <section className="latest-projekt">
      <h3 className="latest-project-title">
        <a href={projectUrl} target="_blank">
          {projectTitle}
        </a>
      </h3>
    </section>
  );
};

export default LatestProjects;
