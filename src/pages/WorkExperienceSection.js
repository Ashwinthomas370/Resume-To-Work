import React from "react";

import { Link } from "react-router-dom";
import "../css/work-experience-section.css";
const WorkExperienceSection = () => {
  return (
    <div className="work-experience-section">
      <div className="work-headings">
        <h3>Next Section</h3>
        <h2>Work Experience</h2>
      </div>

      <div className="work-list">
        <ul>
          <li>Work section is your important Section on your entire Resume</li>
          <li> Lorem ipsum dolor sit amet consectetur adipisicing elit. </li>
          <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit. </li>
        </ul>
      </div>
      <div className="work"></div>
    </div>
  );
};

export default WorkExperienceSection;
