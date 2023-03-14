import React from "react";
import Img from "../../../images/our-story.jpg";
import Layout from "../../Common/Layout";

const OurStory = () => {

  return (
    <>
      <Layout
        title="Our story"
        content1={
          [
           "The World Tournament Players Organization (WTPO) is an independent interest group initiated by Jarmo Sandelin. WTPO creates a platform for male and female Tournament Players with new competition opportunities, new sponsorship concepts and membership services, while WTPO monitors members' interests vis-à-vis golf organizations and authorities.",
           "There will be different membership categories, but all will be offered opportunities and the sponsorship agreements will mainly go to prize money. WTPO will be a complement to existing competition organizations, where WTPO's competitions may be included in their schedule."
          ]
        }
        content2={
          [
            "partners, and hence be involved in influencing Tournament Players' business development.",
            "A first step is to engage WTPO members, partners and investors, which will continue to December 31, 2023, in order to create opportunities for all member categories from 2024 onwards."
          ]
        }
        twoColumnLayout={true}
        contactButton={true}
        pageImage={Img}
      />
    </>
  );
};

export default OurStory;
