import React from "react";

export default function Gbazar() {
  return (
    <>
      <div className="container-fluid mt-5 mb-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-4  col-md-4">
              <h3 className="service_title">G BAZAR</h3>
              <h6>Simplify Your Finances, Elevate Your Life.</h6>
              <p className="services_p1">
                G Bazar aspires to make personal finance decisions stress-free,
                clear, and convenient for everyone out there. Through technology
                and data improvements, along with a lot of hard work, we seek to
                make tough judgments simple for you. We are proud to be a strong
                and popular finance brand.
              </p>
              <p className="services_p1">
                Our objective is to make financial products affordable and
                easily available for everyone during a financial crisis. Our
                team has experienced and qualified finance professionals working
                on giving the best for you.
              </p>
            </div>

            <div className="col-lg-4  col-md-4 mt-5">
              <div className="card card01 mt-5">
                <h3 className="text-center services_h3">
                  Check Your Credit Score{" "}
                </h3>
                <p className="text-center services_p px-2">
                  There is more to your credit score than just a number. A
                  higher score can open doors to the things you desire most.
                </p>

                <div class="go-corner" href="#">
                  <div class="go-arrow">01</div>
                </div>
              </div>
            </div>

            <div className="col-lg-4  col-md-4 mt-5">
              <div className="card card01 mt-5">
                <h3 className="text-center services_h3">Personal Loan </h3>
                <p className="text-center services_p px-2">
                  Receive the funds you require exactly when you require them,
                  with rapid disbursement and simple application.
                </p>

                <div class="go-corner" href="#">
                  <div class="go-arrow">02</div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4  col-md-4">
              <div className="card card01 mt-3">
                <h3 className="text-center services_h3">Credit Card </h3>
                <p className="text-center services_p px-2">
                  Compare the top credit cards online before applying for a
                  credit card. There are credit cards available from reputable
                  banks.
                </p>

                <div class="go-corner" href="#">
                  <div class="go-arrow">03</div>
                </div>
              </div>
            </div>

            <div className="col-lg-4  col-md-4">
              <div className="card card01  mt-3">
                <h3 className="text-center services_h3">
                  Term Life Insurance{" "}
                </h3>
                <p className="text-center services_p px-2">
                  Affordable Security for Your Future. Fortify your loved ones'
                  financial future with affordable term insurance.
                </p>

                <div class="go-corner" href="#">
                  <div class="go-arrow">04</div>
                </div>
              </div>
            </div>

            <div className="col-lg-4  col-md-4">
              <div className="card card01  mt-3">
                <h3 className="text-center services_h3">Health Insurance </h3>
                <p className="text-center services_p px-2">
                  Huge healthcare protection for your family. Get the utmost
                  coverage at times of medical emergencies.
                </p>

                <div class="go-corner" href="#">
                  <div class="go-arrow">05</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
