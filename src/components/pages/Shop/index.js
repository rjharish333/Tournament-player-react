import React from "react";
import Img from "../../../images/shop.jpg";
import Layout from "../../Common/Layout";

const Shop = () => {

  return (
    <>
      <Layout
        title="Shop"
        content1={
          [
            "The World Tournament Players Organization (WTPO) will offer its members to market and sell their products through WTPO's golf shop. Also, WTPO intends to start cooperation with golf shops around the world to market its own products, with all profits going to the WTPO Foundation.",
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

export default Shop;
