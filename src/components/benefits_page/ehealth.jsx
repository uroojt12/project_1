import React from "react";
import GroupLst from "../benefits_page/sections/groupLst";
const Ehealth = ({ data }) => {
  return (
    <>
      <section id="employe-benefits">
        <div className="contain">
          <div className="flex">
            {data.block.map((val) => {
              return <GroupLst val={val} />;
            })}
          </div>
        </div>
      </section>
    </>
  );
};
export default Ehealth;
