import React, { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

import "./Sidebar.css";
const Sidebar = (props) => {
  const { requiredTime } = props;

  // states
  const [breakTime, setBreakTime] = useState(0);
  // Side Effects
  // Handlers
  const handleBreakTime = (breakTime) => {
    setBreakTime(breakTime);
  };
  // Variables
  const breakTimes = [2, 5, 10, 15, 30];
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
          {breakTimes.map((br) => (
            <div onClick={(br) => handleBreakTime(br)}>{br}</div>
          ))}
        </div>
      </div>
      {/* Studied Durations Details */}
      <div>
        <h3>Study Details</h3>
        <div className="study-time">
          <p className="strong">Study Time</p>
          <p className="silenced">
            {requiredTime} <span>Hours</span>
          </p>
        </div>
        <div className="break-time">
          <p className="strong">Break Time</p>
          <p className="silenced">
            {breakTime} <span>Minutes</span>
          </p>
        </div>
      </div>
      {/* Activity complete BTN */}
      <button className="btn-activity">Activity Completed</button>
    </div>
  );
};

export default Sidebar;
