import React from "react";
import { NavLink } from "react-router-dom";

const Qform = () => {
  return (
    <>
      <section id="quote">
        <div className="choose_shape">
          <img src="images/intro2.png" alt="" />
        </div>
        <div className="contain">
          <div className="content_center">
            <h2>Get a Quote</h2>
          </div>
          <form action="" method="post" autocomplete="off">
            <div className="row formRow">
              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 col-xx-12">
                <div className="txtGrp">
                  <input
                    className="txtBox"
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Business Name"
                  />
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 col-xx-6">
                <div className="txtGrp">
                  <select name="" id="" className="txtBox">
                    <option value="">Business Type</option>
                    <option value="">Retail</option>
                    <option value="">Manufacturing</option>
                    <option value="">Service-based</option>
                  </select>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 col-xx-6">
                <div className="txtGrp">
                  <input
                    className="txtBox"
                    id="subject"
                    name="subject"
                    type="text"
                    placeholder="Business Address"
                  />
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 col-xx-6">
                <div className="txtGrp">
                  <input
                    className="txtBox"
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Business Description"
                  />
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 col-xx-6">
                <div className="txtGrp">
                  <input
                    className="txtBox"
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Contact Information"
                  />
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 col-xx-6">
                <div className="txtGrp">
                  <input
                    className="txtBox"
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Number of Employees"
                  />
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 col-xx-6">
                <div className="txtGrp">
                  <input
                    className="txtBox"
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Annual Revenue"
                  />
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 col-xx-6">
                <div className="txtGrp">
                  <select name="" id="" className="txtBox">
                    <option value="">Insurance Coverage Types</option>
                    <option value="">General liability</option>
                    <option value="">Property</option>
                    <option value="">Workers</option>
                    <option value="">Compensation</option>
                  </select>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 col-xx-6">
                <div className="txtGrp">
                  <input
                    className="txtBox"
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Additional Coverage Needs:"
                  />
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 col-xx-6">
                <div className="txtGrp">
                  <input
                    className="txtBox"
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Previous Insurance Provider"
                  />
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 col-xx-6">
                <div className="txtGrp">
                  <input
                    className="txtBox"
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Policy Expiration Date"
                  />
                </div>
              </div>
              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 col-xx-12">
                <div className="txtGrp">
                  <textarea
                    className="txtBox"
                    id="comment"
                    name="msg"
                    placeholder="Additional Notes"
                  ></textarea>
                </div>
              </div>
            </div>
            <div className="bTn formBtn text-center">
              <button type="submit" className="webBtn ">
                Submit <i className="spinner hidden"></i>
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};
export default Qform;
