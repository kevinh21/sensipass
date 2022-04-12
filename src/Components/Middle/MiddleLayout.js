import React from "react";
import "./middleLayout.css";

function MiddleLayout() {
  return (
    <div className="wrapper">
      <img
        className="image1"
        src={process.env.PUBLIC_URL + "/images/architecture.jpg "}
        alt="Architecture"
      />
      <img
        className="image2"
        src={process.env.PUBLIC_URL + "/images/Sin-nombreb.png"}
        alt="ShoppingCartLogo"
      />
    </div>
  );
}

export default MiddleLayout;
