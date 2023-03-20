import React from "react";
import Epolicy from "../benefits_page/Epolicy";
import Cbanner from "../common_section/cbanner";
import Quote from "../common_section/quote";
import Ehealth from "../benefits_page/ehealth";

const Benefits = () => {
  const benefit = {
    banner: {
      heading: "Our Insurance Products",
      para: "At Novellus Insurance, we offer a wide range of business insurance options to suit your company's unique needs. Some of the types of business insurance we offer include:",
    },
    epolicy_1: {
      src: "/images/Public health-amico.svg",
      heading: "Revolutionary healthcare model",
      para_1:
        "Novellus Day 1 Health Plan is a revolutionary healthcare model that changes how people think about healthcare. ND1HP is a non-insurance-based healthcare model that provides individuals and families with a flat monthly fee for a defined set of primary care services. Unlike traditional healthcare models, ND1HP is designed to put the patient-physician relationship at the forefront to provide high-quality care at a lower cost.",
      para_2:
        "With DPC, members have timely and unlimited access to their physician through in-office visits or over the phone. This allows for more personalized care, with physicians having the time and resources to truly get to know their patients and understand their unique healthcare needs.",
      btn1_txt: "Get Started",
      btn1_link: "/",
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
          src: "/images/insurance2.png",
          heading: "Group Health Insurance",
          para: "This type of insurance is designed for businesses and organizations that want to provide health insurance to their employees. Group health insurance plans are typically more cost-effective than individual plans. They can cover medical expenses, including doctor visits, hospital stays, and prescription drugs. Group health insurance plans can also be customized to meet the organization's and its employees' specific needs.",
        },
        {
          id: 2,
          src: "/images/insurance2.png",
          heading: "Group Health Insurance",
          para: "This type of insurance is designed for businesses and organizations that want to provide health insurance to their employees. Group health insurance plans are typically more cost-effective than individual plans. They can cover medical expenses, including doctor visits, hospital stays, and prescription drugs. Group health insurance plans can also be customized to meet the organization's and its employees' specific needs.",
        },
        {
          id: 3,
          src: "/images/insurance2.png",
          heading: "Group Health Insurance",
          para: "This type of insurance is designed for businesses and organizations that want to provide health insurance to their employees. Group health insurance plans are typically more cost-effective than individual plans. They can cover medical expenses, including doctor visits, hospital stays, and prescription drugs. Group health insurance plans can also be customized to meet the organization's and its employees' specific needs.",
        },
        {
          id: 4,
          src: "/images/insurance2.png",
          heading: "Group Health Insurance",
          para: "This type of insurance is designed for businesses and organizations that want to provide health insurance to their employees. Group health insurance plans are typically more cost-effective than individual plans. They can cover medical expenses, including doctor visits, hospital stays, and prescription drugs. Group health insurance plans can also be customized to meet the organization's and its employees' specific needs.",
        },
        {
          id: 5,
          src: "/images/insurance2.png",
          heading: "Group Health Insurance",
          para: "This type of insurance is designed for businesses and organizations that want to provide health insurance to their employees. Group health insurance plans are typically more cost-effective than individual plans. They can cover medical expenses, including doctor visits, hospital stays, and prescription drugs. Group health insurance plans can also be customized to meet the organization's and its employees' specific needs.",
        },
        {
          id: 6,
          src: "/images/insurance2.png",
          heading: "Group Health Insurance",
          para: "This type of insurance is designed for businesses and organizations that want to provide health insurance to their employees. Group health insurance plans are typically more cost-effective than individual plans. They can cover medical expenses, including doctor visits, hospital stays, and prescription drugs. Group health insurance plans can also be customized to meet the organization's and its employees' specific needs.",
        },
      ],
    },
  };
  return (
    <>
      <Cbanner data={benefit.banner} />
      <Epolicy data={benefit.epolicy_1} />
      <Quote data={benefit.quote_1} />
      <Ehealth data={benefit.group} />
    </>
  );
};

export default Benefits;
