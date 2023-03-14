import React, { useState } from "react";
import "./index.css";
import pageImage from "../../../images/about-us.jpeg";

const AboutUs = () => {
  const [showModal, setShowModal] = useState(false);

  const handleModalClick = () => {
    setShowModal(true);
  };

  const closeModalClick = () => {
    setShowModal(false);
  };
  return (
    <>
      <div className="about-section">
        <div className="about-block" style={{backgroundImage: `url(${pageImage})`}}>
          <div className="text-section">
            <h1 className="title-section">About us</h1>
          </div>
        </div>
        <div className="bottom-section">
          <div className="info-section">
            <p className="text-white ingress">
              The World Tournament Players Organization (WTPO) is an independent
              organization founded by professionals, for professionals.
            </p>
            <p>
              WTPO was founded by Jarmo Sandelin, who has been a member of the
              Swedish PGA since 1987. Today, he is honorary member of the
              Swedish PGA, Finnish PGA and the British PGA. Sandelin qualified
              for the European Tour in 1995 where he the same year was awarded
              “Sir Henry Cotton Rookie of the Year” and has five tournament
              victories, where he still is a member as well as in Legends Tour.
              In 1996, he played on the PGA tour and in 1999, he played the
              Ryder Cup for the European team.
            </p>
            <p>
              During his career, Sandelin and has visited over 600 golf
              destinations and it is with his combined experience he founded
              WTPO – a platform for World Tournament Players, offering new
              opportunities, new sponsorship concepts and membership services,
              while WTPO monitors members' interests vis-à-vis golf
              organizations and authorities.
            </p>
            <p>
              The WTPO initiative is endorsed by several PGA members throughout
              the world, Tournament Players and club professionals with
              extensive golf experience, and a pronounced interest in continuing
              to develop professional golf.&nbsp;
              <strong>
                All Tournament Players and club professionals around the world
                are welcome to become WTPO members.{" "}
              </strong>
            </p>
            <p>
              The WTPO platform will be a complement to existing competition
              organizations, where WTPO's competitions may be included in their
              schedule.
            </p>
            <p>
              A first step is to engage WTPO members, partners and investors,
              which will continue to December 31, 2023, in order to create
              opportunities for all member categories from 2024 onwards.
            </p>
            <div className="contact-btn">
              <button>Contact us to become a member</button>
            </div>
          </div>
          <div className="owner-section">
            <div className="owner-image">
              <div className="overlay" />
              <div className="text-wrapper">
                <a className="small-title" onClick={handleModalClick}>
                  {" "}
                  Jarmo Sandelin – merits
                </a>
              </div>
            </div>
          </div>
          {showModal && (
            <div className="modal-section">
              <div className="overlay" />
              <div className="modalBody">
                <div className="close-btn" onClick={closeModalClick}>
                  <i className="fas fa-times" />
                </div>
                <div className="heading-section">
                  <h1>About Jarmo Sandelin</h1>
                </div>
                <div className="modal-info-section">
                  <p>
                    <strong>About</strong>
                  </p>
                  <ul>
                    <li>Full name: Jarmo Sakari Sandelin</li>
                    <li>Born: 10 May 1967 (age 55) in Imatra, Finland</li>
                    <li>Sporting nationality: Sweden</li>
                    <li>Residence: Stockholm, Sweden</li>
                  </ul>
                  <p>
                    <strong>Career</strong>
                  </p>
                  <ul>
                    <li>Turned professional 1987</li>
                    <li>Current tour(s): European Senior Tour</li>
                    <li>Former tour(s): European Tour, PGA Tour</li>
                    <li>Professional wins: 10</li>
                    <li>Highest ranking: 59 (11 July 1999)</li>
                  </ul>
                  <p>
                    <strong>Number of wins by tour</strong>
                  </p>
                  <ul>
                    <li>European Tour&nbsp;: 5</li>
                    <li>Asian Tour: 1</li>
                    <li>Challenge Tour: 2</li>
                    <li>European Senior Tour: 1</li>
                    <li>Other: 2</li>
                  </ul>
                  <p>
                    <strong>Best results in major championships</strong>
                  </p>
                  <ul>
                    <li>Masters Tournament DNP</li>
                    <li>PGA Championship T24 (2000)</li>
                    <li>U.S. Open CUT (2000)</li>
                    <li>The Open Championship T31 (2000)</li>
                  </ul>
                  <p>
                    <strong>Achievements and awards</strong>
                  </p>
                  <ul>
                    <li>Sir Henry Cotton Rookie of the Year 1995&nbsp;</li>
                  </ul>
                  <p>
                    <strong>Team appearances&nbsp;</strong>
                  </p>
                  <ul>
                    <li>Ryder Cup (1999)</li>
                    <li>Alfred Dunhill Cup (1995, 1996, 1999)</li>
                    <li>World Cup: (1995, 1996, 1999)</li>
                    <li>Seve Trophy – victory (2000)</li>
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default AboutUs;
