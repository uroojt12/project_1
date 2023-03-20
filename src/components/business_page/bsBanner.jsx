import React from "react";
import { NavLink } from "react-router-dom";

const Bsbanner = () => {
  return (
    <>
      <section
        id="small-banner"
        style={{ backgroundImage: "url('images/sm-banner.png')" }}
      >
        <div className="contain">
          <div className="content">
            <h1>Our Insurance Products</h1>
            <p>
              At Novellus Insurance, we offer a wide range of business insurance
              options to suit your company's unique needs. Some of the types of
              business insurance we offer include:
            </p>
          </div>
        </div>
      </section>
    </>
  );
};
export default Bsbanner;
