import React from 'react'

export default function Workspace() {
  return (
    <>
       <div className="container-fluid mt-5 mb-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-4  col-md-6">
              <h3>WORKSPACE</h3>
              <h6>CHANGE WAREHOUSE LIFE INTO PLANS</h6>
              <p className="services_p1">
                Managing services has always been challenging, and trends in
                logistics management continue to make it harder every day.
                Cloudin Labs services management system integrates seamlessly
                with Business that helps in control of your Orders, services &
                Returns through a single, real-time dashboard view of your
                business- across channels & locations.
              </p>
              <p className="services_p1">
                Cloudin Labs easily track your services, know which items sell
                fast, which items expire soon. It combines with desktop
                software, barcode scanners, barcode labels and mobile devices
                for a single stockroom or multiple warehouses spread across the
                country.
              </p>
            </div>

            <div className="col-lg-4  col-md-6 mt-5">
              <div className="card card01 mt-5">
                <h3 className="text-center services_h3">Order Management</h3>
                <p className="text-center services_p">
                  Card description with lots of great facts and interesting
                  details.
                </p>

                <div class="go-corner" href="#">
                  <div class="go-arrow">01</div>
                </div>
              </div>
            </div>

            <div className="col-lg-4  col-md-6 mt-5">
              <div className="card card01 mt-5">
                <h3 className="text-center services_h3">
                  Warehouse & Stock room
                </h3>
                <p className="text-center services_p">
                  Controls your stock in different warehouse or godowns
                  centrally from Cloudin Labs services.
                </p>

                <div class="go-corner" href="#">
                  <div class="go-arrow">02</div>
                </div>
              </div>
            </div>
          </div>
         <div className="row">
            <div className="col-lg-4  col-md-6">
              <div className="card card01 mt-3">
                <h3 className="text-center services_h3">Barcode Scanning</h3>
                <p className="text-center services_p">
                  Compatible with different barcode scanners to set up easily
                  barcode system and add SKUs, serial and batch numbers.
                </p>

                <div class="go-corner" href="#">
                  <div class="go-arrow">03</div>
                </div>
              </div>
            </div>

            <div className="col-lg-4  col-md-6">
              <div className="card card01  mt-3">
                <h3 className="text-center services_h3">services Tracking</h3>
                <p className="text-center services_p">
                  Keep the track of spare parts, saleable items and even expiry
                  dates with serial and batch tracking feature.
                </p>

                <div class="go-corner" href="#">
                  <div class="go-arrow">04</div>
                </div>
              </div>
            </div>

            <div className="col-lg-4  col-md-6">
              <div className="card card01  mt-3">
                <h3 className="text-center services_h3">Reports</h3>
                <p className="text-center services_p">
                  Know your services aging, vendor payments, sales details and
                  services valuation from range of reports
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
  )
}
