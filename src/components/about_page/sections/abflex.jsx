import React from "react";

const AbFlex = ({ val }) => {
  return (
    <div className="flex">
      <div className="col colL">
        <div className="inner">
          <h2>{val.s_heading}</h2>
          {val.para.map((val_1) => {
            return <p key={val_1.id}>{val_1.para_1}</p>;
          })}
          <ul>
            <li>
              <a href="mailto:deepen.patel@novellusga.com">
                <img src={val.icon_1} alt="" />
              </a>
            </li>
            <li>
              <a href="tel:972-989-8455">
                <img src={val.icon_2} alt="" />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="col colR">
        <div className="inner">
          <div className="image">
            <img src={val.src} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AbFlex;
