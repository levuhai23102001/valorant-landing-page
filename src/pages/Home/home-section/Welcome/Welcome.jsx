import React from "react";
import { videoBg } from "../../../../assets";
import HomeSection from "../HomeSection";

import "./welcome.scss";

const Welcome = (props) => {
  return (
    <HomeSection
      className={`welcome ${props.isActive ? "active" : ""}`}
      contentClassName="welcome__content overlay"
    >
      <div className="video-bg">
        <video src={videoBg} autoPlay loop={true} muted={true} />
      </div>

      <h1 className="welcome__logo">vALORaNT</h1>
      <div className="btn-wrapper">
        <div className="play-now__btn">Play Now</div>
      </div>
    </HomeSection>
  );
};

export default Welcome;
