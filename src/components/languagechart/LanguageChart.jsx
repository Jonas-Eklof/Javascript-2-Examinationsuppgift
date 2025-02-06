import React from "react";
import "./LanguageChart.css";

const LanguageChart = ({ data }) => {
  return (
    <div className="language-chart-wrapper">
      {/* Loopar genom datan som finns i SideBar.jsx och skapar en rad för varje språk */}
      {data.map(({ language, percentage, color }) => (
        <div className="language-list" key={language}>
          <div
            className="language-circles"
            style={{
              backgroundColor: color,
            }}
          ></div>
          <span className="language-name">{language}</span>
          {/* Stapeldiagram som visar användningsprocenten */}
          <div
            className="language-bar"
            style={{
              width: `${percentage}%`,
              backgroundColor: color,
            }}
          ></div>
          {/* Visar procentandelen som text */}
          <span className="language-percent">{percentage.toFixed(1)}%</span>
        </div>
      ))}
    </div>
  );
};

export default LanguageChart;
