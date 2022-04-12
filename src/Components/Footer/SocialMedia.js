import React from "react";
import "./socialMedia.css";

function SocialMedia() {
  return (
    <div>
      <div className="imageWrapper">
        <img
          className="twitter"
          src={process.env.PUBLIC_URL + "/images/twitter.png"}
          alt="Twitter"
        />
        <img
          className="facebook"
          src={process.env.PUBLIC_URL + "/images/facebook.png"}
          alt="Facebook"
        />{" "}
        <img
          className="linkedin"
          src={process.env.PUBLIC_URL + "/images/linkedin.png"}
          alt="LINKEDIN"
        />
      </div>
      <div className="socialMediaText">TWITTER FACEBOOK LINKEDIN</div>
    </div>
  );
}

export default SocialMedia;
