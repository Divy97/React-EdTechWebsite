import React from "react";
import Navbar from "./Navbar";
import "../index.css";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div id="main">
      <Navbar />
      <div className="name">
        <h1>
          <span>Learn With Us</span>
          <br />
          and BOOST Your career
        </h1>
        <p></p>
        <Link to="/courses" className="cv-btn">
          Explore
        </Link>
      </div>
    </div>
  );
};

export default Header;
