import React from "react";
import "./achivements.css";
import { Carousel, CarouselItem } from "react-bootstrap";
import Achive1 from "../../asssets/achivements/Achive1.jpg";
import Achive2 from "../../asssets/achivements/Achive2.jpg";
import Achive3 from "../../asssets/achivements/Achive3.jpg";
import Achive4 from "../../asssets/achivements/Achive4.jpg";

export default function Achivements() {
  return (
    <>
      <div className="container-fluid aboutcontainer">
        <div className="container  ">
          <div className="row">
            <div className="col-md-6 pt-4">
              <div className="double-bg-header">
                <div className="about fw-bold">ABOUT</div>
              </div>
              <div className="about-description mt-3">
                <div className="homeAbout">
                  We use our unmatched vision, creativity, and enthusiasm that
                  successfully grow your business successfully through
                  feature-rich digital solutions. That is who we are. We are an
                  IT Solutions Company specializing in delivering high-quality
                  web design, web development, digital marketing, and product
                  development solutions. GB Corp is a team of dedicated and
                  highly skilled professionals focused on providing world-class
                  IT solutions.
                </div>
                <div className="row align-items-center mt-3">
                  <div className="col-md-4 mt-4">
                    <div className="number-stats-list counter-box">
                      <div className="number-stats-list-container">
                        <div>
                          <span
                            className="number-stats-list-number"
                            counter-value="20"
                            decimal-place="0"
                          >
                            10+
                          </span>
                        </div>
                        <div className="">Years’ Experience</div>
                      </div>
                      <div className="number-stats-list-">
                        <div className="number-stats-list-number">500+ </div>
                        <div className="">Happy Client’s</div>
                      </div>
                      <div className="number-stats-list-container">
                        <div>
                          <span className="number-stats-list-number">50+ </span>
                        </div>
                        <div className="">Team Member’s</div>
                      </div>
                      <div className="number-stats-list-container">
                        <div className="number-stats-list-number">150+ </div>
                        <div className="">Completed Projects</div>
                      </div>
                    </div>
                    <a className="icon-button mt-4 mb-4 d-md-none" href="#">
                      <div className="round-button">
                        <div className="circle"></div>
                        <i className="arima-icon-arrow-right"></i>
                      </div>{" "}
                      LEARN MORE
                    </a>
                  </div>
                  <div className="col-md-8 home_about_mid_image pt-4">
                    <img
                      className="d-block w-100"
                      src={Achive1}
                      alt="image1"
                      height={"300px"}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 mt-5 pt-3">
              <Carousel>
                <CarouselItem>
                  <img
                    className="d-block w-100 mb-5"
                    src={Achive2}
                    alt="First slide"
                    height="495px"
                  />
                </CarouselItem>
                <CarouselItem>
                  <img
                    className="d-block w-100 mb-5"
                    src={Achive3}
                    alt="First slide"
                    height="495px"
                  />
                </CarouselItem>
                <CarouselItem>
                  <img
                    className="d-block w-100 mb-5"
                    src={Achive4}
                    alt="First slide"
                    height="495px"
                  />
                </CarouselItem>
              </Carousel>
            </div>
          </div>
        </div>

      </div>
    </>
  );
}
