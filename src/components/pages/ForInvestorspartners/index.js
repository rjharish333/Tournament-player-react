import React from "react";
import Img from "../../../images/for-investorspartners.jpg";
import Layout from "../../Common/Layout";

const ForInvestorspartners = () => {

  return (
    <>
      <Layout
        title="Investor/Partners"
        content1={
          [
            "The World Tournament Players Organization (WTPO) will continuously invite investors and partners to participate and realize WTPO's vision. The intention is to enter agreements with investors and partners during the period until December 31, 2023, who will thus become Founding Partners.",
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

export default ForInvestorspartners;
