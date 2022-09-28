import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationPin,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";

import "./Sidebar.css";
const Sidebar = () => {
  return (
    <div className="sidebar-container">
      {/* Profile */}
      <div className="sidebar-profile-container">
        <img src="media/images/profile.png" alt="" />
        <div className="profile-desc">
          <h2 className="profile-name">Rubel Hossain</h2>
          <p className="profile-location">
            <span>
              <FontAwesomeIcon icon={faLocationDot} />
            </span>
            Dhaka, Badda
          </p>
        </div>
      </div>
      {/* Profile Attributes */}
      <div className="person-attributes">
        <div>
          <p className="top-p">
            75 <span>kg</span>
          </p>
          <p className="bot-p">Weight</p>
        </div>
        <div>
          <p className="top-p">6.5</p>
          <p className="bot-p">Height</p>
        </div>
        <div>
          <p className="top-p">
            75 <span>yrs</span>
          </p>
          <p className="bot-p">Age</p>
        </div>
      </div>
      {/* Add a break */}
      <div className="add-break-container">
        <h3 style={{ fontWeight: "500" }}>Add a Break</h3>
        <div className="add-a-break">
          <div>10s</div>
          <div>20s</div>
          <div>30s</div>
          <div>40s</div>
          <div>50s</div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
