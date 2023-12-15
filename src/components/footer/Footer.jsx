import React from "react";
import "./footer.css";
import instagram from "../../assets/instagram.svg";
import facebook from "../../assets/facebook.svg";
import behance from "../../assets/behance.svg";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-email">
        <a href="mailto:info@alter-architects.com">info@alter-architects.com</a>
      </div>
      <div className="footer-address">
        <a
          href="https://www.google.com/maps/place/Alter+Architects/@41.3286866,19.8085539,15.25z/data=!4m5!3m4!1s0x0:0x69d2846d247371ca!8m2!3d41.3286687!4d19.808588"
          target="_blank"
        >
          Rruga Skënderbeg, Tirana
          <br />
          1001, Albania
        </a>
      </div>
      <div className="footer-phone">
        <a href="tel:+355693530506">+355 69 35 30 506</a> |
        <a href="tel:+355698120140"> +355 69 81 20 140</a>
      </div>
      <div className="footer-icons">
        <a href="https://www.instagram.com/alter_architects/" target="_blank">
          <img src={instagram} />
        </a>
        <a href="https://www.facebook.com/alterarchitects16/" target="_blank">
          <img src={facebook} />
        </a>
        <a href="https://www.behance.net/alterarchitects" target="_blank">
          <img src={behance} />
        </a>
      </div>
    </div>
  );
};

export default Footer;
