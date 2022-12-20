import React from "react";
import "./HomePage.css";
import dashboard from "../../Images/HomePageImg.png";
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineInstagram } from "react-icons/ai";
import { ImTwitter } from "react-icons/im";
import { AiFillLinkedin } from "react-icons/ai";
const HomePage = (props) => {
  const {
    setContentShow,
    setProsolShow,
    setPropediaShow,
    setGoosparesShow,
    setContactusShow,
  } = props;
  return (
    <div>
      <div className="header-part-screen" id="screen-1">
        <img src={dashboard} className="half-img" alt="dashboard" />
        <div className="content">
          <h1>
            We Are The Best
            <br />
            <span> Data Cleaning</span>in MDM
          </h1>
          <p>
            Every year, even Large Enterise IT teams face the Master <br /> Data
            Quality Decay Problem.The tried and Proven solution in <br /> the
            industry has been hiring Consulting firms to curate and <br />
            improve the Master Data Quality.
          </p>
          <button
            onClick={() => {
              setContactusShow(true);
              setContentShow(true);
              setProsolShow(false);
              setPropediaShow(false);
              setGoosparesShow(false);
            }}
            className="btn-contact"
            id="pop-up"
          >
            Contact Us
          </button>
        </div>

        <div className="sticky-container">
          <ul className="sticky">
            <li>
              <div className="icon-wrapper">
                <FaFacebookF id="sicon" />
              </div>
            </li>
            <li>
              <div className="icon-wrapper">
                <AiOutlineInstagram id="sicon" />
              </div>
            </li>
            <li>
              <div className="icon-wrapper">
                <ImTwitter id="sicon" />
              </div>
            </li>

            <li>
              <div className="icon-wrapper">
                <AiFillLinkedin id="sicon" />
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
