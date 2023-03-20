import React from "react";

const IntroLst = ({ val }) => {
  return (
    <div className="col" key={val.id}>
      <div className="inner">
        <div className="icon">
          <img src={val.src} alt="" />
        </div>
        <div className="cntnt">
          <h4>{val.heading_3}</h4>
          <span className="line"></span>
          <p>{val.para}</p>
        </div>
      </div>
    </div>
  );
};

export default IntroLst;
