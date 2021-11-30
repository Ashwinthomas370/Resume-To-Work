import React from "react";

import { Link } from "react-router-dom";
import Sidebar from "../pages/sidebar";

import { SideBarLinks } from "../pages/sidebarlinks";

const Resume = ({ formData, setFormData }) => {
  return (
    <>
      {/* <Sidebar/> */}
      <div className="Resume-page">
        <h1>Personal info</h1>
        <p>
          Tell us about yourself With this info, recruiters will be able to find
          you.
        </p>
        <div>
          <form>
            <label for="Fname">First name:</label>
            <input
              type="text"
              id="fname"
              name="fname"
              value={formData.fname}
              onChange={(event) =>
                setFormData({ ...formData, fname: event.target.value })
              }
            />
            <br />
            <br />
            <label for="lname">Last name:</label>
            <input
              type="text"
              id="lname"
              name="lname"
              value={formData.lname}
              onChange={(event) =>
                setFormData({ ...formData, lname: event.target.value })
              }
            />
            <br /> <br />
            <label for="fname">Address:</label>
            <input
              type="text"
              id="Address"
              name="Address"
              value={formData.Address}
              onChange={(event) =>
                setFormData({ ...formData, Address: event.target.value })
              }
            />
            <br />
            <br />
            <label for="lname">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={(event) =>
                setFormData({ ...formData, email: event.target.value })
              }
            />
            <br />
            <br />
            <label for="lname">Phone:</label>
            <input
              type="tel"
              id="number"
              name="number"
              maxLength="10"
              value={formData.number}
              onChange={(event) =>
                setFormData({ ...formData, number: event.target.value })
              }
            />
            <br />
            <br />
          </form>
        </div>
      </div>
    </>
  );
};

export default Resume;
