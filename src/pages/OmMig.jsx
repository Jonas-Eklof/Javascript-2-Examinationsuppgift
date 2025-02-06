// import React, { useEffect, useState } from "react";
import HeroText from "../components/hero-section/HeroText";
import profilepicture from "../assets/images/profile-picture.jpg";
import movieWebsite from "../assets/images/movie-website.png";
import todo from "../assets/images/todo.png";
import photoGallery from "../assets/images/photo-gallery.png";
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
            imgUrl={movieWebsite}
          />
          <LatestProjects
            projectTitle="Todo App"
            projectUrl="https://github.com/Jonas-Eklof/KYH/tree/main/javascript-2/todo-app"
            imgUrl={todo}
          />
          <LatestProjects
            projectTitle="Gallery App"
            projectUrl="https://github.com/Jonas-Eklof/KYH/tree/main/javascript-2/gallery-app"
            imgUrl={photoGallery}
          />
        </div>
      </div>
    </div>
  );
};

export default OmMig;
