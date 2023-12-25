import { React, useState } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import menuLogo from "../../assets/menuLogo.svg";
import "./navbar.css";

const Menu = () => {
  const [activeLinks, setActiveLinks] = useState([true, false, false]);

  function activate(index) {
    const newActiveLinks = activeLinks.map((link, i) =>
      i === index ? true : false
    );
    setActiveLinks(newActiveLinks);
  }

  return (
    <>
      <Link
        to="/"
        onClick={() => activate(0)}
        style={{ textDecoration: activeLinks[0] ? "underline" : "none" }}
      >
        Projects
      </Link>
      <Link
        to="/contact"
        onClick={() => activate(1)}
        style={{ textDecoration: activeLinks[1] ? "underline" : "none" }}
      >
        Contact
      </Link>
      <Link
        to="/about"
        onClick={() => activate(2)}
        style={{ textDecoration: activeLinks[2] ? "underline" : "none" }}
      >
        About Us
      </Link>
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
