import React, { useState } from "react";
import "./Skills.css";

const skillsData = [
  { name: "JavaScript", description: "Erfarenhet av ES6+, React och Node.js" },
  {
    name: "CSS",
    description: "Responsiv design, Flexbox, Grid, SASS, Tailwind",
  },
  { name: "React", description: "Komponentbaserad utveckling, hooks, Redux" },
];

const Skills = () => {
  const [selectedSkill, setSelectedSkill] = useState(null);

  return (
    <div className="skills-container">
      <h2>Färdigheter</h2>
      <ul className="skills-list">
        {skillsData.map((skill, index) => (
          <li key={index} onClick={() => setSelectedSkill(skill)}>
            {skill.name}
          </li>
        ))}
      </ul>
      {selectedSkill && (
        <div className="skills-details">
          <h3>{selectedSkill.name}</h3>
          <p>{selectedSkill.description}</p>
        </div>
      )}
    </div>
  );
};

export default Skills;
