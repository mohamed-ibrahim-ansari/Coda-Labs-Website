import React from "react";
import "./ClientsPage.css";
import Amul from "../../Icons/amullogo.svg";
import hindustanunilever from "../../Icons/hindustanunilever.svg";
import flipkart from "../../Icons/flipkartlogo.svg";
import mahindra from "../../Icons/mahindralogo.svg";
import phonepe from "../../Icons/phonepelogo.svg";
import tata from "../../Icons/tatalogo.svg";
import airtel from "../../Icons/airtellogo.svg";
import hero from "../../Icons/herologo.svg";
import lg from "../../Icons/lglogo.svg";
import bsnl from "../../Icons/bsnllogo.svg";
import dunzo from "../../Icons/dunzo.svg";
import airindia from "../../Icons/airindialogo.svg";
const ClientsPage = () => {
  return (
    <div>
      <div className="client-part-screen" id="ClientsPage">
        <div className="client-desc">
          <h5>
            <span>Our Clients</span>
          </h5>
          <div className="high-size-client">
            <h2>Some</h2>
            <span>Great Works</span> <h2> From Our Clients</h2>
          </div>
        </div>
        <div className="client-logo1">
          <img src={Amul} alt="amul"></img>
          <img
            src={hindustanunilever}
            className="pil-img-uni"
            alt="hindustanUnilever"
          ></img>
          <img src={flipkart} className="pil-img-flip" alt="flipkart"></img>
          <img src={mahindra} alt="mahindra"></img>
          <img src={phonepe} alt="phonepe"></img>
        </div>
        <div className="client-logo2">
          <img src={tata} alt="tata"></img>
          <img src={airtel} className="pil-img1" alt="airtel"></img>
          <img src={hero} alt="hero"></img>
          <img src={lg} className="pil-img" alt="lg"></img>
          <img src={bsnl} alt="bsnl"></img>
          <img src={dunzo} alt="dunzo"></img>
          <img src={airindia} alt="airindia"></img>
        </div>
      </div>
    </div>
  );
};
export default ClientsPage;
