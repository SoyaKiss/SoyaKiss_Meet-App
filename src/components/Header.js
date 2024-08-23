import React from "react";
import "../styles/Header.css";

const Header = () => (
  <header>
    <img
      src={`${process.env.PUBLIC_URL}/img/lets_meet_logo.png`}
      alt="Lets Meet Logo"
      className="logo"
    />
  </header>
);

export default Header;
