import React from "react";

const CountLst = ({ val }) => {
  return (
    <div className="col" key={val.id}>
      <div className="inner">
        <h1>
          <span className="count" data-count="100">
            {val.span}
          </span>
        </h1>
        <h4>{val.sub_heading}</h4>
      </div>
    </div>
    /* <div className="col" key={val.id}>
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
    </div> */
  );
};

export default CountLst;
