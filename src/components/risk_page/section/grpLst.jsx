import React from "react";

const GrpLst = ({ val }) => {
  return (
    <div className="col">
      <div className="inner">
        <div className="image">
          <img src={val.src} alt="" />
        </div>
        <div className="text">
          <h3>{val.heading}</h3>
          <p>{val.para}</p>
        </div>
      </div>
    </div>
  );
};

export default GrpLst;
