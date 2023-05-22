import React from "react";
import { trailer } from "../../../../assets";
import HomeSection from "../HomeSection";

import "./trailer.scss";

const Trailer = (props) => {
  return (
    <HomeSection
      className={`trailer-section ${props.isActive ? "active" : ""}`}
      contentClassName="trailer-section__content"
    >
      <div className="trailer-background-video">
        <video autoPlay loop={true} muted={true}>
          <source src={trailer} type="video/mp4" />
        </video>
      </div>
    </HomeSection>
  );
};

export default Trailer;
