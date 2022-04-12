import React from "react";
import "./logo.css";

function Logo() {
  return (
    <img
      className="logo"
      src={process.env.PUBLIC_URL + "/images/h-logo.png"}
      alt="SensiPass_Logo"
    />
  );
}

export default Logo;
