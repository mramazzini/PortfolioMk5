import React, { useEffect, useState } from "react";
import { useMutation } from "@apollo/client";
import { SEND_MESSAGE } from "../utils/mutations";
const Contact = ({ darkMode }) => {
  const [showResponse, setShowResponse] = useState(false);
  const [responseText, setResponseText] = useState("");
  const [formState, setFormState] = useState({
    sentBy: "",
    contactInfo: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [sendMessage] = useMutation(SEND_MESSAGE);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
    console.log(formState);
  };
  useEffect(() => {
    if (loading) {
      setShowResponse(true);
      setResponseText("Sending...");
    }
    setTimeout(() => {
      if (!loading) return;
      setResponseText("Something went wrong, please try again later.");
      setLoading(false);
    }, 10000);
  }, [loading]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (
      formState.name === "" ||
      formState.message === "" ||
      formState.contact === ""
    ) {
      setShowResponse(true);
      setResponseText("Please fill out all fields.");
      return;
    }
    setLoading(true);

    const response = await sendMessage({
      variables: {
        sentBy: formState.name,
        message: formState.message,
        contactInfo: formState.contact,
      },
    }).then((res) => {
      setLoading(false);
      setShowResponse(true);
      if (res.data.sendMessage === "Email sent") {
        setResponseText(
          "Thank you for your message! \n I will get back to you as soon as possible."
        );
      } else {
        setResponseText("Something went wrong, please try again later.");
      }
      setFormState({
        sentBy: "",
        contactInfo: "",
        message: "",
      });
    });
  };

  return (
    <div className={`section-right-body ${darkMode ? "dark" : ""} contact`}>
      {showResponse ? (
        <div className={`response ${darkMode ? "dark" : ""}`}>
          <div className="response-text">
            <h1>{responseText}</h1>
          </div>
          <button
            className="response-button"
            onClick={() => setShowResponse(false)}
          >
            Close
          </button>
        </div>
      ) : (
        ""
      )}
      <div className={`section-header ${darkMode ? "dark" : ""}`}>
        <div className="header-text">Contact</div>
        <div className={`header-line ${darkMode ? "dark" : ""}`} />
      </div>
      <div className={`contact-form-background ${darkMode ? "dark" : ""}`}>
        <form
          className={`contact-form ${darkMode ? "dark" : ""}`}
          onSubmit={handleSubmit}
        >
          <div className={`section-right-header ${darkMode ? "dark" : ""}`}>
            <h1>Send me a message,</h1>
          </div>
          <div className="contact-form-row">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Name "
              onChange={handleChange}
            />
          </div>
          <div className="contact-form-row">
            <label htmlFor="contact">Contact</label>
            <input
              type="text"
              name="contact"
              id="contact"
              onChange={handleChange}
              placeholder="Email or Phone Number"
            />
          </div>
          <div className="contact-form-row">
            <label htmlFor="message">Message</label>
            <textarea
              name="message"
              id="message"
              rows="5"
              onChange={handleChange}
              placeholder="Type your message here..."
            />
          </div>
          <div className="contact-form-row">
            {loading ? (
              <div className="loading">
                <h2 className="loading-text">Sending...</h2>
                <div className="loading-spinner" />
              </div>
            ) : (
              <button
                className={`nav-button submit ${darkMode ? "dark" : ""}`}
                type="submit"
              >
                Send
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
