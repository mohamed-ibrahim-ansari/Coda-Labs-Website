import React from "react";
import "./Header.css";
import { RiArrowDropDownLine } from "react-icons/ri";
import headlogo from "../Images/logo1.png";
const Header = (props) => {
  const {
    setProsolShow,
    setPropediaShow,
    setGoosparesShow,
    setContentShow,
    setContactusShow,
  } = props;
  return (
    <div>
      <header>
        <nav className="navbar">
          <img src={headlogo} className="head-logo" alt="CODALABS-LOGO" />
          <a href="jhjg" className="toggle-button">
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </a>
          <div className="navbar-links">
            <ul>
              <li>
                <button
                  onClick={() => {
                    setContentShow(true);
                    setProsolShow(false);
                    setPropediaShow(false);
                    setGoosparesShow(false);
                    setContactusShow(false);
                  }}
                  className="navbar-button"
                  id="home_call_id"
                >
                  <a href="#screen-1">Home</a>
                </button>
              </li>
              <li className="dropdown-service">
                <button
                  onClick={() => {
                    setContentShow(true);
                    setProsolShow(false);
                    setPropediaShow(false);
                    setGoosparesShow(false);
                    setContactusShow(false);
                  }}
                  className="navbar-button"
                  id="service_call_id"
                >
                  <a href="#screen-2">Services</a>
                  <RiArrowDropDownLine />
                </button>
                <div className="dropdown-service-content">
                  <button
                    onClick={() => {
                      setProsolShow(true);
                      setPropediaShow(false);
                      setContentShow(false);
                      setGoosparesShow(false);
                      setContactusShow(false);
                    }}
                    className="navbar-button-drop"
                    id="prosolbtn"
                  >
                    Prosol
                  </button>
                  <button
                    onClick={() => {
                      setPropediaShow(true);
                      setProsolShow(false);
                      setContentShow(false);
                      setGoosparesShow(false);
                      setContactusShow(false);
                    }}
                    className="navbar-button-drop"
                    id="propedia_call_id"
                  >
                    Propedia
                  </button>
                  <button
                    onClick={() => {
                      setGoosparesShow(true);
                      setContentShow(false);
                      setPropediaShow(false);
                      setProsolShow(false);
                      setContactusShow(false);
                    }}
                    className="navbar-button-drop"
                    id="goospares_call_id"
                  >
                    Goospares
                  </button>
                </div>{" "}
              </li>
              <li>
                <button
                  onClick={() => {
                    setContentShow(true);
                    setPropediaShow(false);
                    setProsolShow(false);
                    setGoosparesShow(false);
                    setContactusShow(false);
                  }}
                  className="navbar-button"
                  id="category_call_id"
                >
                  <a href="#screen-3">Category</a>
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    setContentShow(true);
                    setPropediaShow(false);
                    setProsolShow(false);
                    setGoosparesShow(false);
                    setContactusShow(false);
                  }}
                  className="navbar-button"
                  id="projects_call_id"
                >
                  <a href="#screen-4">Projects</a>
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    setContentShow(true);
                    setPropediaShow(false);
                    setProsolShow(false);
                    setGoosparesShow(false);
                    setContactusShow(false);
                  }}
                  className="navbar-button"
                  id="blog_call_id"
                >
                  <a href="#screen-5">Blog</a>
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    setContentShow(true);
                    setPropediaShow(false);
                    setProsolShow(false);
                    setGoosparesShow(false);
                    setContactusShow(false);
                  }}
                  className="navbar-button"
                  id="team_call_id"
                >
                  <a href="#screen-6">Team</a>
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    setContentShow(true);
                    setPropediaShow(false);
                    setProsolShow(false);
                    setGoosparesShow(false);
                    setContactusShow(false);
                  }}
                  className="navbar-button"
                  id="clients_call_id"
                >
                  <a href="#screen-7">Clients</a>
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    setContentShow(true);
                    setPropediaShow(false);
                    setProsolShow(false);
                    setGoosparesShow(false);
                    setContactusShow(false);
                  }}
                  className="navbar-button"
                  id="contact_us_call_id"
                >
                  <a href="#screen-8">Contact Us</a>
                </button>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Header;
