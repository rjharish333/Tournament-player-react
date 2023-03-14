import React from "react";
import Img from "../../../images/tour-news.jpg";
import Layout from "../../Common/Layout";

const TourNews = () => {

  return (
    <>
      <Layout
        title="Tour news"
        content1={
          [
            "The World Tournament Players Organization (WTPO) Tour News will have its own editorial staff that covers global golf news, travels, golf fashion and other golf related subjects.",
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

export default TourNews;
