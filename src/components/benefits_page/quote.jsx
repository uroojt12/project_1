import React from "react";
import { NavLink } from "react-router-dom";

const Quote = () => {
  return (
    <>
      <section id="get_free_quote" className="quote">
        <div className="contain">
          <div className="inner_blk">
            <div className="content_center">
              <h2>That delights your customers and increase your insurance</h2>
            </div>
            <div className="fff">
              <form action="" className="srchBar">
                <div className="txtGrp dropDown srchGrp">
                  <img src="images/open-message.png" alt="" />
                  <input
                    type="text"
                    className="txtBox"
                    placeholder="Business Email?"
                  />
                </div>
                <div className="bTn">
                  <button type="submit" className="webBtn ">
                    <img src="images/icon-search.svg" alt="" />
                    Sign Up Free
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
