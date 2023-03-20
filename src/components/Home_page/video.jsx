import React, { useState } from "react";

const Video = ({ data }) => {
  const [videoPopup, setVideoPopup] = useState(false);
  return (
    <>
      <section id="video">
        <div className="contain">
          <div className="flex">
            <div className="col">
              <div className="cntnt">
                <h2>{data.heading}</h2>
                <p>{data.para_1}</p>
                <p>{data.para_2}</p>
                <h3>{data.sub_head}</h3>
                <p>{data.para_3}</p>
              </div>
              <div className="video_links" onClick={() => setVideoPopup(true)}>
                <span>
                  <img src="/images/video_icon.svg" alt="" />
                </span>
                <p>
                  {data.para_4} <em>{data.em}</em>
                </p>
              </div>
            </div>
            <div className="colr">
              <div className="image5">
                <img src={data.src} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {videoPopup === true ? (
        <div className="popup" style={{ display: "block" }}>
          <div className="tableDv">
            <div className="tableCell">
              <div className="contain">
                <div className="_inner">
                  <div
                    className="crosBtn"
                    onClick={() => setVideoPopup(false)}
                  ></div>
                  <h1>Hi thats me popup</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};
export default Video;
