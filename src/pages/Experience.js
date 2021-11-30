import React from "react";

import { Link } from "react-router-dom";
import "../css/Experience.css";

const Experience = ({ formData, setFormData }) => {
  return (
    <div>
      <div className="experience-section">
        <h1>Work Experience</h1>
        <p>Start with your most recent work experience</p>
        <form>
          <label for="Fname">Job Title</label>
          <input
            type="text"
            name="jobtitle"
            value={formData.jobtitle}
            onChange={(event) =>
              setFormData({ ...formData, jobtitle: event.target.value })
            }
          />
          <br />
          <br />
          <label for="lname">Employer</label>
          <input
            type="text"
            name="ename"
            value={formData.ename}
            onChange={(event) =>
              setFormData({ ...formData, ename: event.target.value })
            }
          />
          <br /> <br />
          <label for="fname">City</label>
          <input
            type="text"
            id="Address"
            name="city"
            value={formData.city}
            onChange={(event) =>
              setFormData({ ...formData, city: event.target.value })
            }
          />
          <br />
          <br />
          <label for="lname">State</label>
          <input
            type="text"
            name="state"
            value={formData.state}
            onChange={(event) =>
              setFormData({ ...formData, state: event.target.value })
            }
          />
          <br />
          <br />
          <br />
        </form>
      </div>
    </div>
  );
};

export default Experience;
