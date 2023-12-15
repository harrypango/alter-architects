import { React, useState } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import menuLogo from "../../assets/menuLogo.svg";
import "./navbar.css";

const Menu = () => {
  return (
    <>
      <Link to="/">Projects</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/about">About Us</Link>
    </>
  );
};

function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="header">
      <div className="header-title">
        <a href="/">
          <h1>Alter Architects</h1>
        </a>
      </div>
      <div className="header-links">
        <Menu />
        <img
          src={menuLogo}
          alt="Menu Logo"
          onClick={() =>
            toggleMenu ? setToggleMenu(false) : setToggleMenu(true)
          }
        />
      </div>
      {toggleMenu && (
        <div className="header-menu scale-in-ver-top">
          <Menu />
        </div>
      )}
    </div>
  );
}

export default Navbar;
