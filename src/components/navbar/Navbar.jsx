import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import "./navbar.css";

function Navbar() {
  return (
    <div className="header section__margin">
      <div>
        <h1>Alter Architects</h1>
      </div>
      <div className="header-links">
        <Link to="/">Projects</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/about">About Us</Link>
      </div>
    </div>
  );
}

export default Navbar;
