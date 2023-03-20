import React from "react";
import Cbanner from "../common_section/cbanner";
import Office from "../contact_page/office";

const Contact = () => {
  const contact = {
    banner: {
      heading: "Contact Us",
      para: "At Novellus Insurance, we understand that managing risk is important to running a successful business. That's why we offer a wide range of services to help businesses identify, assess, and manage risk. Some examples of the services we offer to help businesses manage risk include",
    },
    office: {
      heading_1: "Visit the office",
      span_1: "5851 Legacy Circle #600 Plano TX 75024",
      heading_2: "Phone Number",
      span_2: "469-310-8817",
      heading_3: "Email Address",
      span_3: "info@novellusga.com",
      heading: "How Can We Help You?",
      para: "At Novellus Insurance, contact us for business insurance is simple and straightforward.",
      f_heading: "Let's start the conversation",
      btn: "Submit ",
    },
  };
  return (
    <>
      <Cbanner data={contact.banner} />
      <Office data={contact.office} />
    </>
  );
};

export default Contact;
