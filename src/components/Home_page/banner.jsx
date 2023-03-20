import React from "react";
import { NavLink } from "react-router-dom";

const Banner = ({ data }) => {
  return (
    <>
      <section id="banner">
        <div className="contain">
          <div className="flex">
            <div className="col">
              <div className="title">{data.title_1}</div>
              <h1>{data.heading}</h1>
              <p>{data.para}</p>
              <NavLink to={data.btn_link_01} className="webBtn arrowBtn">
                {data.btn_01}
                <i className="fa-regular fa-arrow-right"></i>
              </NavLink>
            </div>
            <div className="colr">
              <div className="image">
                <img src={data.image_b} />
              </div>
              <div className="experience_blk">
                <span>{data.h_span}</span>
                <em>{data.h_em}</em>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Banner;
