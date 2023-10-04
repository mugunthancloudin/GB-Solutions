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
                      <h5 className="mt-3 text-center">Banking Assistance</h5>
                      <p className="p-3 mt-4 service_page_p">
                        Banking plays an virtual role in every industry, SO we
                        as a company Understand the importance of this services,
                        we posses a decade of working experience in banking
                        service and creates
                        a demand deposit.
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
                      In this digitalized era, the best booming platform to
                      showcase all the business in a digital market and many
                      social media platforms where it can reach to millions of
                      people.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-6 mt-2">
                <div className="card h-80 mt-5 service_cards">
                  <div className="service_content_div">
                    <h5 className="mt-3 text-center">
                      Bussiness Risk <br></br> Management
                    </h5>
                    <p className="p-3 mt-1 text-justify service_page_p">
                      When a business is involved its always known for it's
                      fortunes and also risk.so the risk or threat to the
                      business may have it's roots due to financial issues,legal
                      Liablities, and accidents or
                      natural dissaster.
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
                    <h5 className="mt-5 text-center">
                      Added Assistance <br></br> Service
                    </h5>
                    <p className="p-3 mt-2 service_page_p">
                      We realise that every business needs more than just the
                      most basic services, so we offer a variety of additional
                      support services to help our clients in a varity of areas.
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
