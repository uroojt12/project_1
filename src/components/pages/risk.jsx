import React from "react";
import Rsafety from "../risk_page/rsafety";
import Cbanner from "../common_section/cbanner";
import Quote from "../common_section/quote";

const Risk = () => {
  const risk = {
    banner: {
      heading: "Risk Managment",
      para: "At Novellus Insurance, we understand that managing risk is important to running a successful business. That's why we offer a wide range of services to help businesses identify, assess, and manage risk. Some examples of the services we offer to help businesses manage risk include",
    },
    quote_1: {
      heading: "That delights your customers and increase your insurance",
      src: "/images/open-message.png",
      src_1: "images/icon-search.svg",
      btn_1: "Sign Up Free",
    },
    group: {
      block: [
        {
          id: 1,
          src: "/images/r1.png",
          heading: "Risk assessments",
          para: "We conduct comprehensive risk assessments to identify potential hazards and vulnerabilities within a business. This includes identifying potential risks to employees, customers, and the organization.",
        },
        {
          id: 2,
          src: "/images/r2.png",
          heading: "Risk assessments",
          para: "We conduct comprehensive risk assessments to identify potential hazards and vulnerabilities within a business. This includes identifying potential risks to employees, customers, and the organization.",
        },
        {
          id: 3,
          src: "/images/r3.png",
          heading: "Risk assessments",
          para: "We conduct comprehensive risk assessments to identify potential hazards and vulnerabilities within a business. This includes identifying potential risks to employees, customers, and the organization.",
        },
        {
          id: 4,
          src: "/images/r3.png",
          heading: "Risk assessments",
          para: "We conduct comprehensive risk assessments to identify potential hazards and vulnerabilities within a business. This includes identifying potential risks to employees, customers, and the organization.",
        },
        {
          id: 5,
          src: "/images/r1.png",
          heading: "Risk assessments",
          para: "We conduct comprehensive risk assessments to identify potential hazards and vulnerabilities within a business. This includes identifying potential risks to employees, customers, and the organization.",
        },
        {
          id: 6,
          src: "/images/r2.png",
          heading: "Risk assessments",
          para: "We conduct comprehensive risk assessments to identify potential hazards and vulnerabilities within a business. This includes identifying potential risks to employees, customers, and the organization.",
        },
      ],
    },
  };
  return (
    <>
      <Cbanner data={risk.banner} />
      <Rsafety data={risk.group} />
      <Quote data={risk.quote_1} />
    </>
  );
};

export default Risk;
