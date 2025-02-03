// import React, { useEffect, useState } from "react";
import HeroText from "../components/maincontent/HeroText";
import profilepicture from "../assets/images/profile-picture.jpg";
import "./OmMig.css";
import LatestProjects from "../components/latest projects/LatestProjects";

const OmMig = ({ projectUrl, projectTitle }) => {
  return (
    <div className="hero">
      <HeroText />
      <img src={profilepicture} className="profile-img" alt="" />

      <div className="latest-wrapper">
        <h2>Mina senaste projekt</h2>
        <div className="latest-projects">
          <LatestProjects
            projectTitle="Movie Website"
            projectUrl="https://github.com/Jonas-Eklof/KYH/tree/main/javascript-2/movie-website"
          />
          <LatestProjects
            projectTitle="Todo App"
            projectUrl="https://github.com/Jonas-Eklof/KYH/tree/main/javascript-2/todo-app"
          />
          <LatestProjects
            projectTitle="Gallery App"
            projectUrl="https://github.com/Jonas-Eklof/KYH/tree/main/javascript-2/gallery-app"
          />
        </div>
      </div>
    </div>
  );
};

export default OmMig;
