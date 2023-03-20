import React from "react";
import { NavLink } from "react-router-dom";
const Footer = () => {
  return (
    <>
      <footer>
        <div className="contain">
          <div className="flexRow flex">
            <div className="col">
              <h5>About Company</h5>
              <p>
                Novellus innovative solutions are designed from scratch to
                disrupt the traditional model of measuring and covering risk
                purely from a business perspective.
              </p>
            </div>
            <div className="col">
              <h5>Website</h5>
              <ul className="lst">
                <li>
                  <NavLink to="/">About Us</NavLink>
                </li>
                <li>
                  <NavLink to="/">Employe Benefits</NavLink>
                </li>
                <li>
                  <NavLink to="/">Business Insurance</NavLink>
                </li>
                <li>
                  <NavLink to="/">Request a Quote</NavLink>
                </li>
              </ul>
            </div>
            <div className="col">
              <h5>Get in Touch</h5>
              <ul className="lst infoLst">
                <li>
                  <img src="images/location-dot.svg" alt="" />
                  <span>5851 Legacy Circle #600 Plano TX 75024</span>
                </li>
                <li>
                  <img src="images/envelope.svg" alt="" />
                  <NavLink to="/">info@novellusga.com</NavLink>
                </li>
                <li>
                  <img src="images/phone.svg" alt="" />
                  <NavLink to="/">469-310-8817</NavLink>
                </li>
              </ul>
            </div>
            <div className="col">
              <div className="bTn">
                <NavLink to="/" className="webBtn lightBtn">
                  Get a Quote
                </NavLink>
              </div>
              <ul className="social flex">
                <li>
                  <NavLink to="/" target="_blank">
                    <img src="images/facebook-f.svg" alt="" />
                  </NavLink>
                </li>

                <li>
                  <NavLink href="" target="_blank">
                    <img src="images/twitter.svg" alt="" />
                  </NavLink>
                </li>

                <li>
                  <NavLink href="" target="_blank">
                    <img src="images/instagram.svg" alt="" />
                  </NavLink>
                </li>

                <li>
                  <NavLink href="" target="_blank">
                    <img src="images/youtube.svg" alt="" />
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="copyright relative">
          <div className="contain">
            <div className="inner">
              <p>
                Copyright ©{" "}
                <NavLink to="/" className="regular">
                  Novellus
                </NavLink>
                . All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
