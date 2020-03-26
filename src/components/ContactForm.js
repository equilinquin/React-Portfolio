import React from "react";
import "../assets/css/style.css";

function ContactForm() {
  return (
    <form className="uk-form uk-align-center">
      <div>
        <div className="uk-margin">
          <input
            className="uk-input uk-form-width-large uk-dark uk-align-center"
            type="text"
            placeholder="Name"
          />
        </div>
        <div className="uk-margin">
          <input
            className="uk-input uk-form-width-large uk-align-center"
            type="text"
            placeholder="Email"
          />
        </div>
        <div className="uk-margin">
          <textarea
            className="uk-textarea uk-width-5-6 uk-align-center"
            rows="8"
            placeholder="Message"
          ></textarea>
        </div>
        <button className="uk-button uk-button-primary uk-align-center" type="button">
          Send
        </button>
      </div>
    </form>
  );
}

export default ContactForm;
