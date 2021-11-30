
import React, { useState } from "react";
import Resumepage from "../pages/Resume";
import WorkExperienceSection from "../pages/WorkExperienceSection";
import Experience from "../pages/Experience";
import Education from "../pages/Education";
import EducationForm from "../pages/EducationForm";
import SkillsForm from "../pages/SkillsForm";
import Summary from "../pages/Summary";

import "../css/Form.css";

const Form = () => {
  const [page, setPage] = useState(0);
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    Address: "",
    email: "",
    number: 0,
    // workexe
    jobtitle: "",
    ename: "",
    city: "",
    state: "",
    // education
    schoolname: "",
    city: "",
    state: "",
    degree: "",
    GraduationDate: "",
    // skills
    skill1: "",
    skill2: "",
    // summary
    Careerfeilds: "",
  });
  const FormTitles = [
    "Resumepage",
    "WorkExperienceSection",
    "Experience",
    "Education",
    "EducationForm",
    "SkillsForm",
    "Summary",
  ];
  const PageDisplayed = () => {
    if (page === 0) {
      return <Resumepage formData={formData} setFormData={setFormData} />;
    } else if (page === 1) {
      return <WorkExperienceSection />;
    } else if (page === 2) {
      return <Experience formData={formData} setFormData={setFormData} />;
    } else if (page === 3) {
      return <Education />;
    } else if (page === 4) {
      return <EducationForm formData={formData} setFormData={setFormData} />;
    } else if (page === 5) {
      return <SkillsForm formData={formData} setFormData={setFormData} />;
    } else {
      return <Summary formData={formData} setFormData={setFormData} />;
    }
  };
  return (
    <div className="form">
      <div className="progressbar">
        <div
          style={{
            width:
              page === 0
                ? "5%"
                : page == 1
                ? "20%"
                : page == 2
                ? "30%"
                : page == 3
                ? "50%"
                : page == 4
                ? "60%"
                : page == 5
                ? "80%"
                : "100%",
          }}
        ></div>
      </div>

      <div className="body">{PageDisplayed()}</div>
      <div className="Button">
        <button
          className="prev-btn"
          type="submit"
          disabled={page == 0}
          onClick={() => {
            setPage((currpage) => currpage - 1);
          }}
        >
          prev
        </button>
        <button
          className="next-btn"
          type="submit"
          onClick={() => {
            if (page === FormTitles.length - 1) {
              alert("form submitted");
              console.log(formData);
            } else {
              setPage((currpage) => currpage + 1);
            }
          }}
        >
          {page === FormTitles.length - 1 ? "Submit" : "Next"}
        </button>
      </div>
    </div>
  );
};

export default Form;
