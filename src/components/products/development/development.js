import React from "react";
import "./development.css"
import devImage from "../../asssets/development/devimage.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

export default function Development() {
  return (
    <>
      <div className="container-fluid dev">
        <div className="container pt-5 pb-5">
          <div className="row">
            <div className="col-lg-6 featuresTag order-sm-0">
                
              <img src={devImage} className="devProfile" />
            </div>
            <div className="col-lg-6 pb-5 order-sm-1">
              <h2 className="mb-0 pb-0 service_title">Design & Development</h2>
              <div className="d-flex mt-0 pt-0"><hr className="horzontalLine"/>
              <hr className="horzontalLine01"/></div>
              

              <p className="features_p">
                Phasellus vitae velit sit amet diam semper commodo quis quis
                libero. Morbi consequat arcu augue, molestie faucibus metus
                ullamcorper vel.
              </p>
              <div className="row">
                <div className="col-lg-6  col-md-6"><button className="w-100 devButtons01 text-start pt-1 pb-1 ps-4"><FontAwesomeIcon className="me-4 test" icon={faChevronRight} />Web Design</button></div>
                <div className="col-lg-6  col-md-6"><button className="w-100 devButtons text-start pt-1 pb-1 ps-4"><FontAwesomeIcon className="me-4 test" icon={faChevronRight} />Mobile App Design</button></div>
                <div className="col-lg-6  col-md-6"><button className="w-100 devButtons text-start pt-1 pb-1 ps-4"><FontAwesomeIcon className="me-4" icon={faChevronRight} />Android Development</button></div>
                <div className="col-lg-6  col-md-6"><button className="w-100 devButtons text-start pt-1 pb-1 ps-4"><FontAwesomeIcon className="me-4" icon={faChevronRight} />iOS Development</button></div>
                <div className="col-lg-6  col-md-6"><button className="w-100 devButtons text-start pt-1 pb-1 ps-4"><FontAwesomeIcon className="me-4" icon={faChevronRight} />Back - End</button></div>
                <div className="col-lg-6  col-md-6"><button className="w-100 devButtons text-start pt-1 pb-1 ps-4"><FontAwesomeIcon className="me-4" icon={faChevronRight} />Front - End</button></div>
                <div className="col-lg-6  col-md-6"><button className="w-100 devButtons text-start pt-1 pb-1 ps-4"><FontAwesomeIcon className="me-4" icon={faChevronRight} />e - Commerce</button></div>
                <div className="col-lg-6  col-md-6"><button className="w-100 devButtons text-start pt-1 pb-1 ps-4"><FontAwesomeIcon className="me-4" icon={faChevronRight} />Print Design</button></div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
