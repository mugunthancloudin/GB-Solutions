import React from "react";

export default function Workspace() {
  return (
    <>
      <div className="container-fluid mt-5 mb-5">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <h3 className="service_title">WORKSPACE</h3>
              <h6>Connecting People, Maximizing Results.</h6>
              <p className="services_p1">
                Are you looking for a CRM with attendance tracking and employee
                performance? GB Corp’s workspace is what you need. There are two
                types of tracking available with our workspace - for tasks and
                projects, and for your employees – attendance tracking.
              </p>
              <p className="services_p1">
                Enhance productivity and employee performance. Track time spent
                on tasks, and know how long it takes to finish the projects, as
                you can help your employees become organized with better time
                management.
              </p>
            </div>

            <div className=" col-md-4 mt-5">
              <div className="card card01 mt-5">
                <h3 className="text-center services_h3">Time Tracking </h3>
                <p className="text-center services_p px-2">
                  Time tracking shows how much time is spent on each task, and
                  measures productivity and accountability
                </p>

                <div class="go-corner" href="#">
                  <div class="go-arrow">01</div>
                </div>
              </div>
            </div>

            <div className=" col-md-4 mt-5">
              <div className="card card01 mt-5">
                <h3 className="text-center services_h3">
                  Employee Monitoring{" "}
                </h3>
                <p className="text-center services_p px-2">
                  Employee monitoring can be used to increase efficacy and
                  productivity at the workplace.
                </p>

                <div class="go-corner" href="#">
                  <div class="go-arrow">02</div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="  col-md-4">
              <div className="card card01 mt-3">
                <h3 className="text-center services_h3">
                  Time and Attendance{" "}
                </h3>
                <p className="text-center services_p px-2">
                  Effortlessly keep an eye on employee attendance with automated
                  tracking.
                </p>

                <div class="go-corner" href="#">
                  <div class="go-arrow">03</div>
                </div>
              </div>
            </div>

            <div className="  col-md-4 ">
              <div className="card card01  mt-3">
                <h3 className="text-center services_h3">Managing Jobs </h3>
                <p className="text-center services_p px-2">
                  Your project managers can now monitor the progress of several
                  projects at the same time.
                </p>

                <div class="go-corner" href="#">
                  <div class="go-arrow">04</div>
                </div>
              </div>
            </div>

            <div className="  col-md-4">
              <div className="card card01  mt-3">
                <h3 className="text-center services_h3">Time Management </h3>
                <p className="text-center services_p px-2">
                  With GB Corp’s workspace CRM automates all your tasks and
                  streamlines your planning.
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
