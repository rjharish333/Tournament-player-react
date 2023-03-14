import React from "react";
import Img from "../../../images/travels.jpg";
import Layout from "../../Common/Layout";

const Travels = () => {

  return (
    <>
      <Layout
        title="Travels"
        content1={
          [
            "The World Tournament Players Organization (WTPO) will continuously sign cooperation agreements with golf resorts around the world.",
            "Through these associated golf resorts, WTPO's member clubs will be offered the opportunity to offer organized golf tours for their members, where WTPO members get access to defined training areas at these resorts.",
            "A first step is to engage WTPO members, partners and investors, which will continue to December 31, 2023, in order to create opportunities for all member categories from 2024 onwards."
          ]
        }
        content2={[]}
        twoColumnLayout={false}
        contactButton={true}
        pageImage={Img}
      />
    </>
  );
};

export default Travels;
