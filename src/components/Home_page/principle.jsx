import React from "react";
import { NavLink } from "react-router-dom";

const Principle = ({ data }) => {
  return (
    <>
      <section id="policy">
        <div className="contain">
          <div className="flex">
            <div className="col">
              <div className="image">
                <img src={data.src} alt="" />
              </div>
            </div>
            <div className="colr">
              <div className="title">{data.title} </div>
              <h2>{data.heading} </h2>
              <ul>
                {data.ul.map((val) => {
                  return (
                    <li key={val.id}>
                      <strong>{val.strong}</strong> {val.li}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Principle;
