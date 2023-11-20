import React from "react";
import "./services.css";

export default function services() {
  return (
    <>
      <div className="container-fluid mt-5 mb-5">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <h3 className="service_title">INVENTORY</h3>
              <h6>Organize, Track, Succeed: You’re Inventory Solution!!</h6>
              <p className="services_p1">
                GB inventory tracking software makes it easy to manage your
                entire inventory on any device, and anywhere. It is excellent
                software that helps small and growing businesses smoothly
                control their inventory across multiple channels and devices. A
                single platform that gives you full control over consolidating
                your inventory across channels.
              </p>
              <p className="services_p1">
                Using GB Corp’s inventory management replaces guesswork with
                accuracy, accountability, and development. Our powerful
                inventory management system offers you complete control over
                your inventory, helps you handle your inventory across various
                channels, and eradicates the necessity for third-party software.
              </p>
            </div>

            <div className="col-md-4 ">
              <div className="card card01 mt-5">
                <h3 className="text-center services_h3">Order Management</h3>
                <p className="text-center services_p px-2">
                  Determine how many products you have on hand by keeping track
                  of your inventory.
                </p>

                <div class="go-corner" href="#">
                  <div class="go-arrow">01</div>
                </div>
              </div>
            </div>

            <div className="col-md-4 ">
              <div className="card  card01 mt-5">
                <h3 className="text-center services_h3">Warehouse</h3>
                <p className="text-center services_p px-2">
                  Manage orders and stocks of warehouses from a single system
                  even if you have warehouses in different locations.
                </p>

                <div class="go-corner" href="#">
                  <div class="go-arrow">02</div>
                </div>
              </div>
            </div>

            <div className=" col-md-4">
              <div className="card h-100 card01 mt-3">
                <h3 className="text-center services_h3">Barcode Scanning</h3>
                <p className="text-center services_p px-2">
                  Get real-time updates on your inventory. This makes it easy to
                  scan, track, and manage your inventory
                </p>

                <div class="go-corner" href="#">
                  <div class="go-arrow">03</div>
                </div>
              </div>
            </div>

            <div className=" col-md-4">
              <div className="card h-100 card01  mt-3">
                <h3 className="text-center services_h3">Inventory Tracking </h3>
                <p className="text-center services_p px-2">
                  It monitors the quantities, locations, and movements of their
                  stock or goods. It prevents stockouts and overstocking.
                </p>

                <div class="go-corner" href="#">
                  <div class="go-arrow">04</div>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card h-100 card01  mt-3">
                <h3 className="text-center services_h3">Reports</h3>
                <p className="text-center services_p px-2">
                  Analyze reports to examine the sales trend, best-performing
                  items, and more using simple yet accurate inventory reporting
                  alternatives.
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
