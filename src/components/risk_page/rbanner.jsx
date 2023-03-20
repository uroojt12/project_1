import React from "react";
import { NavLink } from "react-router-dom";

const Rbanner = () => {
  return (
    <>
      <section
        id="small-banner"
        style={{ backgroundImage: "url('images/sm-banner.png')" }}
      >
        <div className="contain">
          <div className="content">
            <h1>Risk Managment</h1>
            <p>
              At Novellus Insurance, we understand that managing risk is
              important to running a successful business. That's why we offer a
              wide range of services to help businesses identify, assess, and
              manage risk. Some examples of the services we offer to help
              businesses manage risk include:
            </p>
          </div>
        </div>
      </section>
    </>
  );
};
export default Rbanner;
