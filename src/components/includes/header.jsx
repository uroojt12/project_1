import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [menuToggle, setMenueToggle] = useState(false);
  function toggleMenu() {
    setMenueToggle(!menuToggle);
  }
  return (
    <>
      <header className="ease">
        <div className="contain">
          <div className="logo ease">
            <NavLink to="/">
              <img src="images/logo.png" alt="" />
            </NavLink>
          </div>
          <div
            className={menuToggle === true ? "toggle active" : "toggle"}
            onClick={toggleMenu}
          >
            <span></span>
          </div>
          <nav className={menuToggle === true ? "ease active" : "ease"}>
            <ul id="nav">
              <li>
                <NavLink to="insurance">Business Insurance</NavLink>
              </li>
              <li>
                <NavLink to="benefits">Employee Benefits</NavLink>
              </li>
              <li>
                <NavLink to="risk">Risk Managment</NavLink>
              </li>
              <li>
                <NavLink to="about">About Us</NavLink>
              </li>
              {/* <li>
                <NavLink to="request">Request a Quote</NavLink>
              </li> */}
            </ul>
            <ul id="cta">
              <li>
                <NavLink to="contact" className="webBtn">
                  Contact Us
                </NavLink>
              </li>
            </ul>
          </nav>
          <div className="clearfix"></div>
        </div>
      </header>
    </>
  );
};
export default Header;
