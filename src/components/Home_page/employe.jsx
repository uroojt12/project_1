import React from "react";
import { NavLink } from "react-router-dom";
import EmpLst from "../Home_page/sections/empLst";

const Employe = ({ data }) => {
  return (
    <>
      <section id="employe-benefits" className="impact">
        <div className="contain">
          <div className="content_center">
            <h2>{data.heading}</h2>
          </div>
          <div className="flex">
            {data.block.map((val) => {
              return <EmpLst val={val} />;
            })}
          </div>
        </div>
        <div className="choose_shape">
          <img src={data.shape} alt="" />
        </div>
      </section>
    </>
  );
};
export default Employe;
