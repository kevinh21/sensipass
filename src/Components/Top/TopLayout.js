import React from "react";
import Menu from "./Menu";
import Logo from "./Logo";
import Text from "./Text";
import NavigateBar from "./NavigateBar";
import "./topLayout.css";

function TopLayout() {
  return (
    <div className="background">
      {" "}
      <div className="topline">
        <Logo />
        <Menu />
      </div>
      <Text />
      <NavigateBar />
    </div>
  );
}

export default TopLayout;
