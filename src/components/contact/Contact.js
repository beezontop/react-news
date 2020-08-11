import React from "react";
import Map from "./map";
import Title from "./title";
import Way from "./way";
import Form from "./ContactForm";
import "./contact.css";

const Contact = () => {
  return (
    <div className="contact">
      <Map />
      <Title />
      <Way/>
      <Form/>
    </div>
  );
};

export default Contact;
