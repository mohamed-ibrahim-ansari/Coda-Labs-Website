import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { RiArrowDropDownLine } from "react-icons/ri";
import headlogo from "../Images/logo1.png";

const Header = () => {
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
                <Link to={"/"} className="navbar-button">
                  Home
                </Link>
              </li>
              <li className="dropdown-service">
                <Link to={"/ServicePage"} className="navbar-button-service">
                  Services
                </Link>
                <RiArrowDropDownLine  />
                <div className="dropdown-service-content">
                  <button className="navbar-button-drop">
                    <Link to="/ProsolPage">Prosol</Link>
                  </button>
                  <button className="navbar-button-drop">
                    <Link to="/PropediaPage">Propedia</Link>
                  </button>
                  <button className="navbar-button-drop">
                    <Link to="/GoosparesPage">Goospares</Link>
                  </button>
                </div>{" "}
              </li>
              <li>
                <Link to={"/CategoryPage"} className="navbar-button">
                  Category
                </Link>
              </li>
              <li>
                <Link to={"/ProjectsPage"} className="navbar-button">
                  Projects
                </Link>
              </li>
              <li>
                <Link to={"/BlogPage"} className="navbar-button">
                  Blog
                </Link>
              </li>
              <li>
                <Link to={"/MemberPage"} className="navbar-button">
                  Teams
                </Link>
              </li>
              <li>
                <Link to={"/ClientsPage"} className="navbar-button">
                  Clients
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Header;
