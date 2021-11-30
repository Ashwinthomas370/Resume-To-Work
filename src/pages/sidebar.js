import React from "react";

import { SideBarLinks } from "../pages/sidebarlinks";

const sidebar = () => {
  return (
    <div>
      <div className="sidebar-container">
        <div className="sidebar">
          <ul className="sidebar-list">
            {SideBarLinks.map((val, key) => {
              return (
                <li
                  id={window.location.pathname == val.link ? "active" : ""}
                  className="list-row"
                  key={key}
                  onClick={() => {
                    window.location.pathname = val.link;
                  }}
                >
                  <div>{val.title}</div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default sidebar;
