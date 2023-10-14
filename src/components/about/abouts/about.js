import "./about.css";
import React from "react";
import about from "../../asssets/about/About banner.svg";

function Abouts() {
  return (
    <>
      <div className="container-fluid p-5">
        <div className="container">
          <div className="row  ">
            {/* <div className="col-lg-1"></div> */}
            <div className="col-lg-7">
              <h3 className="about_title">Home / Contact Us</h3>
              <h6 className="mt-4 ">
                More than a decade experience in sales and marketing exclusively
                in <br></br>service industry
              </h6>
              <p className="about_content mt-4">
                We are "GB SOLUTIONS",company registered in Dubai mainland,to
                support corprate and small scale companies providing an one stop
                service to help out clients to smoothen the business activites
                and bring to the news edge of company in cost effective with
                remarkable solution and extraordinary quality Services
              </p>
              {/* <button className="about_button p-2 pl-4 pr-4 mt-4 ">
              Discover More
            </button> */}
              <div class="des-button">
                <div class="hover bt-1"></div>
                <div class="hover bt-2"></div>
                <div class="hover bt-3"></div>
                <div class="hover bt-4"></div>
                <div class="hover bt-5"></div>
                <div class="hover bt-6"></div>
                <button className="describeButton"></button>
              </div>
            </div>
            <div className="col-lg-5 mt-3">
              <div className="about_image">
                <img src={about} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Abouts;
