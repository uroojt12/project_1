import React from "react";
import { NavLink } from "react-router-dom";

const Epolicy = ({ data }) => {
  return (
    <>
      <section id="policy" className="policy">
        <div className="contain">
          <div className="flex">
            <div className="col">
              <div className="image">
                <img src={data.src} alt="" />
              </div>
            </div>
            <div className="colr">
              <h2>{data.heading}</h2>
              <p>{data.para_1}</p>
              <p>{data.para_2}</p>
              <NavLink to={data.btn1_link} className="webBtn arrowBtn">
                {data.btn1_txt}
                <i className="fa-regular fa-arrow-right"></i>
              </NavLink>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Epolicy;
