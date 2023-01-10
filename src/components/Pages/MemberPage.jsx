import React from "react";
import { useState, useEffect } from "react";
import "./MemberPage.css";
import TeamContent from "../../data/Content-Team";

const MemberPage = (props) => {
  const [memberContent, setMemberContent] = useState([]);
  useEffect(() => {
    setMemberContent(TeamContent);
  }, []);
  return (
    <div>
      <div className="member-part-screen" id="MemberPage">
        <div className="member-desc">
          <h5>
            <span>Our Team Member</span>
          </h5>
          <div className="member-high-size">
            <h2>We Have </h2>
            <h2>
              {" "}
              <span> Awesome </span> People
            </h2>
          </div>
        </div>
        <div className="Team-Map-Div">
          {memberContent.map((memberContent) => {
            return (
              <div key={memberContent.id} className="member-img-card">
                <div className="member-img-card-wrapper">
                  <img
                    className="Team-Image"
                    key={memberContent.image}
                    src={memberContent.image}
                    alt="Member1"
                  ></img>
                  <h6 className="Team-Name">{memberContent.name}</h6>
                  <p className="Team-Role">{memberContent.role}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MemberPage;
