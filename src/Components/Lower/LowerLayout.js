import React from "react";
import "./lowerLayout.css";

function LowerLayout() {
  return (
    <img
      className="tagline"
      src={process.env.PUBLIC_URL + "/images/ReImagining.png"}
      alt="TagLine"
    />
  );
}

export default LowerLayout;
