import React from "react";
import Banner from "../Home_page/banner";
import Intro from "../Home_page/intro";
import Policy from "../Home_page/policy";
import Counter from "../common_section/counter";
import Video from "../Home_page/video";
import Quote from "../common_section/quote";
import Principle from "../Home_page/principle";
import Employe from "../Home_page/employe";
import Testimonials from "../Home_page/testimonials";

const Home_1 = () => {
  const home = {
    banner: {
      title_1: "Novellus Insurance Test",
      heading: "Innovative Protection For A New World",
      para: "Welcome to Novellus Insurance, a leading provider of insurance solutions. Our mission is to help businesses and individuals protect their assets and mitigate risk while also providing competitive rates and excellent customer service.",
      btn_01: "Discover More",
      btn_link_01: "/about",
      image_b: "/images/banner-img3.png",
      h_span: "09",
      h_em: "Years Experience",
    },
    strip: {
      heading:
        "Our mission is to help businesses and individuals protect their assets.",
      para: "At Novellus Insurance, we understand that every business and individual has unique insurance needs. That's why we offer a wide range of insurance options to suit the specific needs of our clients.",
      heading_2: "OUR BUSINESS INSURANCE PRODUCTS INCLUDE:",
      block: [
        {
          id: 1,
          src: "/images/liability.png",
          heading_3: "General liability",
          para: "Consistently ranked among the top consulting firms across the nation.",
        },
        {
          id: 2,
          src: "/images/house-value.png",
          heading_3: "General liability",
          para: "Consistently ranked among the top consulting firms across the nation.",
        },
        {
          id: 3,
          src: "/images/insurance.png",
          heading_3: "General liability",
          para: "Consistently ranked among the top consulting firms across the nation.",
        },
        {
          id: 4,
          src: "/images/planning.png",
          heading_3: "General liability",
          para: "Consistently ranked among the top consulting firms across the nation.",
        },
        {
          id: 5,
          src: "/images/positive-vote.png",
          heading_3: "General liability",
          para: "Consistently ranked among the top consulting firms across the nation.",
        },
      ],
    },
    policy_1: {
      src: "images/core.svg",
      title: "ABOUT US",
      heading: "Providing the best insurance policy to customers",
      para: "Novellus is a an idea that new, agile solutions in a volatile world continues to change the insurance landscape. Change is hard. Change at scale is even harder. We serve as a catalyst for our clients offering data driven solutions. Not packaged policies.",
      ul: [
        {
          id: 1,
          strong: "We are Novellus",
          li: "agency with deep rooted family values and world-className corporate culture and discipline.",
        },
        {
          id: 2,
          strong: "Streamlined options",
          li: "we offer multiple lines at best prices. One call, one team. Available 24x7.",
        },
        {
          id: 3,
          strong: "Unparalleled service",
          li: " no one will out-serve us. Clear line of sight to our full-service executive and support team.",
        },
        {
          id: 4,
          strong: "Real world industry experience",
          li: " been there done that – executive team includes entrepreneurs and operators with deep business expertise in retail, real estate, food and beverage, hospitality, technology, logistics, and sports and entertainment.",
        },
      ],
      para_2: "We know your pain points, and we stand ready to serve.",
    },
    counter_1: {
      heading: "Over $1,000,000,000 in assets and growing",
      block: [
        {
          id: 1,
          span: "100",
          sub_heading: "years of experience",
        },
        {
          id: 2,
          span: "100%",
          sub_heading: "Referral rate",
        },
        {
          id: 3,
          span: "30%",
          sub_heading: "Growth Rate",
        },
        {
          id: 4,
          span: "25%+",
          sub_heading: "Average Savings",
        },
      ],
    },
    video_1: {
      heading: "How is Novellus different?",
      para_1:
        "Most traditional agencies are unable or unwilling to break the path and offer data and technology driven risk coverage. Given the conventional nature of the insurance business, agencies find it exceptionally hard to change their static model.",
      para_2:
        "Most traditional agencies are unable or unwilling to break the path and offer data and technology driven risk coverage. Given the conventional nature of the insurance business, agencies find it exceptionally hard to change their static model.",
      sub_head: "Vision",
      para_3:
        "Protect, strengthen and support our client’s business, by offering the best possible risk mitigation at the best possible price through leveraging industry data and technology.",
      src: "images/International trade-rafiki.svg",
      para_4: "Video overview of Novellus? ",
      em: "Click Play Button",
    },
    quote_1: {
      heading: "That delights your customers and increase your insurance",
      src: "/images/open-message.png",
      src_1: "images/icon-search.svg",
      btn_1: "Sign Up Free",
    },
    principle_1: {
      src: "images/img2.png",
      title: "PRINICPLES",
      heading: "Our Core Principles",
      ul: [
        {
          id: 1,
          strong: "Integrity",
          li: "we reflect who we truly are. What you see is what you get with no hidden agendas for personal gain.",
        },
        {
          id: 2,
          strong: "Respect",
          li: "in each interaction. We treat each client, employee, and vendor/partner with respect and professionalism.",
        },
        {
          id: 3,
          strong: "Transparency",
          li: "best coverage at the best price. Someone may beats us on price, but not on service and coverage.",
        },
        {
          id: 4,
          strong: "Servant leadership",
          li: " we lead through serving each other. No job is too small or too big. Executives and support teams are all accountable equally.",
        },
        {
          id: 5,
          strong: "Progressive mindset",
          li: "growth doesn’t stop, neither does change. We continue to find the best path forward for our clients with most innovative products and services.",
        },
      ],
    },
    employe_1: {
      heading: "Our Deliver Measurable Impact Through Unique Approach",
      shape: "/images/intro3.png",
      block: [
        {
          id: 1,
          src: "/images/statistics.png",
          head: "Leverage data",
          para: "leverage data before building out full analytics in claims as it applies to Health, Property/Casualty, General Liabilities and all other lines.",
        },
        {
          id: 2,
          src: "/images/clipboard.png",
          head: "Show tangible plans",
          para: "leverage data before building out full analytics in claims as it applies to Health, Property/Casualty, General Liabilities and all other lines.",
        },
        {
          id: 3,
          src: "/images/report.png",
          head: "Provide quarterly reports",
          para: "leverage data before building out full analytics in claims as it applies to Health, Property/Casualty, General Liabilities and all other lines.",
        },
        {
          id: 4,
          src: "/images/finger-print.png",
          head: "Full access",
          para: "leverage data before building out full analytics in claims as it applies to Health, Property/Casualty, General Liabilities and all other lines.",
        },
      ],
    },
    folio: {
      title: "TESTIMONIALS",
      heading: "Lets Meet Up With Our All Of The Clients Says At A Glance",
      block: [
        {
          id: 1,
          src: "images/team/1.jpg",
          para: " for PT/FT employees",
          strong: " Implemented Day-1 Health Coverage (Novellus D1HC) ",
          name: "Erika Zannie ",
          span: "Mountlake Terrace, WA",
          ul: [
            {
              id: 1,
              li: "Helped business attract new employees in this tough labor market.",
            },
            {
              id: 2,
              li: "Delivered a $440,000 FICA savings to employer at no additional cost.",
            },
          ],
        },
        {
          id: 2,
          src: "images/team/1.jpg",
          para: " for PT/FT employees",
          strong: " Implemented Day-1 Health Coverage (Novellus D1HC) ",
          name: "Erika Zannie ",
          span: "Mountlake Terrace, WA",
          ul: [
            {
              id: 1,
              li: "Helped business attract new employees in this tough labor market.",
            },
            {
              id: 2,
              li: "Delivered a $440,000 FICA savings to employer at no additional cost.",
            },
          ],
        },
        {
          id: 3,
          src: "images/team/1.jpg",
          para: " for PT/FT employees",
          strong: " Implemented Day-1 Health Coverage (Novellus D1HC) ",
          name: "Erika Zannie ",
          span: "Mountlake Terrace, WA",
          ul: [
            {
              id: 1,
              li: "Helped business attract new employees in this tough labor market.",
            },
            {
              id: 2,
              li: "Delivered a $440,000 FICA savings to employer at no additional cost.",
            },
          ],
        },
        {
          id: 4,
          src: "images/team/1.jpg",
          para: " for PT/FT employees",
          strong: " Implemented Day-1 Health Coverage (Novellus D1HC) ",
          name: "Erika Zannie ",
          span: "Mountlake Terrace, WA",
          ul: [
            {
              id: 1,
              li: "Helped business attract new employees in this tough labor market.",
            },
            {
              id: 2,
              li: "Delivered a $440,000 FICA savings to employer at no additional cost.",
            },
          ],
        },
      ],
    },
  };

  return (
    <>
      <Banner data={home.banner} />
      <Intro data={home.strip} />
      <Policy data={home.policy_1} />
      <Counter data={home.counter_1} />
      <Video data={home.video_1} />
      <Quote data={home.quote_1} />
      <Principle data={home.principle_1} />
      <Employe data={home.employe_1} />
      <Testimonials data={home.folio} />
    </>
  );
};

export default Home_1;
