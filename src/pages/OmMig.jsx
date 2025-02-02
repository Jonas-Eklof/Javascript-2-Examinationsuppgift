import React from "react";
import HeroText from "../components/maincontent/HeroText";
import profilepicture from "../assets/images/profile-picture.jpg";
import "./OmMig.css";

const OmMig = () => {
  return (
    <div className="hero">
      <HeroText />
      <img src={profilepicture} className="profile-img" alt="" />

      <div className="latest-wrapper">
        <section>Projekt 1</section>
        <section>Projekt 2</section>
        <section>Projekt 3</section>
      </div>
    </div>
  );
};

export default OmMig;
