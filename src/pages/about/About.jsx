import React from "react";
import "./about.css";
import portrait from "../../assets/portrait.jpg";

const About = () => {
  return (
    <div className="contact-container">
      <img src={portrait} />
      <div className="contact-info">
        <h1>Erlind Llanaj</h1>
        <p>Co-Founder</p>
        <p>Master of Science in Architecture</p>
        <p>Polytechnic University of Tirana</p>
        <p>Faculty of Architecture and Urbanism</p>
      </div>
      <img src={portrait} />
      <div className="contact-info">
        <h1>Aleksandra Pango</h1>
        <p>Co-Founder</p>
        <p>Master of Science in Architecture</p>
        <p>Polytechnic University of Tirana</p>
        <p>Faculty of Architecture and Urbanism</p>
      </div>
    </div>
  );
};

export default About;
