import React from "react";
import { NavLink } from "react-router-dom";

const Policy = ({ data }) => {
  return (
    <>
      <section id="policy">
        <div className="contain">
          <div className="flex">
            <div className="col">
              <div className="image">
                <img src={data.src} alt="" />
              </div>
            </div>
            <div className="colr">
              <div className="title">{data.title}</div>
              <h2>{data.heading}</h2>
              <p>{data.para}</p>
              <ul>
                {/* <li>
                  {" "}
                  <strong> We are Novellus</strong> agency with deep rooted
                  family values and world-className corporate culture and
                  discipline.
                </li>
                <li>
                  <strong>Streamlined options</strong> we offer multiple lines
                  at best prices. One call, one team. Available 24x7.
                </li>
                <li>
                  <strong> Unparalleled service</strong> no one will out-serve
                  us. Clear line of sight to our full-service executive and
                  support team.
                </li>
                <li>
                  <strong>Real world industry experience</strong> been there
                  done that – executive team includes entrepreneurs and
                  operators with deep business expertise in retail, real estate,
                  food and beverage, hospitality, technology, logistics, and
                  sports and entertainment.{" "}
                </li> */}
                <ul>
                  {data.ul.map((val) => {
                    return (
                      <li key={val.id}>
                        <strong>{val.strong}</strong> {val.li}
                      </li>
                    );
                  })}
                </ul>
              </ul>
              <p>{data.para_2}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Policy;
