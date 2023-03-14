import React from "react";
import pageImage from "../../../images/tournaments.jpg";
import Card from "../../Common/Card";
import "./index.css";

const Contact = () => {

  return (
    <>
      <div className="about-section">
        <div className="about-block" style={{backgroundImage: `url(${pageImage})`}}>
          <div className="text-section">
            <h1 className="title-section">Contact</h1>
          </div>
        </div>
        <div className="bottom-section">
          <div className="info-section">
            <Card type="contact" title="Info" content="info@worldplayersorg.com" />
            <Card type="contact" title="Members" content="imembers@worldplayersorg.com" />
            <Card type="contact" title="Partners" content="partners@worldplayersorg.com" />
            <Card type="contact" title="Investors" content="investors@worldplayersorg.com" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
