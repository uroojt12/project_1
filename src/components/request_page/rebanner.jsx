import React from "react";
import { NavLink } from "react-router-dom";

const Rebanner = () => {
  return (
    <>
      <section
        id="small-banner"
        style={{ backgroundImage: "url('images/sm-banner.png')" }}
      >
        <div className="contain">
          <div className="content">
            <h1>Experience insurance the Novellus way</h1>
            <p>
              customized coverage, expert guidance, and peace of mind. Please
              complete the form below and a member of our team will be in touch.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};
export default Rebanner;
