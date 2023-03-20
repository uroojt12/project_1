import React from "react";
import GrpLst from "../risk_page/section/grpLst";
const Rsafety = ({ data }) => {
  return (
    <>
      <section id="risk">
        <div className="contain">
          <div className="flex">
            {data.block.map((val) => {
              return <GrpLst val={val} />;
            })}
          </div>
        </div>
      </section>
    </>
  );
};
export default Rsafety;
