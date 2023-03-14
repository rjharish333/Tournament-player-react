import React from "react";
import Img from "../../../images/africa.jpg";
import Layout from "../../Common/Layout";

const Africa = () => {

  return (
    <>
      <Layout
        title="Africa"
        content1={
          [
            "Here, information about the region investors, partners and sponsors will be public during 2024."  
          ]
        }
        content2={[]}
        twoColumnLayout={false}
        contactButton={false}
        pageImage={Img}
      />
    </>
  );
};

export default Africa;
