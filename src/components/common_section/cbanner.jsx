import React from "react";
const Cbanner = ({ data }) => {
  return (
    <>
      <section
        id="small-banner"
        className="contact"
        style={{ backgroundImage: "url('images/sm-banner.png')" }}
      >
        <div className="contain">
          <div className="content">
            <h1>{data.heading}</h1>
            <p>{data.para}</p>
          </div>
        </div>
      </section>
    </>
  );
};
export default Cbanner;
