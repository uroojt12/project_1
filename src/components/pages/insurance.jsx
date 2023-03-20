import React from "react";
import Cbanner from "../common_section/cbanner";
import Ins from "../business_page/ins";
import Quote from "../common_section/quote";

const Insurance = () => {
  const insurance = {
    banner: {
      heading: "Our Insurance Products",
      para: "At Novellus Insurance, we offer a wide range of business insurance options to suit your company's unique needs. Some of the types of business insurance we offer include:",
    },
    insurance_1: {
      block: [
        {
          id: 1,
          src: "images/service-1.svg",
          s_heading: "General Liability Insurance",
          para: "This type of insurance is designed to protect your business from losses or damage to your property. It can cover costs associated with damage to buildings, equipment, and inventory. Property insurance can also cover loss of income if your business is forced to close due to damage to your property.",
        },
        {
          id: 2,
          src: "images/service-1.svg",
          s_heading: "General Liability Insurance",
          para: "This type of insurance is designed to protect your business from losses or damage to your property. It can cover costs associated with damage to buildings, equipment, and inventory. Property insurance can also cover loss of income if your business is forced to close due to damage to your property.",
        },
        {
          id: 3,
          src: "images/service-1.svg",
          s_heading: "General Liability Insurance",
          para: "This type of insurance is designed to protect your business from losses or damage to your property. It can cover costs associated with damage to buildings, equipment, and inventory. Property insurance can also cover loss of income if your business is forced to close due to damage to your property.",
        },
        {
          id: 4,
          src: "images/service-1.svg",
          s_heading: "General Liability Insurance",
          para: "This type of insurance is designed to protect your business from losses or damage to your property. It can cover costs associated with damage to buildings, equipment, and inventory. Property insurance can also cover loss of income if your business is forced to close due to damage to your property.",
        },
        {
          id: 5,
          src: "images/service-1.svg",
          s_heading: "General Liability Insurance",
          para: "This type of insurance is designed to protect your business from losses or damage to your property. It can cover costs associated with damage to buildings, equipment, and inventory. Property insurance can also cover loss of income if your business is forced to close due to damage to your property.",
        },
        {
          id: 6,
          src: "images/service-1.svg",
          s_heading: "General Liability Insurance",
          para: "This type of insurance is designed to protect your business from losses or damage to your property. It can cover costs associated with damage to buildings, equipment, and inventory. Property insurance can also cover loss of income if your business is forced to close due to damage to your property.",
        },
        {
          id: 7,
          src: "images/service-1.svg",
          s_heading: "General Liability Insurance",
          para: "This type of insurance is designed to protect your business from losses or damage to your property. It can cover costs associated with damage to buildings, equipment, and inventory. Property insurance can also cover loss of income if your business is forced to close due to damage to your property.",
        },
        {
          id: 7,
          src: "images/service-1.svg",
          s_heading: "General Liability Insurance",
          para: "This type of insurance is designed to protect your business from losses or damage to your property. It can cover costs associated with damage to buildings, equipment, and inventory. Property insurance can also cover loss of income if your business is forced to close due to damage to your property.",
        },
        {
          id: 8,
          src: "images/service-1.svg",
          s_heading: "General Liability Insurance",
          para: "This type of insurance is designed to protect your business from losses or damage to your property. It can cover costs associated with damage to buildings, equipment, and inventory. Property insurance can also cover loss of income if your business is forced to close due to damage to your property.",
        },
        {
          id: 9,
          src: "images/service-1.svg",
          s_heading: "General Liability Insurance",
          para: "This type of insurance is designed to protect your business from losses or damage to your property. It can cover costs associated with damage to buildings, equipment, and inventory. Property insurance can also cover loss of income if your business is forced to close due to damage to your property.",
        },
        {
          id: 10,
          src: "images/service-1.svg",
          s_heading: "General Liability Insurance",
          para: "This type of insurance is designed to protect your business from losses or damage to your property. It can cover costs associated with damage to buildings, equipment, and inventory. Property insurance can also cover loss of income if your business is forced to close due to damage to your property.",
        },
      ],
    },
    quote_1: {
      heading: "That delights your customers and increase your insurance",
      src: "/images/open-message.png",
      src_1: "images/icon-search.svg",
      btn_1: "Sign Up Free",
    },
  };
  return (
    <>
      <Cbanner data={insurance.banner} />
      <Ins data={insurance.insurance_1} />
      <Quote data={insurance.quote_1} />
    </>
  );
};

export default Insurance;
