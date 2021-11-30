import React, { useState } from "react";

const SkillsForm = ({ formData, setFormData }) => {
  const [inputList, setInputList] = useState([{ firstName: "", lastName: "" }]);

  return (
    <div className="skill-form">
      <h1>Skills</h1>
      <p>
        Focus on what’s most important. Aim for up to 8 skills. Use the rating
        scale to grab attention
      </p>
      <div className="skill-input">
        <input
          type="text"
          id="text"
          name="skill1"
          placeholder="e.g. Html"
          value={formData.skill1}
          onChange={(event) =>
            setFormData({ ...formData, skill1: event.target.value })
          }
        />
        <br />
        <input
          type="text"
          id="text"
          name="skill2"
          placeholder="e.g. Desiging"
          value={formData.skill2}
          onChange={(event) =>
            setFormData({ ...formData, skill2: event.target.value })
          }
        />
      </div>
      <div className="skill-btn">
        <button className="add-skill-btn">Add Skill</button>
      </div>
    </div>
  );
};

export default SkillsForm;
