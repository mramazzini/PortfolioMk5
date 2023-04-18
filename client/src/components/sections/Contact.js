import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { SEND_MESSAGE } from "../utils/mutations";
const Contact = ({ darkMode }) => {
  const [formState, setFormState] = useState({
    sentBy: "",
    contactInfo: "",
    message: "",
  });
  const [sendMessage] = useMutation(SEND_MESSAGE);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
    console.log(formState);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    sendMessage({
      variables: {
        sentBy: formState.name,
        message: formState.message,
        contactInfo: formState.contact,
      },
    });
  };

  return (
    <div className={`section-right-body ${darkMode ? "dark" : ""} contact`}>
      <form
        className={`contact-form ${darkMode ? "dark" : ""}`}
        onSubmit={handleSubmit}
      >
        <div className={`section-right-header ${darkMode ? "dark" : ""}`}>
          <h1>Send me a message,</h1>
        </div>
        <div className="contact-form-row">
          <label htmlFor="name">Name</label>
          <input type="text" name="name" id="name" onChange={handleChange} />
        </div>
        <div className="contact-form-row">
          <label htmlFor="contact">How should I contact you?</label>
          <input
            type="text"
            name="contact"
            id="contact"
            onChange={handleChange}
          />
        </div>
        <div className="contact-form-row">
          <label htmlFor="message">Message</label>
          <textarea
            name="message"
            id="message"
            rows="5"
            onChange={handleChange}
          />
        </div>
        <div className="contact-form-row">
          <button
            className={`nav-button submit ${darkMode ? "dark" : ""}`}
            type="submit"
          >
            Send
          </button>
        </div>
        <div className={`section-right-header ${darkMode ? "dark" : ""}`}>
          <h1>I'll get back to you soon!</h1>
        </div>
      </form>
    </div>
  );
};

export default Contact;
