import React from "react";
import { NavLink } from "react-router-dom";

const Quote = ({ data }) => {
  return (
    <>
      <section id="get_free_quote" className="quote">
        <div className="contain">
          <div className="inner_blk">
            <div className="content_center">
              <h2>{data.heading}</h2>
            </div>
            <div className="fff">
              <form action="" className="srchBar">
                <div className="txtGrp dropDown srchGrp">
                  <img src={data.src} alt="" />
                  <input
                    type="text"
                    className="txtBox"
                    placeholder="Business Email?"
                  />
                </div>
                <div className="bTn">
                  <button type="submit" className="webBtn ">
                    <img src={data.src_1} alt="" />
                    {data.btn_1}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Quote;
