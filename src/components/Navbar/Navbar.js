import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Button from "../Button/Button";
import Dropdown from "../Dropdown/Dropdown";
import { MenuItems } from "./MenuItems";
import AppContext from "../../context/AppContext";

const dropdowns = {
  aboutUs: "aboutUs",
  tournaments: "tournaments",
  investor: "investor",
  members: "members",
};

const Navbar = () => {
  const [clicked, setClicked] = useState(false);
  const [dropdown, setDropdown] = useState(null);
  const [showNavBG, setShowNavBG] = useState(false);
  const { isMobileView } = useContext(AppContext);

  useEffect(() => {
    window.addEventListener("scroll", showNavbarBG);
    return () => window.removeEventListener("scroll", showNavbarBG);
  }, []);

  const handleClick = () => {
    setClicked(!clicked);
  };
  const closeMobileMenu = () => {
    setClicked(false);
  };

  const showNavbarBG = () => {
    if (window.scrollY >= 80) {
      setShowNavBG(true);
    } else {
      setShowNavBG(false);
    }
  };

  const onMouseEnter = (key) => {
    setDropdown(key);
  };
  const onMouseLeave = () => {
    setDropdown(null);
  };

  return (
    <nav className={showNavBG ? "Navbar-Items active" : "Navbar-Items"}>
      <Link to="/" className="nav-logo">
        Tournament Player
      </Link>
      <div className="menu-icon" onClick={handleClick}>
        <i className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
      </div>
      <ul className={clicked ? "nav-menu active" : "nav-menu"}>
        <li
          className="nav-item dropdown"
          onMouseEnter={() => onMouseEnter(dropdowns.aboutUs)}
          onMouseLeave={onMouseLeave}
        >
          <Link className="nav-links" to="/about-us" onClick={closeMobileMenu}>
            About us <i className="fas fa-caret-down" />
            {isMobileView && (
              <div>
                <Link to="/wtpo-foundation">WTPO Foundation</Link>
                <Link to="/our-story">Our Story</Link>
              </div>
            )}
          </Link>
          {dropdown === dropdowns.aboutUs && <Dropdown name="aboutUs" />}
        </li>

        <li
          className="nav-item dropdown"
          onMouseEnter={() => onMouseEnter(dropdowns.tournaments)}
          onMouseLeave={onMouseLeave}
        >
          <Link
            className="nav-links"
            to="/tournaments"
            onClick={closeMobileMenu}
          >
            Tournaments <i className="fas fa-caret-down" />
            {isMobileView && (
              <div>
                <Link to="/world-tournament-players-facilities">
                  World Tournament Players Facilities
                </Link>
              </div>
            )}
          </Link>
          {dropdown === dropdowns.tournaments && (
            <Dropdown name="tournaments" />
          )}
        </li>

        <li className="nav-item">
          <Link className="nav-links" to="/tour-news" onClick={closeMobileMenu}>
            Tour news
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-links" to="/shop" onClick={closeMobileMenu}>
            Shop
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-links" to="/travels" onClick={closeMobileMenu}>
            Travels
          </Link>
        </li>
        <li
          className="nav-item"
          onMouseEnter={() => onMouseEnter(dropdowns.investor)}
          onMouseLeave={onMouseLeave}
        >
          <Link
            className="nav-links"
            to="/for-investorspartners"
            onClick={closeMobileMenu}
          >
            For investors/partners <i className="fas fa-caret-down" />
            {isMobileView && (
              <div>
                <Link to="/africa">Africa</Link>
                <Link to="/asia">Asia</Link>
                <Link to="/australia">Australia</Link>
                <Link to="/canada">Canada</Link>
                <Link to="/eu">EU</Link>
                <Link to="/nordic-region">Nordic Region</Link>
                <Link to="/south-america">South America</Link>
                <Link to="/uk">UK</Link>
                <Link to="/usa">USA</Link>
              </div>
            )}
          </Link>
          {dropdown === dropdowns.investor && <Dropdown name="investor" />}
        </li>

        <li
          className="nav-item"
          onMouseEnter={() => onMouseEnter(dropdowns.members)}
          onMouseLeave={onMouseLeave}
        >
          <Link
            className="nav-links"
            to="/our-members"
            onClick={closeMobileMenu}
          >
            Our members <i className="fas fa-caret-down" />
            {isMobileView && (
              <div>
                <Link to="/africa">Africa</Link>
                <Link to="/asia">Asia</Link>
                <Link to="/australia">Australia</Link>
                <Link to="/canada">Canada</Link>
                <Link to="/eu">EU</Link>
                <Link to="/nordic-region">Nordic Region</Link>
                <Link to="/south-america">South America</Link>
                <Link to="/uk">UK</Link>
                <Link to="/usa">USA</Link>
                <Link to="/others">Others</Link>
              </div>
            )}
          </Link>
          {dropdown === dropdowns.members && <Dropdown name="members" />}
        </li>

        <li className="nav-item">
          <Link className="nav-links" to="/contact" onClick={closeMobileMenu}>
            Contact
          </Link>
        </li>
        {isMobileView && (
          <li className="nav-item">
            <Link
              className="nav-links"
              to="/login-or-member"
              onClick={closeMobileMenu}
            >
              Login/become a member
            </Link>
          </li>
        )}
      </ul>
      <Button path="/login-or-member">Login/become a member</Button>
    </nav>
  );
};

export default Navbar;
