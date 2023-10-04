import React from "react";
import "./footer.css";
import {
  AiFillInstagram,
  AiFillFacebook,
  AiFillLinkedin,
  AiFillTwitterSquare,
} from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import magazine from "../../asssets/Header&Footer/business-magazine-logo-retina.png";
import brandLogo from "../../asssets/Header&Footer/gb-logo.png";

function Footer() {
  return (
    <>
      <div className="container-fluid footerContainer ">
        <div className="row text-center footerGradient ">
          <h4 className="p-3">
            We deliver Insight Intelligent Technology Solutions™ expertise.
          </h4>
        </div>
        <div className="container ">
          <div className="row pt-4">
            <div className="col-lg-3 mt-3">
              <img
                className="mt-1"
                src={brandLogo}
                alt="brand-logo"
                width={100}
                height={100}
              />
              <p className="mt-3">Follow Us On</p>
              <div className="row">
                <div className="col-12 ">
                  <a href="https://www.linkedin.com/company/cloudin-tech/mycompany/">
                    <i className="footer-media">
                      <AiFillLinkedin size={40} />
                    </i>
                  </a>

                  <a href="https://www.facebook.com/CloudinTechlabs/">
                    <i className="footer-media">
                      <AiFillFacebook size={40} />
                    </i>
                  </a>

                  <a href="https://www.instagram.com/cloudin_labs/">
                    <i className="footer-media">
                      <AiFillInstagram size={40} />
                    </i>
                  </a>

                  <a href="https://twitter.com/Cloudinlabs">
                    <i className="footer-media">
                      <AiFillTwitterSquare size={40} />
                    </i>
                  </a>


                </div>
             
              </div>
            </div>

            <div className="col-lg-3 mt-3">
              <h5 className="fw-bold mt-3">Press and engagements</h5>
              <h6 className="mt-2">Events</h6>
              <h6>Newsroom</h6>
              <h6>Investor relations</h6>
              <h6>Partnerships</h6>
            </div>
            <div className="col-lg-3">
              <h5 className="fw-bold mt-3">About Insight</h5>
              <h6 className="mt-2">Company overview</h6>
              <h6>Awards</h6>
              <h6>Corporate citizenship</h6>
              <h6>Sustainability</h6>
              <h6>Leadership team</h6>
              <h6>Careers</h6>
            </div>
            <div className="col-lg-3 mt-3" >
              <h5 className="fw-bold mt-3">Newsletter</h5>
              <p className="mt-2">
                Sign up to receive the IT content that matters most to you. You
                can update your preferences or unsubscribe any time.
              </p>
              <button className="footerButton mt-4">
                Sign Up For Our Newsletter
              </button>
            </div>
          </div>

          <div className="row  mt-4 pb-4">
            <div className="col-6">
              <p className="footer-copyright">
                &copy; GB - Solutions 2023. All rights reserved
              </p>
            </div>
            <div className="col-6 text-end">
              <p className="footer-privacy">
                <span className="cursor-pointer"> Privacy Policy </span>
                &nbsp; |&nbsp;{" "}
                <span className="cursor-pointer"> Terms & Conditions</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
