import React from "react";
import { useState, useEffect } from "react";
import "./BlogPage.css";
import { BiStopwatch } from "react-icons/bi";
import { BsFillPersonFill } from "react-icons/bs";
import { BiComment } from "react-icons/bi";
import PropertyContent from "../../data/Content";

const BlogPage = (props) => {
  const [Content, setContent] = useState([]);
  useEffect(() => {
    setContent(PropertyContent);
  }, []);
  return (
    <div>
      <div className="blog-part-screen" id="BlogPage">
        <div className="blog-desc">
          <h5>
            <span>Our Blog</span>
          </h5>
          <h2>Every Single Update From Here</h2>
        </div>
        <div className="map-div">
          {Content.map((Content) => {
            return (
              <div key={Content.id} className="blog-card-wrap">
                <div className="blog-card">
                  <img
                    src={Content.avatar}
                    alt="Product-img"
                    className="blog-img"
                  />
                  <div className="blog-card-container">
                    <h4 className="Blog-name">{Content.name}</h4>
                    <div className="tiny-logo">
                      <BiStopwatch className={"blog-logo1"} />
                      <h6 className="date">{Content.Date}</h6>
                      <BsFillPersonFill className={"blog-logo1"} />
                      <h6 className="tiny-name">{Content.tinyName}</h6>
                      <BiComment className={"blog-logo1"} />
                      <h6 className="comments">{Content.comments}</h6>
                    </div>

                    <p className="text-card">{Content.text}</p>
                    <button className="readmore">Read More</button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

// {/* <div className="blog-card1">
// <img src={Blogimg} className="blog-img" alt="Blogimg"></img>
// <div className="blog-card-container">
// <h4>ATUL LIMITED - GUJARAT INDIA</h4>
// <div className="tiny-logo">
// <BiStopwatch className="blog-logo1" />
// <h6>Jan 20,2021</h6>
// <BsFillPersonFill className="blog-logo1" />
// <h6>Atul Limited</h6>
// <BiComment className="blog-logo1" />
//     <h6>10 comments</h6>
//     </div>
//     <p>
//     One of the Largest Integrated Chemical <br /> Companies in
//     India, First Private sector <br /> company inuagrated by then
//     prime <br /> minister in 1952.{" "}
//     </p>
//     <button className="readmore">Read More</button>
//     </div>
//     </div>
//     <div className="blog-card2">
//     <img src={Blogimg} className="blog-img" alt="Blogimg"></img>
//     <div className="blog-card-container">
//     <h4>WIPRO LIMITED - BANGALORE INDIA</h4>
//     <div className="tiny-logo">
//     <BiStopwatch className="blog-logo1" />

//     <h6>Jan 29,2021</h6>

//     <BsFillPersonFill className="blog-logo1" />
//     <h6>Wipro Limited</h6>

//     <BiComment className="blog-logo1" />
//     <h6>11 comments</h6>
//     </div>
//     <p>
//     WIPRO - A leading global information
//     <br />
//     technology, consulting and business <br /> process services
//     company.
//     </p>
//     <button className="readmore">Read More</button>
//     </div>
//     </div>
//     <div className="blog-card3">
//     <img src={Blogimg} className="blog-img" alt="Blogimg"></img>
//     <div className="blog-card-container">
//     <h4>LUPIN LIMITED - MUMBAI INDIA</h4>
//     <div className="tiny-logo">
//     <BiStopwatch className="blog-logo1" />
//     <h6>Feb 5,2021</h6>

//     <BsFillPersonFill className="blog-logo1" />
//     <h6>Lupin Limited</h6>

//     <BiComment className="blog-logo1" />
//     <h6>18 comments</h6>
//     </div>
//     <p>
//     Lupin Limited is a multi national
//     <br />
//     pharmaceutical company based in
//     <br />
//     Mumbai, Maharashtra, India.{" "}
//     </p>
//     <button className="readmore">Read More</button>
//     </div>
//   </div> */}

export default BlogPage;
