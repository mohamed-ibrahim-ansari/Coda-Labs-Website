import React from "react";
import "./PropediaPage.css";
import PropediaPageLogo from "../Images/propedia-logo.png";
import PropediaMainImg from "../Images/filterOptions.jpg";
const PropediaPage = () => {
  return (
    <div>
      <div className="propedia-page" id="propedia-page-id">
        <div className="header-screen-propedia">
          <img
            className="propedia-page-logo"
            src={PropediaPageLogo}
            alt="propediapagelogo"
          ></img>
          <div className="propedia-high-size">
            <h4>PROPEDIA : MACHINE LEARNING POWERED DATA</h4>
            <h4>GOVERNANCE</h4>
          </div>
          <img
            className="main-img-propedia"
            src={PropediaMainImg}
            alt="mainimgpropedia"
          ></img>
        </div>
        <div className="para-screen-propedia">
          <p>
            ProPedia is an enterprise-wide data governance solution that helps
            enterprise users to access, search and lookup quickly trusted
            metadata on material and spare-parts codes. ProPedia helps users to
            ensure that the meta-data created is consistent and ensures that
            best-practice models are always followed.
          </p>
          <span>
            <h4>THE BUSINESS CASE FOR PROPEDIA</h4>
          </span>
          <p>
            ERPs powered by database technology has Streamlined transactions
            management within and between enterprises; With ERP, every
            transaction within and between enterprises are documented and
            audited. While the database technology has enabled adequate control
            over transactions, its over-reliance on codes such as transaction
            management is its Achilles heel. When duplicate or unnecessary codes
            are created knowingly or not, the transaction control breaks down.
            When transaction control breaks down, Physical Inventory, Equipment
            Maintenance, Procurement Optimization etc are still not optimal.
            This is because Duplicate Product Codes result in redundant and
            excess Inventory, Over-Purchase etc.
          </p>
          <p>
            Master (Meta) Data Management (MDM) tools which have started to gain
            acceptance in the market as it is universally accepted that Product
            Code Structures and Specifications Text Management have direct
            impact on Physical Management of Inventory and Equipment
            Maintenance; The first generation MDM tools have a frequent
            disadvantage of going obselete quickly because the human experts who
            are in-charge of keeping the meta-data up to date often fail to cope
            up with fast evolving product market space in the industry.
          </p>
          <p>
            Artificial Intelligence and Machine Learning tools which are making
            a huge presence in the markets have been focussed more on Predictive
            analytics based on time-series data analytics. Industry 4.0 powered
            by algorithms are about to transform operations behind the
            transactions as its applications like Production Scheduling,
            Predictive Maintenance etc. are gaining steady acceptance.
            Similarly, Language Technology for Near Human Level Product Matching
            and Search has the potential to revolutionize MasterData Management
            and resolve the code management problem.
          </p>
        </div>
        <div className="para-screen-propedia-2">
          <span>
            <h4>PROPEDIA ADVANTAGES</h4>
          </span>
          <ul>
            <li>
              Set up and start running with ready-to-use best practice models
              quickly
            </li>
            <li>
              Leverage semantic search capabilities to find the right data fast
            </li>
            <li>
              Easily automate governance policies through workflows that involve
              the right people in data decision making
            </li>
            <li>
              Integrate with enterprise applications to build and maintain
              context around your data
            </li>
            <li>
              Deliver instant access to the right data through webserivces
              within applications and mobile access
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PropediaPage;
