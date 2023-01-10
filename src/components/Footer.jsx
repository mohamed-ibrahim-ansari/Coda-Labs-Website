import React from "react";
import "./Footer.css";
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineInstagram } from "react-icons/ai";
import { BsTwitter } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import { AiFillCopyrightCircle } from "react-icons/ai";
const Footer = () => {
  return (
    <div>
      <footer id="Footer">
        <div className="main-footer">
          <div className="footer-section-content">
            <h2 className="footer-coda-labs-wrap">
              <span>CODA</span>labs
            </h2>
            <div className="footer-paragraph">
              <p>
                We Simplify the evolving MRO <br /> needs of Enterprises using
                Data Intelligence.
              </p>
              <p>
                Our holistic solution helps you manage your present, rectify
                your past and plan your future.
              </p>
            </div>
          </div>
          <div className="footer-section-content">
            <h2>Company</h2>
            <ul className="footer-company-list">
              <li>About Us</li>
              <li>Our Work</li>
              <li>Client</li>
              <li>Our Blog</li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div className="footer-section-content">
            <h2>Services</h2>
            <ul className="footer-services-list">
              <li>Prosol</li>
              <li>Propedia</li>
              <li>Goospares</li>
            </ul>
          </div>
          <div className="footer-section-content">
            <h2>Subscribe to Newsletter</h2>
            <div className="footer-input-subbtn-row">
              <input type="email" placeholder="Enter Email Address"></input>
              <button type="submit" className="subscribe-btn">
                Subscribe
              </button>
            </div>
            <div className="foot-icon">
              <ul className="ficon-list">
                <li>
                  {" "}
                  <FaFacebookF id="ficon" />
                </li>
                <li>
                  <AiOutlineInstagram id="ficon" />
                </li>
                <li>
                  <BsTwitter id="ficon" />
                </li>
                <li>
                  {" "}
                  <FaLinkedinIn id="ficon" />
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="copyright">
          <div className="footer-copyright-content">
            <AiFillCopyrightCircle />
            <p>Copyright 2022. All Right Reserved By Codalabs</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
