import React from "react";

const TestiLst = ({ val }) => {
  return (
    <div className="inner" key={val.id}>
      <div className="content">
        <div className="ico">
          <img src={val.src} alt="" />
        </div>
        <p>
          <strong>{val.strong}</strong> {val.para}
          <ul>
            {val.ul.map((val1) => {
              return <li key={val1.id}>{val1.li}</li>;
            })}
          </ul>
        </p>
        <div className="icoBlk">
          <h5>
            {val.name}
            <span>{val.span}</span>
          </h5>
        </div>
      </div>
    </div>
    // <div className="col" key={val.id}>
    //   <div className="inner">
    //     <div className="icon">
    //       <img src={val.src} alt="" />
    //     </div>
    //     <div className="cntnt">
    //       <h4>{val.heading_3}</h4>
    //       <span className="line"></span>
    //       <p>{val.para}</p>
    //     </div>
    //   </div>
    // </div>
  );
};

export default TestiLst;
