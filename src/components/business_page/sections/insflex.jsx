import React from "react";

const InsFlex = ({ val }) => {
  return (
    <div className="col">
      <div className="inner">
        <div className="image">
          <img src={val.src} alt="" />
        </div>
        <div className="text">
          <h3>{val.s_heading}</h3>
          <p>{val.para}</p>
        </div>
      </div>
    </div>
  );
};

export default InsFlex;
