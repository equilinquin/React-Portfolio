import React, { useState } from "react";
import { useAlert } from "react-alert"
import "../assets/css/style.css";

function ContactForm() {
  const [input, setInput] = useState();
  const alert = useAlert();
 
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };

  const handleSubmit = () => {
    const templateId = "template_tKnB7CHH";

    sendFeedback(templateId, {
      message_html: input.message,
      from_name: input.name,
      reply_to: input.email,
    });

  };


  const sendFeedback = (templateId, variables) => {
    window.emailjs
      .send("gmail", templateId, variables)
      .then((res) => {
        alert.show("Email successfully sent!");
      })
      // Handle errors here however you like, or use a React error boundary
      .catch((err) =>
        console.error(
          "Oh well, you failed. Here some thoughts on the error that occured:",
          err
        )
      );
  };


  return (
    <form  className="uk-form uk-align-center">
      <div>
        <div className="uk-margin">
          <input
            className="uk-input uk-form-width-large uk-dark uk-align-center"
            type="text"
            name="name"
            placeholder="Name"
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="uk-margin">
          <input
            className="uk-input uk-form-width-large uk-align-center"
            type="text"
            name="email"
            placeholder="Email"
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="uk-margin">
          <textarea
            className="uk-textarea uk-width-5-6 uk-align-center"
            rows="8"
            name="message"
            placeholder="Message"
            onChange={(e) => handleChange(e)}
          ></textarea>
        </div>
        <button
          className="uk-button uk-button-primary uk-align-center"
          type="button"
          onClick={handleSubmit}
        >
          Send
        </button>
      </div>
    </form>
  );
}

export default ContactForm;
