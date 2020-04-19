import React from "react";
import ContactForm from "./ContactForm";
import "../assets/css/style.css";

function ContactArea() {
  return (
    <div className="uk-container">
      <div className="header uk-light">
        <h2>Contact Me</h2>
        <i className="far fa-envelope fa-2x">
          <span>  equilinquin@gmail.com</span>
        </i>
      </div>
      <ContactForm />
    </div>
  );
}

export default ContactArea;
