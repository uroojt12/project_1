import React from "react";
import { NavLink } from "react-router-dom";
import IntroLst from "./sections/introLst";

const Intro = ({ data }) => {
  return (
    <>
      <section id="intro">
        <div className="contain">
          <div className="left_text text-center">
            <h2>{data.heading}</h2>
            <p>{data.para}</p>
            <h5>{data.heading_2}</h5>
          </div>
          <div className="flex">
            {data.block.map((val) => {
              return <IntroLst val={val} />;
            })}
          </div>
        </div>
        <div className="choose_shape">
          <img src="images/intro2.png" alt="" />
        </div>
      </section>
    </>
  );
};
export default Intro;
