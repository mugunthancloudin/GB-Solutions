import "./about.css";
import React from "react";
import about from "../../asssets/about/About banner.svg";

function Abouts() {
  return (
    <>
      <div className="container-fluid p-5">
        <div className="container">
          <div className="row  ">
            {/* <div className="col-lg-1"></div> */}
            <div className="col-lg-7">
              <h3 className="about_title">About GB Corp</h3>
              <h6 className="mt-4 ">
                Pioneering IT Solutions for a Connected World.
              </h6>
              <p className="about_content mt-4">
                GB Corp enables companies to re-imagine their businesses for the
                ever-changing digital world. We are a leading IT solutions
                provider and product Development Company in India. GB Corp is a
                team of committed and highly skilled specialists focused on
                providing world-class IT solutions. We offer a variety of
                services in the areas of software, web development, and product
                development. <br />
                <br />
                We have a dedicated team of experts with experience in several
                tools and platforms. Our experts keep themselves updated with
                the latest technology trends. We have faith in what we do and do
                what we believe in. <br />
                <br />
                We believe in making use of technology to make things meek and
                easy to use. We also believe in thinking ahead and releasing
                products and services that can fit well with the latest
                technologies. <br />
                <br />
                We envisage ourselves as a leading Information Technology
                Company offering quality solutions and products supported by
                unbeatable customer service.
              </p>
              {/* <button className="about_button p-2 pl-4 pr-4 mt-4 ">
              Discover More
            </button> */}
              <div class="des-button">
                <div class="hover bt-1"></div>
                <div class="hover bt-2"></div>
                <div class="hover bt-3"></div>
                <div class="hover bt-4"></div>
                <div class="hover bt-5"></div>
                <div class="hover bt-6"></div>
                <button className="describeButton"></button>
              </div>
            </div>
            <div className="col-lg-5 mt-3">
              <div className="about_image">
                <img src={about} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Abouts;
