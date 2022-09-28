import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import "./MainComponent.css";
import Subject from "../Subject/Subject";
import Sidebar from "../Sidebar/Sidebar";
const MainComponent = () => {
  return (
    <section className="main-component">
      <main className="cards-section">
        <div className="cards-section-title">
          <FontAwesomeIcon
            icon={faGraduationCap}
            style={{ color: "orange", fontSize: "30px", marginRight: "10px" }}
          />{" "}
          <h2>ORTHODOX-COACHING-CENTRE</h2>
        </div>
        <p>Select today's subjects</p>
        {/* Subjects Sections */}
        <div className="">
          <Subject
            subject={{
              subject: "Physics",
              image:
                "https://images.pexels.com/photos/240163/pexels-photo-240163.jpeg?auto=compress&cs=tinysrgb&w=600",
              desc: "The abstract science of number, quantity, and space, either as abstract concepts ( pure mathematics ), or as applied to other disciplines such as physics and engineering ( applied mathematics )",
              time: "1h",
              cls: "XI-XII",
            }}
          />
        </div>
      </main>
      <div className="sidebar-section">
        <Sidebar />
      </div>
    </section>
  );
};

export default MainComponent;
