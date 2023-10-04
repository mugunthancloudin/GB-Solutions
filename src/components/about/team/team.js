import "../../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./team.css";
import React from "react";
import teamMembers1 from "../../asssets/team members/team member 1.jpg";
import teamMembers2 from "../../asssets/team members/team member 2.jpg";
import teamMembers3 from "../../asssets/team members/team member 3.jpg";
import teamMembers4 from "../../asssets/team members/team member 4.jpg";
import teamMembers5 from "../../asssets/team members/team member 5.jpg";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Team() {
  return (
    <>
      <div className="container-fluid container1 bg-dark">
        <div className="row  ">
          <div className="col-lg-12 text-center">
            <h1 className="text-white mt-5 ">
              Meet our <spam className="text-danger">Team</spam>
            </h1>
          </div>
        </div>

        <div className="row  justify-content-around">
          <div className="col-lg-2 col-md-4  mt-5">
            <div className="card ">
              <div className="team">
                <img src={teamMembers1} className="teampic" />
              </div>

              <div className="content">
                <h2>Alex</h2>
                <p>Founder & CEO</p>

                <div class="d-flex flex-row bd-highlight mb-3">
                  <div className="p-2">
                    {" "}
                    <Link to="#">
                      <FaFacebook size={30} color="blue" />
                    </Link>
                  </div>
                  <div className="p-2">
                    <Link to="#">
                      <FaInstagram size={30} color="brown" />
                    </Link>
                  </div>
                  <div className="p-2">
                    <Link to="#">
                      <FaTwitter size={30} color="skyblue" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-2 col-md-4  mt-5">
            <div className="card ">
              <div className="team">
                <img src={teamMembers2} className="teampic" />
              </div>

              <div className="content">
                <h2>George</h2>
                <p>Director</p>
                <div class="d-flex social flex-row  mb-3">
                  <div className="p-2">
                    {" "}
                    <Link to="#">
                      <FaFacebook size={30} color="blue" />
                    </Link>
                  </div>
                  <div className="p-2">
                    <Link to="#">
                      <FaInstagram size={30} color="brown" />
                    </Link>
                  </div>
                  <div className="p-2">
                    <Link to="#">
                      <FaTwitter size={30} color="skyblue" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-2 col-md-4  mt-5">
            <div className="card ">
              <div className="team">
                <img src={teamMembers3} className="teampic" />
              </div>

              <div className="content">
                <h2>Robert</h2>
                <p>Head Operation</p>
                <div class="d-flex social flex-row  mb-3">
                  <div className="p-2">
                    {" "}
                    <Link to="#">
                      <FaFacebook size={30} color="blue" />
                    </Link>
                  </div>
                  <div className="p-2">
                    <Link to="#">
                      <FaInstagram size={30} color="brown" />
                    </Link>
                  </div>
                  <div className="p-2">
                    <Link to="#">
                      <FaTwitter size={30} color="skyblue" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-2 col-md-4  mt-5">
            <div className="card ">
              <div className="team">
                <img src={teamMembers4} className="teampic" />
              </div>

              <div className="content">
                <h2>Marvin</h2>
                <p>Head Client Service</p>
                <div class="d-flex social flex-row  mb-3">
                  <div className="p-2">
                    {" "}
                    <Link to="#">
                      <FaFacebook size={30} color="blue" />
                    </Link>
                  </div>
                  <div className="p-2">
                    <Link to="#">
                      <FaInstagram size={30} color="brown" />
                    </Link>
                  </div>
                  <div className="p-2">
                    <Link to="#">
                      <FaTwitter size={30} color="skyblue" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-2 col-md-4 mt-5">
            <div className="card ">
              <div className="team">
                <img src={teamMembers5} className="teampic" />
              </div>

              <div className="content">
                <h2>Kishore</h2>
                <p>Head Production</p>
                <div class="d-flex social flex-row  mb-3">
                  <div className="p-2">
                    {" "}
                    <Link to="#">
                      <FaFacebook size={30} color="blue" />
                    </Link>
                  </div>
                  <div className="p-2">
                    <Link to="#">
                      <FaInstagram size={30} color="brown" />
                    </Link>
                  </div>
                  <div className="p-2">
                    <Link to="#">
                      <FaTwitter size={30} color="skyblue" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
