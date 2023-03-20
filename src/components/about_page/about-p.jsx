import React from "react";
const Aboutp = ({ data }) => {
  return (
    <>
      <section id="about-image">
        <div className="contain">
          <div className="text">
            <div className="flex">
              <div className="col">
                <h2>{data.heading}</h2>
                {data.para.map((val) => {
                  return <p key={val.id}>{val.s_para}</p>;
                })}
              </div>
              <div className="colr">
                <div className="image">
                  <img src={data.src} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Aboutp;
