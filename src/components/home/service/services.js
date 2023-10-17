import "./services.css";
import React from "react";
import icon1 from "../../asssets/services/icon1_banking assistance..svg";
import icon2 from "../../asssets/services/icon2_digital marketing..svg";
import icon3 from "../../asssets/services/icon3_risk management.svg";
import icon4 from "../../asssets/services/icon4_added assistance..svg";

function Service() {
  return (
    <>
      <div className="container-fluid mb-5 ">
        <div className="row">
          <div className="col-lg-12  text-center">
            <h3 className="mt-0 mb-3 service_h3 mt-3">Our services</h3>
            <p className="service_p">
              Save Time Managing your business with our best services
            </p>
          </div>
        </div>
        {/* <div className="row service_background"></div> */}
        <div className="container">
          <div className="row mt-2  justify-content-around">
            <div class="card-group">
              <div className="col-lg-3 col-md-6 mt-2">
                <div className="card mt-5 h-80 service_cards">
                  <div>
                    <div className="service_content_div">
                      <h5 className="mt-3 text-center">Product Development</h5>
                      <p className="p-3 mt-0 service_page_p">
                        As a prominent product development company, we
                        specialize in delivering cutting-edge solutions that
                        cater to the unique requirements of business. Gbazaar,
                        Inventory, and Workspace are a few products that we
                        developed for small and large enterprises that will help
                        them increase their productivity.
                      </p>
                    </div>
                    <div className="service_image_div">
                      <img src={icon1} className="service_page_icons" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-6 mt-2">
                <div className="card h-80 service_cards01">
                  <div className="service_image_div01">
                    <img src={icon2} className="service_page_icons" />
                  </div>
                  <div className="service_content_div pt-5">
                    <h5 className="mt-5 text-center">Digital Marketing</h5>
                    <p className="p-3 mt- service_page_p">
                      We are a digital marketing company equipped with
                      professionals who fully leverage the power of digital
                      media to promote your brand by creating brand awareness,
                      engagement, and fidelity cost-effectively. Make your
                      business visible worldwide with our digital marketing
                      strategies.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-6 mt-2">
                <div className="card h-80 mt-5 service_cards">
                  <div className="service_content_div">
                    <h5 className="mt-3 text-center">Web Design</h5>
                    <p className="p-3 mt-1 text-justify service_page_p">
                      If you are visiting this page, it means that you are
                      seeking a partner who can provide the best custom web
                      design services for your company. As a pioneer in website
                      design, GB Corp. has emerged as the go-to company for
                      thousands of companies in need of web-related services.
                    </p>
                  </div>
                  <div className="service_image_div">
                    <img src={icon3} className="service_page_icons" />
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-6 mt-2">
                <div className="card h-80 service_cards01">
                  <div className="service_image_div01">
                    <img src={icon4} className="service_page_icons" />
                  </div>
                  <div className="service_content_div pt-5">
                    <h5 className="mt-5 text-center">Mobile App Development</h5>
                    <p className="p-3 mt-2 service_page_p">
                      If you have a concept for an app, we have the resources to
                      make it a reality. With the expertise we've gained as
                      a leading Mobile App Development Company through working
                      on various projects, we recognize that each app is unique
                      and requires distinctive and distinct attention.
                    </p>
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

export default Service;
