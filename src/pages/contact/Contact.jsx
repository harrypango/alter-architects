import React from "react";
import "./contact.css";

const Contact = () => {
  return (
    <div className="container section__margin">
      <div className="container-details">
        <div className="container-details__heading">
          <h1>CONTACT</h1>
        </div>
        <h4>Alter Architects</h4>
        <p>Tirana, Albania</p>
        <p>
          Rruga “Skënderbej” pallati 8 kati përdhe,
          <br /> Rr. Kavajës <br />
          1001, Tirana
        </p>
        <p>email: info@alter-architects.com</p>
      </div>
      <div className="container-form">
        <div className="container-form__name">
          <input type="text" placeholder="First Name" />
          <input type="text" placeholder="Last Name" />
        </div>
        <input type="text" placeholder="E-mail" />

        <textarea type="text" placeholder="Message" />
      </div>
    </div>
  );
};

export default Contact;
