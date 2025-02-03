import React from "react";
import profilepicture from "../assets/images/profile-picture.jpg";
import "./Projekt.css";

const Projekt = () => {
  return (
    <div className="projekt-wrapper">
      <div className="sidebar-wrapper">
        <img src={profilepicture} alt="Profile Picture" />
      </div>
      <div className="projekt-content"></div>
    </div>
  );
};

export default Projekt;
