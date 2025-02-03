// import React, { useEffect, useState } from "react";
import HeroText from "../components/maincontent/HeroText";
import profilepicture from "../assets/images/profile-picture.jpg";
import "./OmMig.css";
import LatestProjects from "../components/latest projects/LatestProjects";

const OmMig = () => {
  return (
    <div className="hero">
      <HeroText />
      <img src={profilepicture} className="profile-img" alt="" />

      <div className="latest-wrapper">
        <h2>Mina senaste projekt</h2>
        <div className="latest-projects">
          <LatestProjects />
          <LatestProjects />
          <LatestProjects />
        </div>
      </div>
    </div>
  );
};

export default OmMig;
