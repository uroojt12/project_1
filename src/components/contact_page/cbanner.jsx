import React from "react";
import { NavLink } from "react-router-dom";

const Cbanner = () => {
  return (
    <>
      <section
        id="small-banner"
        className="contact"
        style={{ backgroundImage: "url('images/sm-banner.png')" }}
      >
        <div className="contain">
          <div className="content">
            <h1> Contact Us</h1>
          </div>
        </div>
      </section>
    </>
  );
};
export default Cbanner;
