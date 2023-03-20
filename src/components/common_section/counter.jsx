import React from "react";
import { NavLink } from "react-router-dom";
import CountLst from "../Home_page/sections/countLst";
const Counter = ({ data }) => {
  return (
    <>
      <section id="counter">
        <div className="contain">
          <div className="flex">
            <div className="colL">
              <div className="content_center">
                <h2>{data.heading}</h2>
              </div>
            </div>
            <div className="colR">
              <div className="flex flexRow" id="count">
                {data.block.map((val) => {
                  return <CountLst val={val} />;
                })}
                {/* <div className="col">
                  <div className="inner">
                    <h1>
                      <span className="count" data-count="100">
                        100
                      </span>
                    </h1>
                    <h4>years of experience</h4>
                  </div>
                </div>
                <div className="col">
                  <div className="inner">
                    <h1>
                      <span className="count" data-count="100">
                        100
                      </span>
                      %
                    </h1>
                    <h4>Referral rate</h4>
                  </div>
                </div>
                <div className="col">
                  <div className="inner">
                    <h1>
                      <span className="count" data-count="30">
                        30
                      </span>
                      %
                    </h1>
                    <h4>Growth Rate</h4>
                  </div>
                </div>
                <div className="col">
                  <div className="inner">
                    <h1>
                      <span className="count" data-count="25">
                        25
                      </span>
                      %+
                    </h1>
                    <h4>Average Savings</h4>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Counter;
