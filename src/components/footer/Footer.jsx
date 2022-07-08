import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
const Footer = () => {
  return (
    <>
      <footer className="footer-section">
        <div className="footer-top">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="widget company-intro-widget">
                  <Link to="/" className="site-logo">
                    <h1>DEBUG</h1>
                  </Link>
                  <p>
                    <big style={{fontWeight:'900px'}}>DEBUG</big> is a leading edTech company that provides 
                    industry best courses and help students to 
                    boost their career in Tech World.
                  </p>
                  <ul className="company-footer-contact-list">
                    <li>
                    Number: 0123456789
                    </li>
                    <li>
                    Timing: Mon - Sat 8.00 - 18.00
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6" style={{marginLeft:'160px'}}>
                <div className="widget course-links-widget">
                  <h5 className="widget-title">Popular Courses</h5>
                  <ul className="courses-link-list">
                    <li>
                      <Link to="/courses">
                        Web Development
                      </Link>
                    </li>
                    <li>
                      <Link to="/courses">
                        Mobile Development
                      </Link>
                    </li>
                    <li>
                      <Link to="/courses">
                       AI & ML
                      </Link>
                    </li>
                    <li>
                      <Link to="/courses">
                       Data Structure and Algorithms
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div
                className="col-lg-3 col-md-6 col-sm-6"
                style={{ marginLeft: "160px" }}
              >
                <div className="widget newsletter-widget">
                  <h5 className="widget-title">Contact Us</h5>
                  <div className="footer-newsletter">
                    <p></p>
                    <form className="news-letter-form">
                      <input
                        type="email"
                        name="news-email"
                        id="news-email"
                        placeholder="Your email address"
                      />
                      <Link to="/contactUs">
                        <input type="submit" value="Send" />
                      </Link>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-sm-6 text-sm-left text-center">
                <span className="copy-right-text">© 2022 All Rights Reserved.</span>
              </div>
              <div className="col-md-6 col-sm-6">
                <ul className="terms-privacy d-flex justify-content-sm-end justify-content-center">
                  <li>
                    <Link to="/">Terms & Conditions</Link>
                  </li>
                  <li>
                    <Link to="/">Privacy Policy</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
