import React from "react";
import AbFlex from "../about_page/sections/abflex";
const Team = ({ data }) => {
  return (
    <>
      <section className="team">
        <div className="contain">
          <div className="content_center">
            <h2>{data.heading}</h2>
          </div>
          {data.block.map((val) => {
            return <AbFlex val={val} />;
          })}
          {/* <div className="flex">
            <div className="col colL">
              <div className="inner">
                <h2>{data.s_heading}</h2>
                {data.para.map((val) => {
                  return <p key={val.id}>{val.para}</p>;
                })}
                <ul>
                  <li>
                    <a href="mailto:deepen.patel@novellusga.com">
                      <img src={data.icon_1} alt="" />
                    </a>
                  </li>
                  <li>
                    <a href="tel:972-989-8455">
                      <img src={data.icon_2} alt="" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col colR">
              <div className="inner">
                <div className="image">
                  <img src={data.src} alt="" />
                </div>
              </div>
            </div>
          </div>

          <div className="flex">
            <div className="col colL">
              <div className="inner">
                <h2>Chris Jenkins</h2>
                <p>
                  Chris Jenkins is the Head of the Property &amp; Casualty
                  Division at Novellus Insurance, a leading provider of
                  insurance solutions. With over 15 years of experience in the
                  industry, Chris is an accomplished professional with a deep
                  understanding of property and casualty insurance products.
                </p>
                <p>
                  Chris began his career in the insurance industry as an
                  underwriter, quickly rising through the ranks to become a
                  senior underwriter and team leader. Throughout his career, he
                  has worked with a wide range of clients, from small businesses
                  to large corporations, helping them to find the right
                  insurance coverage to protect their assets and mitigate risk.
                </p>
                <p>
                  In his current role at Novellus, Chris leads a team of experts
                  in the property and casualty division, working closely with
                  clients to understand their unique insurance needs and create
                  customized solutions. He is known for his ability to think
                  strategically and his deep understanding of the insurance
                  market. Chris also has a strong expertise in specialty
                  insurance products, which allows him to provide a
                  comprehensive coverage solution to his clients. He is
                  dedicated to providing outstanding customer service and is
                  committed to helping clients understand and navigate the
                  complex world of insurance.
                </p>
                <p>
                  With a proven track record of success and a passion for
                  helping businesses and individuals protect their assets, Chris
                  Jenkins is an industry veteran and a valuable member of the
                  Novellus team.
                </p>
                <ul>
                  <li>
                    <a href="mailto:chris.jenkins@novellusga.com">
                      <img src="images/envelope.svg" alt="" />
                    </a>
                  </li>
                  <li>
                    <a href="tel:312-945-9288">
                      <img src="images/phone.svg" alt="" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col colR">
              <div className="inner">
                <div className="image">
                  <img src="images/team11.jpg" />
                </div>
              </div>
            </div>
          </div>

          <div className="flex">
            <div className="col colL">
              <div className="inner">
                <h2>Nelson Votaw</h2>
                <p>
                  Meet Nelson Votaw, the Head of Employee Benefits Division at
                  Novellus Insurance. With over 20 years of experience in the
                  insurance industry, Nelson has become a true expert in
                  employee benefits products. He has a deep understanding of the
                  complex landscape of employee benefits and has helped
                  countless businesses and organizations navigate the process of
                  creating and maintaining effective employee benefits plans.
                </p>
                <p>
                  Nelson began his career as an employee benefits consultant,
                  working with businesses of all sizes to create customized
                  benefits packages that met the unique needs of their
                  employees. Over the years, he has gained a reputation for his
                  ability to understand the specific needs of each of his
                  clients and create solutions that are tailored to their unique
                  circumstances.
                </p>
                <p>
                  In his current role at Novellus Insurance, Nelson leads a team
                  of benefits experts who work closely with clients to
                  understand their needs and create solutions that are both
                  cost-effective and comprehensive. He is dedicated to helping
                  businesses of all sizes navigate the ever-changing landscape
                  of employee benefits and ensure that their employees have
                  access to the coverage they need to stay healthy and
                  financially secure. With Nelson's leadership, Novellus
                  Insurance has become a go-to resource for businesses looking
                  to provide their employees with the best benefits packages
                  available.
                </p>
                <ul>
                  <li>
                    <a href="mailto:nelson.votaw@novellusga.com">
                      <img src="images/envelope.svg" alt="" />
                    </a>
                  </li>
                  <li>
                    <a href="tel:918-640-9267">
                      <img src="images/phone.svg" alt="" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col colR">
              <div className="inner">
                <div className="image">
                  <img src="images/team12.jpg" />
                </div>
              </div>
            </div>
          </div>

          <div className="flex">
            <div className="col colL">
              <div className="inner">
                <h2>Ryan Kusev</h2>
                <p>
                  Meet Ryan Kusev, the Head of Account Management at Novellus
                  Insurance. With over 10 years of experience in the insurance
                  sector, Ryan is a seasoned professional who brings a wealth of
                  knowledge and expertise to our team.
                </p>
                <p>
                  As the head of account management, Ryan plays a critical role
                  in managing all client relationships at Novellus. He is
                  responsible for ensuring that our clients are satisfied with
                  the services we provide, and that their insurance needs are
                  met in a timely and efficient manner. He is a key member of
                  our team who works closely with clients to understand their
                  specific needs and develop customized insurance solutions that
                  meet those needs.
                </p>
                <p>
                  Ryan's extensive experience in account management has helped
                  him develop strong relationships with clients, and he is known
                  for his ability to communicate effectively and build trust. He
                  is dedicated to providing the highest level of customer
                  service and is committed to ensuring that our clients are
                  satisfied with the services we provide.
                </p>
                <p>
                  At Novellus Insurance, we are proud to have Ryan Kusev on our
                  team. His expertise and dedication to customer service make
                  him a valuable asset to our organization, and we are confident
                  that he will continue to make a positive impact on our
                  clients' insurance needs.
                </p>
                <ul>
                  <li>
                    <a href="mailto:ryan.kusev@novellusga.com">
                      <img src="images/envelope.svg" alt="" />
                    </a>
                  </li>
                  <li>
                    <a href="tel:407-314-5148">
                      <img src="images/phone.svg" alt="" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col colR">
              <div className="inner">
                <div className="image">
                  <img src="images/team9.jpg" />
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </section>
    </>
  );
};
export default Team;
