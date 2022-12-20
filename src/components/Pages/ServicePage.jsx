import React from "react";
import "./ServicePage.css";
import ProsolServiceLogo from "../../Images/prosol-logo.png";
import PropediaServiceLogo from "../../Images/propedia-logo.png";
import GoosparesServiceLogo from "../../Images/goospares-logo.png";
const servicePage = (props) => {
  const {
    setProsolShow,
    setContentShow,
    setPropediaShow,
    setGoosparesShow,
    setContactusShow,
  } = props;

  return (
    <div>
      <div className="cards-part-screen" id="screen-2">
        <div className="cards-screen-wrap">
          <div className="desc">
            <h5>
              <span>Our Services</span>
            </h5>
            <div className="red-wedo">
              <h3>
                What <span>We Do</span>
              </h3>
            </div>
          </div>
          <div className="cards">
            <div className="card-wrap">
              <div
                onClick={() => {
                  setProsolShow(true);
                  setContentShow(false);
                  setGoosparesShow(false);
                  setPropediaShow(false);
                  setContactusShow(false);
                }}
                className="card"
                id="prosol_card_id"
              >
                <img
                  src={ProsolServiceLogo}
                  id="prosol"
                  alt="ProsolServiceLogo"
                />
                <div className="card1-container">
                  <h4>Prosol</h4>
                  <h6>Master Data Management</h6>
                  <p>
                    As a comprehensive method of <br /> enabling an enterprise,
                    Master data <br /> management (MDM) links all of its <br />{" "}
                    critical data to one file
                  </p>
                </div>
              </div>
              <div
                onClick={() => {
                  setPropediaShow(true);
                  setContentShow(false);
                  setProsolShow(false);
                  setGoosparesShow(false);
                  setContactusShow(false);
                }}
                className="card"
                id="propedia_card_id"
              >
                <img
                  src={PropediaServiceLogo}
                  id="propedia"
                  alt="PropediaServiceLogo"
                />
                <div className="card2-container">
                  <h4>Propedia</h4>
                  <h6>Machine Learning Powered Data Governance</h6>
                  <p>
                    In this modern age, with the dawn of <br /> internet
                    connected people everywhere <br />
                    around the globe almost all kind of
                    <br />
                    business.
                  </p>
                </div>
              </div>
              <div
                onClick={() => {
                  setGoosparesShow(true);
                  setContentShow(false);
                  setProsolShow(false);
                  setPropediaShow(false);
                  setContactusShow(false);
                }}
                className="card"
                id="goospares_card_id"
              >
                <img
                  src={GoosparesServiceLogo}
                  id="goospares"
                  alt="GoosparesServiceLogo"
                />
                <div className="card3-container">
                  <h4>Goospares</h4>
                  <h6>Online Warehouse</h6>
                  <p>
                    Goospares is a new business which will <br /> use the web to
                    bring the sellers and <br />
                    buyers of unused,slow moving and
                    <br />
                    non-moving inventory.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default servicePage;
