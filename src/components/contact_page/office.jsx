import React from "react";
import { NavLink } from "react-router-dom";

const Office = ({ data }) => {
  return (
    <>
      <section id="contact">
        <div className="contain">
          <ul className="infoLst flex text-center">
            <li>
              <div className="inner">
                <div className="icon">
                  <i className="fa-solid fa-location-dot"></i>
                </div>
                <h5>{data.headin_1}</h5>
                <span>{data.span_1}</span>
              </div>
            </li>
            <li>
              <div className="inner">
                <div className="icon">
                  <i className="fa-solid fa-phone"></i>
                </div>
                <h5>{data.headin_2}</h5>
                <a href="tel:469-310-8817">{data.span_2}</a>
              </div>
            </li>
            <li>
              <div className="inner">
                <div className="icon">
                  <i className="fa-solid fa-envelope"></i>
                </div>
                <h5>{data.headin_3}</h5>
                <a href="mailto:info@lmg.com">{data.span_3}</a>
              </div>
            </li>
          </ul>

          <div className="flex">
            <div className="col">
              <h2>{data.heading}</h2>
              <p>{data.para}</p>
              <div className="social">
                <i className="fa-brands fa-facebook-f"></i>
                <i className="fa-brands fa-instagram"></i>
                <i className="fa-brands fa-twitter"></i>
                <i className="fa-brands fa-linkedin-in"></i>
              </div>
            </div>
            <div className="colr">
              <form action="" method="post" autocomplete="off">
                <h3>{data.f_heading}</h3>
                <div className="row formRow">
                  <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 col-xx-6">
                    <div className="txtGrp">
                      <input
                        className="txtBox"
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Name"
                      />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 col-xx-6">
                    <div className="txtGrp">
                      <input
                        className="txtBox"
                        id="phone"
                        name="phone"
                        type="text"
                        placeholder="Phone"
                      />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 col-xx-6">
                    <div className="txtGrp">
                      <input
                        className="txtBox"
                        id="subject"
                        name="subject"
                        type="text"
                        placeholder="Subject"
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
                        placeholder="Email Address"
                      />
                    </div>
                  </div>
                  <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 col-xx-12">
                    <div className="txtGrp">
                      <textarea
                        className="txtBox"
                        id="comment"
                        name="msg"
                        placeholder="Comments"
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
          </div>
        </div>
      </section>
    </>
  );
};
export default Office;
