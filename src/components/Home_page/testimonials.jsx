import React from "react";
import { NavLink } from "react-router-dom";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import TestiLst from "../Home_page/sections/testiLast";
const Testimonials = ({ data }) => {
  return (
    <>
      <section id="folio">
        <div className="contain text-center">
          <div className="content_center">
            <div className="title">{data.title}</div>
            <h2>{data.heading}</h2>
          </div>
          <div className="owlBlock">
            <OwlCarousel className="owl-theme" loop margin={10} nav>
              {data.block.map((val) => {
                return <TestiLst val={val} />;
              })}
              {/* <div className="inner">
                <div className="content">
                  <div className="ico">
                    <img src="images/team/1.jpg" alt="" />
                  </div>
                  <p>
                    <strong>
                      {" "}
                      Implemented Day-1 Health Coverage (Novellus D1HC){" "}
                    </strong>{" "}
                    for PT/FT employees
                    <ul>
                      <li>
                        Helped business attract new employees in this tough
                        labor market.
                      </li>
                      <li>
                        Delivered a $440,000 FICA savings to employer at no
                        additional cost.
                      </li>
                    </ul>
                  </p>
                  <div className="icoBlk">
                    <h5>
                      Erika Zannie <span>Mountlake Terrace, WA</span>
                    </h5>
                  </div>
                </div>
              </div>
              <div className="inner">
                <div className="content">
                  <div className="ico">
                    <img src="images/team/1.jpg" alt="" />
                  </div>
                  <p>
                    <strong>
                      {" "}
                      Implemented Day-1 Health Coverage (Novellus D1HC){" "}
                    </strong>{" "}
                    for PT/FT employees
                    <ul>
                      <li>
                        Helped business attract new employees in this tough
                        labor market.
                      </li>
                      <li>
                        Delivered a $440,000 FICA savings to employer at no
                        additional cost.
                      </li>
                    </ul>
                  </p>
                  <div className="icoBlk">
                    <h5>
                      Erika Zannie <span>Mountlake Terrace, WA</span>
                    </h5>
                  </div>
                </div>
              </div>
              <div className="inner">
                <div className="content">
                  <div className="ico">
                    <img src="images/team/1.jpg" alt="" />
                  </div>
                  <p>
                    <strong>
                      {" "}
                      Implemented Day-1 Health Coverage (Novellus D1HC){" "}
                    </strong>{" "}
                    for PT/FT employees
                    <ul>
                      <li>
                        Helped business attract new employees in this tough
                        labor market.
                      </li>
                      <li>
                        Delivered a $440,000 FICA savings to employer at no
                        additional cost.
                      </li>
                    </ul>
                  </p>
                  <div className="icoBlk">
                    <h5>
                      Erika Zannie <span>Mountlake Terrace, WA</span>
                    </h5>
                  </div>
                </div>
              </div> */}
            </OwlCarousel>
          </div>
        </div>
      </section>
    </>
  );
};
export default Testimonials;
