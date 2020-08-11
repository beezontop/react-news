import React from "react";
import { Button } from "react-bootstrap";
import "../../css/fontello.css";
import "../../font/fontello.ttf";

const LoginMenu = () => {
  return (
    <ul className="login-menu">
      <li>SIGN IN / SIGN UP</li>
      <li>
        <Button variant="light" size="sm">
          <span className="material-icons icon">stay_current_portrait</span>Mobile Number
        </Button>{" "}
      </li>
      <li>
        <Button variant="light" size="sm">
          <span className="material-icons icon">email</span>Email
        </Button>{" "}
      </li>
      <li>
        <Button variant="primary" size="sm">
          <span className="material-icons icon">facebook</span>Sign in with Facebook
        </Button>{" "}
      </li>
      <li>
        <Button variant="danger" size="sm">
          <i className="icon-google-plus-circle icon"></i>
          Sign in with Google
        </Button>{" "}
      </li>
    </ul>
  );
};

export default LoginMenu;
