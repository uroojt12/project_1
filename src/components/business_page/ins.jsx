import React from "react";
import InsFlex from "../business_page/sections/insflex";
const Ins = ({ data }) => {
  return (
    <>
      <section id="insurances">
        <div className="contain">
          <div className="flex">
            {data.block.map((val) => {
              return <InsFlex val={val} />;
            })}
            {/* <div className="col">
              <div className="inner">
                <div className="image">
                  <img src="images/service-1.svg" alt="" />
                </div>
                <div className="text">
                  <h3>General Liability Insurance</h3>
                  <p>
                    This type of insurance is designed to protect your business
                    from losses or damage to your property. It can cover costs
                    associated with damage to buildings, equipment, and
                    inventory. Property insurance can also cover loss of income
                    if your business is forced to close due to damage to your
                    property.
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="inner">
                <div className="image">
                  <img src="images/service-2.svg" alt="" />
                </div>
                <div className="text">
                  <h3>Property Insurance</h3>
                  <p>
                    This type of insurance is designed to protect your business
                    from losses or damage to your property. It can cover costs
                    associated with damage to buildings, equipment, and
                    inventory. Property insurance can also cover loss of income
                    if your business is forced to close due to damage to your
                    property.
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="inner">
                <div className="image">
                  <img src="images/service-3.svg" alt="" />
                </div>
                <div className="text">
                  <h3>Workers' Compensation Insurance</h3>
                  <p>
                    This type of insurance is designed to protect your business
                    from claims made by injured employees or become ill due to
                    their work. It can cover costs associated with medical
                    expenses, lost wages, and disability benefits. Workers'
                    compensation insurance is typically required by law. It can
                    also protect your business from lawsuits related to employee
                    injuries or illnesses.
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="inner">
                <div className="image">
                  <img src="images/service-4.svg" alt="" />
                </div>
                <div className="text">
                  <h3>Cyber Liability Insurance</h3>
                  <p>
                    This type of insurance is designed to protect your business
                    from losses or damage related to data breaches,
                    cyber-attacks, and other types of digital risks. It can
                    cover costs associated with the notification, credit
                    monitoring, and legal fees. Cyber liability insurance is
                    becoming more critical as technology becomes more prevalent
                    in businesses
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="inner">
                <div className="image">
                  <img src="images/service-5.svg" alt="" />
                </div>
                <div className="text">
                  <h3>Product Liability Insurance</h3>
                  <p>
                    This type of insurance is designed to protect your business
                    from claims made by customers who are injured or become ill
                    from using your product. It can cover costs associated with
                    medical expenses, legal fees, and settlements or judgments.
                    Product liability insurance is essential for companies that
                    manufacture or sell products
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="inner">
                <div className="image">
                  <img src="images/service-6.svg" alt="" />
                </div>
                <div className="text">
                  <h3>Directors and Officers (D&amp;O) Insurance</h3>
                  <p>
                    This type of insurance is designed to protect your business
                    from losses or damage to your property. It can cover costs
                    associated with damage to buildings, equipment, and
                    inventory. Property insurance can also cover loss of income
                    if your business is forced to close due to damage to your
                    property.
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="inner">
                <div className="image">
                  <img src="images/service-7.svg" alt="" />
                </div>
                <div className="text">
                  <h3>Professional Liability Insurance</h3>
                  <p>
                    This type of insurance is designed to protect your business
                    from losses or damage to your property. It can cover costs
                    associated with damage to buildings, equipment, and
                    inventory. Property insurance can also cover loss of income
                    if your business is forced to close due to damage to your
                    property.
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="inner">
                <div className="image">
                  <img src="images/service-8.svg" alt="" />
                </div>
                <div className="text">
                  <h3>Environmental Liability Insurance</h3>
                  <p>
                    This type of insurance is designed to protect your business
                    from losses or damage to your property. It can cover costs
                    associated with damage to buildings, equipment, and
                    inventory. Property insurance can also cover loss of income
                    if your business is forced to close due to damage to your
                    property.
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="inner">
                <div className="image">
                  <img src="images/service-3.svg" alt="" />
                </div>
                <div className="text">
                  <h3>Bespoke</h3>
                  <p>
                    This type of insurance is designed to protect your business
                    from losses or damage to your property. It can cover costs
                    associated with damage to buildings, equipment, and
                    inventory. Property insurance can also cover loss of income
                    if your business is forced to close due to damage to your
                    property.
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="inner">
                <div className="image">
                  <img src="images/service-1.svg" alt="" />
                </div>
                <div className="text">
                  <h3>Speciality box</h3>
                  <p>
                    This type of insurance is designed to protect your business
                    from losses or damage to your property. It can cover costs
                    associated with damage to buildings, equipment, and
                    inventory. Property insurance can also cover loss of income
                    if your business is forced to close due to damage to your
                    property.
                  </p>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </section>
    </>
  );
};
export default Ins;
