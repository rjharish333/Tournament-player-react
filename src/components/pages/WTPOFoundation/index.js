import React from "react";
import Img from "../../../images/wtpo-foundation.jpg";
import Layout from "../../Common/Layout";

const WTPOFoundation = () => {

  return (
    <>
      <Layout
        title="WTPO Foundation"
        content1={["The WTPO Foundation provides grants that benefit its members, supports youth golf and collaborates with other organizations that, together with the WTPO, can make a difference in various areas.", "The WTPO initiative is endorsed by several male and female PGA members throughout the world, Tournament Players and club professionals with extensive golf experience, and a pronounced interest in continuing to develop professional golf. All Tournament Players and club professionals around the world are welcome to become WTPO members."]}
        content2={["The WTPO platform will be a complement to existing competition organizations, where WTPO's competitions may be included in their competition schedule.", "A first step is to engage WTPO members, partners and investors, which will continue to December 31, 2023, in order to create opportunities for all member categories from 2024 onwards."]}
        twoColumnLayout={true}
        contactButton={true}
        pageImage={Img}
      />
    </>
  );
};

export default WTPOFoundation;
