import React from "react";
import "./GoosparesPage.css";
import GoosparesPageLogo from "../Images/goospares-logo.png";
import IndexPageImg from "../Images/index-page-goospares.jpg";
const GoosparesPage = () => {
  return (
    <div>
      <div className="goospares-page" id="goospares-page-id">
        <div className="header-screen-goospares">
          <img
            src={GoosparesPageLogo}
            className="goospares-page-logo"
            alt="Goospareslogo"
          ></img>
          <div className="goospares-high-size">
            <h4>GOOSPARES IS A NEW BUSINESS WHICH WILL USE THE</h4>
            <h4>WEB TO BRING THE SELLERS AND BUYERS OF UNUSED,</h4>
            <h4>SLOW MOVING AND NON-MOVING INVENTORY</h4>
          </div>
          <img
            src={IndexPageImg}
            className="goospares-page-main-img"
            alt="Goosparesmainimg"
          ></img>
        </div>
        <div className="para-screen-goospares">
          <p>
            <a
              href="https://www.goospares.com/"
              target="_blank"
              rel="noreferrer"
            >
              Goospares.com,
            </a>{" "}
            a global liquidation marketplace connecting buyers and sellers of
            excess, unused and slow-moving inventory(Inventory in the form of
            finished goods, idle plant and equipment, raw materials, and MRO
            spare parts). Incorporated in 2016, it provides more reliable
            solutions in valuing industries' surplus inventory and inflating
            cash flows.
          </p>
          <p>
            This platform mainly moves towards the Circular Economy enabling
            buyers/sellers to add value, as well as to connect and develop the
            intra-country network. Goospares's vast specialization and expertise
            in multiple industry sectors offer a standard strategy in increasing
            revenue. Its global presence provides access to a large consumer
            network creating tremendous business opportunities.
          </p>
          <p>
            It also provides auction-based liquidation services in attaining the
            highest returns through a competitive bidding system. Being a
            pioneer, Goospares creates a digital space creating digital
            solutions to reinvent the revenue-generating methods.
          </p>
        </div>
        <div className="para-screen-goospares-2">
          <span>
            <h4>BENEFITS</h4>
          </span>
          <ul>
            <li>Revenue and margin enchancement</li>
            <li>Cost competitiveness</li>
            <li>Capital Release</li>
            <li>Cash Flow Generation</li>
            <li>Circular Economy</li>
            <li>SME Networking</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default GoosparesPage;
