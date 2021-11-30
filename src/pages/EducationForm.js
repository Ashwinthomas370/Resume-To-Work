import React from "react";

import { Link } from "react-router-dom";

const EducationForm = ({ formData, setFormData }) => {
  return (
    <div>
      <div className="education-section">
        <h1> EDUCATION </h1>
        <p> Add information about your educational background.</p>
        <form>
          <label for="Fname">School Name</label>
          <input
            type="text"
            id="fname"
            name="schoolname"
            value={formData.schoolname}
            onChange={(event) =>
              setFormData({ ...formData, schoolname: event.target.value })
            }
          />
          <br />
          <br />
          <label for="lname">City</label>
          <input
            type="text"
            id="lname"
            name="city"
            value={formData.city}
            onChange={(event) =>
              setFormData({ ...formData, city: event.target.value })
            }
          />
          <br /> <br />
          <label for="fname">State</label>
          <input
            type="text"
            id="Address"
            name="state"
            value={formData.state}
            onChange={(event) =>
              setFormData({ ...formData, state: event.target.value })
            }
          />
          <br />
          <br />
          <label for="degree">Select a degree:</label>
          <select
            name="degree"
            id="degree"
            value={formData.degree}
            onChange={(event) =>
              setFormData({ ...formData, degree: event.target.value })
            }
          >
            <option value="Master-of arts">Master of arts</option>
            <option value="MAster-of-science ">Master of science</option>
            <option value="bcom">bcom</option>
            <option value="mba">mba</option>
          </select>
          <br />
          <br />
          <label for="Graduation-Date">Graduation Date</label>
          <input
            type="month"
            id="GraduationDate"
            name="GraduationDate"
            value={formData.GraduationDate}
            onChange={(event) =>
              setFormData({ ...formData, GraduationDate: event.target.value })
            }
          />
          <br />
          <br />
        </form>
      </div>
    </div>
  );
};

export default EducationForm;
