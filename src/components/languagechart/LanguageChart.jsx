import React from "react";
import "./LanguageChart.css";

const LanguageChart = ({ data }) => {
  return (
    <div className="language-chart-wrapper">
      {data.map(({ language, percentage, color }) => (
        <div className="language-list" key={language}>
          <div
            className="language-circles"
            style={{
              backgroundColor: color,
            }}
          ></div>
          <span className="language-name">{language}</span>
          <div
            className="language-bar"
            style={{
              width: `${percentage}%`,
              backgroundColor: color,
            }}
          ></div>
          <span className="language-percent">{percentage.toFixed(1)}%</span>
        </div>
      ))}
    </div>
  );
};

export default LanguageChart;
