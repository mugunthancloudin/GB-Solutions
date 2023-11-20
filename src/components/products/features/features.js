import { faSquareCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./features.css";
import serviceHome from "../../asssets/features/servicesHome.png";

export default function Features() {
  return (
    <>
      <div className="container-fluid dev">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 pb-5">
              <h5 className="features_h5">Innovative Solutions </h5>
              <h2 className="features_h2 mt-4">For a Brighter Tomorrow!!!</h2>
              <p className="features_p">
                We have magnificently delivered thousands of projects covering a
                wide range of industries from simple websites to e-commerce
                platforms to web applications and product development. Our
                procedures are aimed at providing a planned process that is
                simple, supportive, informative, and flexible.
              </p>
              <div className="row ">
                <div className="col-lg-6 d-flex feature">
                  <FontAwesomeIcon className="mt-1 me-2" icon={faSquareCheck} />{" "}
                  Mobile App Development
                </div>
                <div className="col-lg-6 d-flex feature">
                  <FontAwesomeIcon className="mt-1 me-2" icon={faSquareCheck} />
                  Web design and Development
                </div>
                <div className="col-lg-6 d-flex feature">
                  <FontAwesomeIcon className="mt-1 me-2" icon={faSquareCheck} />
                  SEO & Digital Marketing
                </div>
                <div className="col-lg-6 d-flex feature">
                  <FontAwesomeIcon className="mt-1 me-2" icon={faSquareCheck} />
                  E-Commerce Development
                </div>
                <div className="col-lg-6 d-flex feature">
                  <FontAwesomeIcon className="mt-1 me-2" icon={faSquareCheck} />
                  Graphic Design
                </div>
              </div>
            </div>
            <div className="col-lg-6 featuresTag ">
              <img src={serviceHome} className="featureProfile" alt="img" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
