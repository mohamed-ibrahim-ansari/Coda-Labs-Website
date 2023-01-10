import React from "react";
import { useState, useEffect } from "react";
import "./ServicePage.css";
import ServiceData from "../../data/Content-Service";

const ServicePage = (props) => {
  const [servicepagedata, setservicepagedata] = useState([]);
  useEffect(() => {
    setservicepagedata(ServiceData);
  }, []);
  return (
    <div>
      <div className="cards-part-screen" id="ServicePage">
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
              {servicepagedata.map((servicepagedata) => {
                return (
                  <div className="card" key={servicepagedata.id}>
                    <img
                      src={servicepagedata.image}
                      key={servicepagedata.image}
                      className="servicepage-image"
                      alt="ServiceLogo"
                    />
                    <div className="card-container">
                      <h4 className="servicepage-name">
                        {servicepagedata.name}
                      </h4>
                      <h6 className="servicepage-description">
                        {servicepagedata.description}
                      </h6>
                      <p className="servicepage-text">{servicepagedata.text}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicePage;
