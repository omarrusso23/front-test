import React from "react";
import { isMobile } from "react-device-detect";
import Desktop from "./Desktop";
import MobilePage from "./MobilePage";

function FrontPage() {
  if (isMobile) {
    return (
      <div className="FrontPage">
        <MobilePage></MobilePage>
      </div>
    );
  } else {
    return (
      <div className="FrontPage">
        <Desktop></Desktop>
      </div>
    );
  }
}

export default FrontPage;
