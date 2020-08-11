import React from "react";

const Way = () => {
  return (
    <div className="contact-way container">
      <div>
        <span className="material-icons">map</span>
        <p className="title">location</p>
        <p className="desc">242 W 41st St, Lorem ipsum, NY 10036</p>
      </div>
      <div>
        <span className="material-icons">phone</span>
        <p className="title">call us</p>
        <p className="desc">
          <a href="tel:+1999999999">+1 999 999 999</a>
        </p>
      </div>
      <div>
        <span className="material-icons">email</span>
        <p className="title">mail us</p>
        <p className="desc">
          <a href="mailto:example@example.com">example@example.com</a>
        </p>
      </div>
    </div>
  );
};

export default Way;
