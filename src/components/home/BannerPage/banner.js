import React from "react";
import "./banner.css";
import profile from "../../asssets/bannerPage/hero.png";

export default function Banner() {
  return (
    <>
      <div className="container-fluid home_bg_pg2">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <h1 className="mt-5 home_text">
                Create Amazing Landing <br></br>page with{" "}
                <spam className="bannerSpam">US</spam>
              </h1>
              <p className="text-center mt-5">
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                aut fugit, sed quia consequuntur magni dolores eos qui ratione
                sequinesciunt.
              </p>
              <div className="row mt-5">
                <div className="col-lg-8"><input type="text" className="homeInputBox w-100 mt-2" /></div>
                <div className="col-lg-4"><button className="homeBtn w-75 mt-2">Subscribe</button></div>
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
