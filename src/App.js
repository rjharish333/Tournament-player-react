import React from "react";
import Navbar from "./components/Navbar/Navbar";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import AboutUs from "./components/pages/AboutUs";
import LoginOrMember from "./components/pages/Login-or-member";
import Register from "./components/pages/Register";
import AppProvider from "./components/AppProvider";
import WTPOFoundation from "./components/pages/WTPOFoundation";
import OurStory from "./components/pages/OurStory";
import Tournaments from "./components/pages/Tournaments";
import TournamentPlayersFacilities from "./components/pages/TournamentPlayersFacilities";
import TourNews from './components/pages/TourNews';
import Shop from "./components/pages/Shop";
import Travels from "./components/pages/Travels";
import ForInvestorspartners from "./components/pages/ForInvestorspartners";
import Africa from "./components/pages/Africa";
import Asia from "./components/pages/Asia";
import Australia from "./components/pages/Australia";
import Canada from "./components/pages/Canada";
import EU from "./components/pages/EU";
import NordicRegion from "./components/pages/NordicRegion";
import SouthAmerica from "./components/pages/SouthAmerica";
import UK from "./components/pages/UK";
import USA from "./components/pages/USA";
import Others from "./components/pages/Others";
import Contact from "./components/pages/Contact";
import Stripe from './components/pages/payments/Stripe';

function App() {
  return (
    <AppProvider>
      <div className="App">
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/wtpo-foundation" element={<WTPOFoundation />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/our-story" element={<OurStory />} />
            <Route path="/tournaments" element={<Tournaments />} />
            <Route path="/world-tournament-players-facilities" element={<TournamentPlayersFacilities />} />
            <Route path="/tour-news" element={<TourNews />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/travels" element={<Travels />} />
            <Route path="/for-investorspartners" element={<ForInvestorspartners />} />
            <Route path="/africa" element={<Africa />} />
            <Route path="/asia" element={<Asia />} />
            <Route path="/australia" element={<Australia />} />
            <Route path="/canada" element={<Canada />} />
            <Route path="/eu" element={<EU />} />
            <Route path="/nordic-region" element={<NordicRegion />} />
            <Route path="/south-america" element={<SouthAmerica />} />
            <Route path="/uk" element={<UK />} />
            <Route path="/usa" element={<USA />} />
            <Route path="/others" element={<Others />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login-or-member" element={<LoginOrMember />} />
            <Route path="/register" element={<Register />} />
            <Route path="/payment" element={<Stripe />} />
          </Routes>
        </Router>
      </div>
    </AppProvider>
  );
}

export default App;
