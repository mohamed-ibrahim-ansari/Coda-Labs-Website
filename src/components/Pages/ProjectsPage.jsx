import React from "react";
import "./ProjectsPage.css";

const ProjectsPage = () => {
  return (
    <div>
      <div className="projects-parts-screen" id="ProjectsPage">
        <div className="desc-projects">
          <h5>
            <span> Our Projects</span>
          </h5>
          <h1>
            We Have Completed <span>150+ Projects </span>Succesfully{" "}
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda
            earum nemo animi esse eligendi? Dolorum itaque amet saepe commodi,
            neque vitae dolore quis reiciendis quasi ratione consectetur.
            Ratione, maxime facere.
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Consectetur ducimus iste harum debitis ratione minima fuga
            aspernatur, omnis,{" "}
          </p>
          <button className="btn-contact-us-projects">Contact Us</button>
        </div>
        <div className="cards-projects">
          <div className="left-card">
            <div className="projects-card1">
              <span>250+</span>
              <h6>Global Customer</h6>
            </div>
            <div className="projects-card2">
              <span>50+</span>
              <h6>Team Member</h6>
            </div>
          </div>
          <div className="right-card">
            <div className="projects-card3">
              <span>156+</span>
              <h6>Project Completed</h6>
            </div>
            <div className="projects-card4">
              <span>15+</span>
              <h6>Our Company</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
