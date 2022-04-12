import React from "react";
import "./footerLayout.css";
import SocialMedia from "./SocialMedia";
import FooterText from "./FooterText";

function FooterLayout() {
  return (
    <div className="footWrapper">
      <div className="mediaImages">
        <SocialMedia />
      </div>
      <div className="footText">
        <FooterText />
      </div>
    </div>
  );
}

export default FooterLayout;
