import React from "react";
import "./ProsolPage.css";
import accesspermission from "../Images/access-permission.png";
import prosollogo from "../Images/prosol-logo.jpg";
const ProsolPage = () => {
  return (
    <div>
      <div className="prosol-page" id="prosol-page-id">
        <div className="header-screen-prosol">
          <img
            src={prosollogo}
            className="prosol-logo-service"
            alt="prosollogo"
          ></img>
          <div className="prosol-high-size">
            <h4>PROSOL : EMBEDDABLE WORKFLOW PROCESS FOR</h4>
            <h4>CONTINUOUS DATA QUALITY MANAGEMENT</h4>
          </div>
        </div>
        <div className="carousel-inner">
          <img
            src={accesspermission}
            alt="accesspermission"
            className="accesspermission"
          ></img>
        </div>
        <div className="para-screen-1">
          <div className="para-part1">
            <span>ANNUAL DATA CLEANSING PROJECTS</span>
            <p>
              Every year, even Large Enterprise IT teams face the Master Data
              Quality Decay Problem. The tried and proven solution in the
              industry has been hiring Consulting firms to curate and improve
              the Master Data Quality. The underlying assumption of the IT
              Management teams is that the new, more-standardized descriptions
              will help the employees better manage the inventory data which
              will in turn contribute to cost cutting. However after repeated
              iterations year after year, Most Enterprises realize that
              end-of-year data quality improvement exercises is only a temporary
              fix and not a long term solution.
            </p>
          </div>
          <div className="para-part2">
            <span>COST OF DELAYED QUALITY-ASSURANCE</span>
            <p>
              Quality data is the foundation to implementing master data
              governance. However, over the progress of time, the quality of
              data deteriorates with more and more master data gets created.
              While the Data in the Enterprise IT can be quickly enforced with a
              Cost-Effective Annual Data Cleaning, the cost of getting rid of
              the excess inventory is very high. Forward looking Enterprises
              have identified this and have been exploring viable alternatives
              for the annual Data Cleansing approach.
            </p>
          </div>
        </div>
        <div className="para-screen-2">
          <div className="para2-part1">
            <div className="prosol-high-size-2">
              <h4>PROSOL : EMBEDDABLE WORKFLOW PROCESS FOR</h4>
              <h4>CONTINUOUS DATA QUALITY MANAGEMENT</h4>
            </div>
            <p>
              Data Quality deteroitation can be eradicated only through a
              quality process which is embedded within the Master Data
              Management process itself. "Always on" Data quality assurance
              program will help enterprises avoid the repetition of the
              situations the necessiate the need for periodic data cleansing
              process.
            </p>
            <p>
              Coda Technology Solution's Prosol is an embeddable data quality
              process which can be integrated into an enterprise's core master
              data management process itself. With Prosol, Enterprises can get a
              Master Data Curation Workflow process embedded within their
              enterprise applications so that whenever a new material code is to
              be created, the material code created is approved first internally
              by a senior member and then by a codasol's material code expert
              professional before the material code is made final and added into
              the enterprise application's database.
            </p>
            <span>PROSOL ML AND NLP APPLICATION ARCHITECTURE</span>
            <p>
              Data Cleansing Tools have been using a probablistic product
              description matching algorithms to identify duplicate product
              codes and eradicate them. However, with the advent of Deep
              Learning based Machine Learning and Natural Language Processing
              algorithms pioneered by Google and DeepMind, New generation
              Machine Learning algorithms like Word2Vec, Long-Short Term Memory
              (LSTM), Sequence-to-Sequence Models etc. are being leveraged for
              developing software tools that match product specifications based
              "Similarity Measures" instead of probabilities and rankings.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProsolPage;
