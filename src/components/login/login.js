import React, { useState,useEffect } from "react";
import LoginMenu from "./loginMenu";
import "./login.css";

const Login = () => {
  let [bgYpos, setBgypos] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
        setBgypos(bgYpos--);
    }, 10);
    return () => clearInterval(interval);
  }, [bgYpos]);


  return (
    <div id="login" style={{backgroundPositionY:bgYpos+"px"}}>
      <div className="bg-cover"></div>
      <span id="logo">MomDaddy</span>
      <LoginMenu/>
    </div>
  );
};

export default Login;
