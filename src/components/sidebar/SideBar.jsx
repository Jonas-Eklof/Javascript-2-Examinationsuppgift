import React from "react";
import profilepicture from "../../assets/images/profile-picture.jpg";
import LanguageChart from "../../components/languagechart/LanguageChart";
import Skills from "../skills/Skills";
import "./Sidebar.css";

const SideBar = () => {
  const languages = [
    { language: "JavaScript", percentage: 55.8, color: "#f1e05a" },
    { language: "CSS", percentage: 24.7, color: "#563d7c" },
    { language: "HTML", percentage: 13.1, color: "#e34c26" },
    { language: "SCSS", percentage: 6.4, color: "#c6538c" },
  ];
  return (
    <aside className="sidebar-wrapper">
      <figure>
        <img src={profilepicture} alt="Profile Picture" />
      </figure>
      <LanguageChart data={languages} />
      <Skills />
    </aside>
  );
};

export default SideBar;
