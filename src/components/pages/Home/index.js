import React from "react";
import VideoBg from "../../../assets/home.mp4";
import "./index.css";

function Home() {
  return (
    <>
      <div className="video-bg">
        <div className="home-overlay" />
        <video src={VideoBg} autoPlay loop muted />
        <div className="content">
          <h1>This is the World Tournament Players Organization</h1>
          <p>
            The World Tournament Players Organization (WTPO) is an independent
            organization for all male and female professional golfers worldwide.
            Founded by professionals, for professionals.
          </p>
          <p>
            A first step is to engage WTPO members, which will continue to
            December 31, 2023, in order to create opportunities for all member
            categories from 2024 onwards.
          </p>
          <button>Read more</button>
        </div>
      </div>
    </>
  );
}

export default Home;
