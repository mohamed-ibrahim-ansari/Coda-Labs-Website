import React from "react";
import CategoryImage from "../../Images/categ-img.png";
import { FiArrowUpRight } from "react-icons/fi";
import "./CategoryPage.css";
const CategoryPage = () => {
  return (
    <div>
      <div className="category" id="screen-3">
        <div className="cat-desc">
          <h5>
            <span>Our Category</span>
          </h5>
          <h3>List Of Category</h3>
        </div>
        <img src={CategoryImage} alt="CategoryImage"></img>

        <div className="cat-list-wrap">
          <ul className="cat-list1">
            <li>
              V-Market Place <FiArrowUpRight className="arrow1" />{" "}
            </li>
            <li>
              Product Data Management
              <FiArrowUpRight className="arrow2" />{" "}
            </li>
            <li>
              SAP Services
              <FiArrowUpRight className="arrow3"  />{" "}
            </li>
            <li>
              Manpower Outsourcing
              <FiArrowUpRight className="arrow4" />{" "}
            </li>
          </ul>
          <ul className="cat-list2">
            <li>
              E-Procurement
              <FiArrowUpRight className="arrow5" />{" "}
            </li>
            <li>
              IT Services&Support
              <FiArrowUpRight className="arrow6" />{" "}
            </li>
            <li>
              Liquidation Services
              <FiArrowUpRight className="arrow7" />{" "}
            </li>
            <li>
              Master Data Management
              <FiArrowUpRight className="arrow8" />{" "}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;
