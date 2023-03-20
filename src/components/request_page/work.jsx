import React from "react";
import { NavLink } from "react-router-dom";

const Work = () => {
  return (
    <>
      <section className="we_work">
        <div className="contain">
          <div className="flex flexRow">
            <div className="col">
              <div className="inner">
                <div className="icon">
                  <img src="images/mail.png" alt="" />
                </div>
                <div className="content">
                  <h4>Contact us</h4>
                  <p>
                    The first step in obtaining a quote for business insurance
                    is to contact us directly. You can reach us via phone,
                    email, or our website's contact form.
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="inner">
                <div className="icon">
                  <img src="images/search.png" alt="" />
                </div>
                <div className="content">
                  <h4>Provide information</h4>
                  <p>
                    Our team of experts will work with you to understand your
                    business's unique needs and gather information about your
                    business, including the type of business, location, number
                    of employees, and other relevant details.
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="inner">
                <div className="icon">
                  <img src="images/request.png" alt="" />
                </div>
                <div className="content">
                  <h4>Receive a quote</h4>
                  <p>
                    Based on the information provided, we will generate a quote
                    for the coverage options that best meet your business's
                    needs. The quote will include the cost of the policy, the
                    coverage limits, and any additional options that may be
                    available.
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="inner">
                <div className="icon">
                  <img src="images/message.png" alt="" />
                </div>
                <div className="content">
                  <h4>Review and discuss</h4>
                  <p>
                    We will review the quote with you and discuss any questions
                    you may have about the coverage options. We will also
                    discuss any discounts or additional options that may be
                    available to you.
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="inner">
                <div className="icon">
                  <img src="images/order.png" alt="" />
                </div>
                <div className="content">
                  <h4>Purchase the policy</h4>
                  <p>
                    {" "}
                    Once you have reviewed and agreed to the coverage options
                    and cost, you can purchase the policy. We will work with you
                    to complete any required paperwork and ensure that your
                    policy is in force as soon as possible.
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="inner">
                <div className="icon">
                  <img src="images/compliant.png" alt="" />
                </div>
                <div className="content">
                  <h4>Policy review &amp; renewal</h4>
                  <p>
                    After the policy is in force, we will schedule regular
                    reviews to ensure that your coverage remains adequate and
                    explore any opportunities for premium savings. We will also
                    remind you of the policy's expiration date and help you
                    renew the policy in a timely manner.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Work;
