import { faSquareCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./features.css";
import serviceHome from "../../asssets/features/servicesHome.png"

export default function Features() {
  return (
    <>
      <div className="container-fluid dev">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 pb-5">
              <h5 className="features_h5">Improve with the Tech Trends</h5>
              <h2 className="features_h2 mt-4">
                We Have Also Some Extra <br></br>Ordinery Features
              </h2>
              <p className="features_p">
                At vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis praesentium voluptatum deleniti atque corrupti quos
                dolores et quas molestias excepturi sint occaecati cupiditate
                non provident, similique sunt.
              </p>
              <div className="row ">
                <div className="col-lg-6 d-flex feature" ><FontAwesomeIcon className="mt-1 me-2" icon={faSquareCheck} /> Market Management</div>
                <div className="col-lg-6 d-flex feature"><FontAwesomeIcon className="mt-1 me-2" icon={faSquareCheck} />Freelancing Training</div>
                <div className="col-lg-6 d-flex feature"><FontAwesomeIcon className="mt-1 me-2" icon={faSquareCheck} />Business Analysis</div>
                <div className="col-lg-6 d-flex feature"><FontAwesomeIcon className="mt-1 me-2" icon={faSquareCheck} />Augmented Reailty</div>
                <div className="col-lg-6 d-flex feature"><FontAwesomeIcon className="mt-1 me-2" icon={faSquareCheck} />Machine Learning</div>

              </div>
            </div>
            <div className="col-lg-6 featuresTag ">
              
                <img src={serviceHome} className="featureProfile" />
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
