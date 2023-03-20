import React from "react";
import Cbanner from "../common_section/cbanner";
import Aboutp from "../about_page/about-p";
import Counter from "../common_section/counter";
import Team from "../about_page/team";

const About = () => {
  const about = {
    banner: {
      heading: "About Novellus",
      para: "We’re making work meaningful for everyone, everywhere.",
    },
    about_1: {
      heading: "Our History & mission",
      para: [
        {
          id: 1,
          s_para:
            "Novellus Insurance was founded by a group of insurance experts and business owners who recognized the need for a more customized approach to insurance. With backgrounds in industries such as hospitality, multi-unit franchise, sporting franchises, quick service restaurants, SaaS technology, and medicine, the founders of Novellus understood firsthand the unique challenges that businesses in these industries face when it comes to protecting their assets and managing risk.",
        },
        {
          id: 2,
          s_para:
            "In response to this need, the founders of Novellus set out to create an insurance company that would provide a tailored approach to insurance, one that would take into account the specific needs of each individual business or individual. This approach would be based on decades of operational experience, industry expertise, and a deep understanding of the complex challenges that businesses and individuals face in today's fast-paced and ever-changing world.",
        },
        {
          id: 3,
          s_para:
            "Today, Novellus Insurance has grown to become a leading provider of insurance solutions. We offer a wide range of insurance options to suit the specific needs of our clients, including general liability, property, and workers' compensation, risk management, and bespoke specialty solutions, health insurance options for individuals, families, and groups, employee benefits options such as retirement plans, life insurance, and disability insurance.",
        },
        {
          id: 4,
          s_para:
            "Novellus Insurance was founded by a group of insurance experts and business owners who recognized the need for a more customized approach to insurance. With backgrounds in industries such as hospitality, multi-unit franchise, sporting franchises, quick service restaurants, SaaS technology, and medicine, the founders of Novellus understood firsthand the unique challenges that businesses in these industries face when it comes to protecting their assets and managing risk.",
        },
      ],
      src: "images/Business analytics-pana.svg",
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
    team_1: {
      heading: "Our Company's leadership team",
      block: [
        {
          id: 1,
          src: "/images/team10.jpg",
          s_heading: "Deepen Pate",
          para: [
            {
              id: 1,
              para_1:
                "Deepen Patel is the Founding Principal of Novellus Insurance, a leading provider of insurance solutions. With over 17 years of experience in the industry, Deepen brings a wealth of knowledge and expertise to the company in the areas of hospitality, food and beverage, retail real estate, early to late-stage technology, and sports investments.",
            },
            {
              id: 2,
              para_1:
                "Deepen began his career at AT&T, where he quickly rose through the ranks and gained a deep understanding of the telecommunications industry. After leaving AT&T, he pursued his own business ventures and became a successful multi-unit franchisee of quick service restaurants, hotel owner, and founding partner of various venture funds.",
            },
            {
              id: 3,
              para_1:
                "As a business owner, Deepen understands companies' and individuals' unique insurance needs. He founded Novellus Insurance with a mission to help businesses and individuals protect their assets and mitigate risk while also providing competitive rates and excellent customer service. With his extensive experience and industry knowledge, Deepen is dedicated to providing customized insurance solutions that meet the specific needs of Novellus Insurance clients.",
            },
          ],
          icon_1: "/images/envelope.svg",
          icon_2: "/images/phone.svg",
        },
        {
          id: 2,
          src: "/images/team11.jpg",
          s_heading: "Deepen Pate",
          para: [
            {
              id: 1,
              para_1:
                "Deepen Patel is the Founding Principal of Novellus Insurance, a leading provider of insurance solutions. With over 17 years of experience in the industry, Deepen brings a wealth of knowledge and expertise to the company in the areas of hospitality, food and beverage, retail real estate, early to late-stage technology, and sports investments.",
            },
            {
              id: 2,
              para_1:
                "Deepen began his career at AT&T, where he quickly rose through the ranks and gained a deep understanding of the telecommunications industry. After leaving AT&T, he pursued his own business ventures and became a successful multi-unit franchisee of quick service restaurants, hotel owner, and founding partner of various venture funds.",
            },
            {
              id: 3,
              para_1:
                "As a business owner, Deepen understands companies' and individuals' unique insurance needs. He founded Novellus Insurance with a mission to help businesses and individuals protect their assets and mitigate risk while also providing competitive rates and excellent customer service. With his extensive experience and industry knowledge, Deepen is dedicated to providing customized insurance solutions that meet the specific needs of Novellus Insurance clients.",
            },
          ],
          icon_1: "/images/envelope.svg",
          icon_2: "/images/phone.svg",
        },
        {
          id: 3,
          src: "/images/team12.jpg",
          s_heading: "Deepen Pate",
          para: [
            {
              id: 1,
              para_1:
                "Deepen Patel is the Founding Principal of Novellus Insurance, a leading provider of insurance solutions. With over 17 years of experience in the industry, Deepen brings a wealth of knowledge and expertise to the company in the areas of hospitality, food and beverage, retail real estate, early to late-stage technology, and sports investments.",
            },
            {
              id: 2,
              para_1:
                "Deepen began his career at AT&T, where he quickly rose through the ranks and gained a deep understanding of the telecommunications industry. After leaving AT&T, he pursued his own business ventures and became a successful multi-unit franchisee of quick service restaurants, hotel owner, and founding partner of various venture funds.",
            },
            {
              id: 3,
              para_1:
                "As a business owner, Deepen understands companies' and individuals' unique insurance needs. He founded Novellus Insurance with a mission to help businesses and individuals protect their assets and mitigate risk while also providing competitive rates and excellent customer service. With his extensive experience and industry knowledge, Deepen is dedicated to providing customized insurance solutions that meet the specific needs of Novellus Insurance clients.",
            },
          ],
          icon_1: "/images/envelope.svg",
          icon_2: "/images/phone.svg",
        },
        {
          id: 4,
          src: "/images/team9.jpg",
          s_heading: "Deepen Pate",
          para: [
            {
              id: 1,
              para_1:
                "Deepen Patel is the Founding Principal of Novellus Insurance, a leading provider of insurance solutions. With over 17 years of experience in the industry, Deepen brings a wealth of knowledge and expertise to the company in the areas of hospitality, food and beverage, retail real estate, early to late-stage technology, and sports investments.",
            },
            {
              id: 2,
              para_1:
                "Deepen began his career at AT&T, where he quickly rose through the ranks and gained a deep understanding of the telecommunications industry. After leaving AT&T, he pursued his own business ventures and became a successful multi-unit franchisee of quick service restaurants, hotel owner, and founding partner of various venture funds.",
            },
            {
              id: 3,
              para_1:
                "As a business owner, Deepen understands companies' and individuals' unique insurance needs. He founded Novellus Insurance with a mission to help businesses and individuals protect their assets and mitigate risk while also providing competitive rates and excellent customer service. With his extensive experience and industry knowledge, Deepen is dedicated to providing customized insurance solutions that meet the specific needs of Novellus Insurance clients.",
            },
          ],
          icon_1: "/images/envelope.svg",
          icon_2: "/images/phone.svg",
        },
      ],
    },
  };
  return (
    <>
      <Cbanner data={about.banner} />
      <Aboutp data={about.about_1} />
      <Counter data={about.counter_1} />
      <Team data={about.team_1} />
    </>
  );
};

export default About;
