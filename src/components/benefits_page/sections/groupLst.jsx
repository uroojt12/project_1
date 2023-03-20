import React from "react";

const GroupLst = ({ val }) => {
  return (
    <div className="col">
      <div className="inner">
        <div className="icon">
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

export default GroupLst;
