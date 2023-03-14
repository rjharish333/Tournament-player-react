import React from "react";
import Img from "../../../images/world-tournament-players-facilities.jpg";
import Layout from "../../Common/Layout";

const TournamentPlayersFacilities = () => {

  return (
    <>
      <Layout
        title="Tournament Players Facilities"
        content1={
          [
            "Through World Tournament Players Facilities (WTPF), World Tournament Players Organization (WTPO) will offer its members access to selected golf clubs and training opportunities worldwide.",
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

export default TournamentPlayersFacilities;
