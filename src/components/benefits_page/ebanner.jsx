import React from "react";
import { NavLink } from "react-router-dom";
const Ebanner = () => {
  return (
    <>
      <section
        id="small-banner"
        style={{ backgroundImage: "url('images/sm-banner.png')" }}
      >
        <div className="contain">
          <div className="content">
            <h1>Employee benefits</h1>
            <p>
              {" "}
              At Novellus Insurance, we offer a wide range of health insurance
              options to suit individuals, families, and businesses unique
              needs. Some of the types of health insurance we offer include:
            </p>
          </div>
        </div>
      </section>
    </>
  );
};
export default Ebanner;
