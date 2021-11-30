import React from "react";

const Summary = ({ formData, setFormData }) => {
  return (
    <div>
      <h1>PROFESSIONAL SUMMARY</h1>
      <p>
        Write a short summary telling more about yourself, your strengths and
        experience. Feel free to use our pre-written examples.
      </p>
      <label for="Career"> Career Field</label>
      <select
        name="Careerfeilds"
        value={formData.Careerfeilds}
        onChange={(event) =>
          setFormData({ ...formData, Careerfeilds: event.target.value })
        }
      >
        <option value="text">Architect</option>
        <option value="text">Business development manage</option>
        <option value="text">Software engineer</option>
        <option value="text">Veterinarian</option>
        <option value="text">other</option>
      </select>
      <br />
      <input type="text" name="career" />
    </div>
  );
};

export default Summary;
