import React from "react";
import "./MemberPage.css";
import Member1 from "../../Images/member-img-1.jpg";
import Member2 from "../../Images/member-img-2.jpg";
import Member3 from "../../Images/member-img-3.jpg";
import Member4 from "../../Images/member-img-4.jpg";
const MemberPage = () => {
  return (
    <div>
      <div className="member-part-screen" id="screen-6">
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

        <div className="member-img-card">
          <div className="member-img-card-wrapper">
            <img src={Member1} alt="Member1"></img>
            <h6>Gustavo Herwitz</h6>
            <p>UI/UX Designer</p>
          </div>

          <div className="member-img-card-wrapper">
            <img src={Member2} alt="Member2"></img>
            <h6>Philip Curtis</h6>
            <p>Graphic Designer</p>
          </div>

          <div className="member-img-card-wrapper">
            <img src={Member3} alt="Member3"></img>
            <h6>Talan Torff</h6>
            <p>Web Developer</p>
          </div>

          <div className="member-img-card-wrapper">
            <img src={Member4} alt="Member4"></img>
            <h6>Abram Vaccaro</h6>
            <p>App Developer</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MemberPage;
