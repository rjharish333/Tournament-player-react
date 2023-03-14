import React from "react";
import Img from "../../../images/tournaments.jpg";
import Layout from "../../Common/Layout";

const Tournaments = () => {

  return (
    <>
      <Layout
        title="Tournaments"
        content1={
          [
          "The World Tournament Players Organization (WTPO) will organize sponsored tournaments for its male and female members. Today, WTPO is negotiating with partners, sponsors and golf clubs who want to be part of the development of WTPO tournaments. For professionals, by professionals.", 
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

export default Tournaments;
