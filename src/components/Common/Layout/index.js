import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

const Layout = ({title, pageImage, content1, content2=[], twoColumnLayout, contactButton }) => {

  return (
    <>
      <div className="about-section">
        <div className="about-block" style={{backgroundImage: `url(${pageImage})`}}>
          <div className="text-section">
            <h1 className="title-section">{title}</h1>
          </div>
        </div>
        <div className="bottom-section">
          <div className="info-section">
            {
                content1.length > 0 && content1.map((content, index) =>
                <p key={index} className={index===0 ? "text-white ingress" : ""}>
                    {content}
                </p>
                )
            }
            {
                twoColumnLayout === false && contactButton &&
                <div className="contact-btn">
                    <Link to="/contact">
                      <button>Contact us to become a member</button>
                    </Link>
                </div>
            }
          </div>
          <div className="owner-section">
            {
                content2.length > 0 && content2.map((content, index) =>
                <p key={index}>
                    {content}
                </p>
                )
            }
            {
                twoColumnLayout === true && contactButton &&
                <div className="contact-btn">
                  <Link to="/contact">
                    <button>Contact us to become a member</button>
                    </Link>
                </div>
            }
          </div>
          
        </div>
      </div>
    </>
  );
};

export default Layout;
