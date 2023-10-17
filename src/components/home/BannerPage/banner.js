import React from "react";
import "./banner.css";
import profile from "../../asssets/bannerPage/hero.png";

export default function Banner() {
  return (
    <>
      <div className="container-fluid ">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <h3 className="mt-5 home_text">
                Connect, Strategize, and Conquer the Digital World With
                <spam className="bannerSpam"> GB Corp.</spam>
              </h3>
              <p className="text-start mt-4">
                GB Corp's diverse solutions are what make us the one-stop IT
                Solution partner for everyone from start-ups and SMBs to
                high-profile multinational corporations.
              </p>
              <div className="row mt-4">
                <div className="col-lg-8">
                  <input
                    type="text"
                    className="homeInputBox form-control w-100 mt-2"
                  />
                </div>
                {/* <div className="col-lg-4"><button className="homeBtn w-75 mt-2">Subscribe</button></div> */}
                <div className="col-lg-4">
                  <button type="button" className="sub_button mt-1">
                    <div className="sub_button-top">Subscribe</div>
                    <div className="sub_button-bottom"></div>
                    <div className="sub_button-base"></div>
                  </button>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div>
                <img src={profile} className="pg2_profile" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
