import React from "react";
import HomeSection from "../HomeSection";
import { SplitBg, duelist, gamePlay } from "../../../../assets";

import "./credits.scss";

const Credits = (props) => {
  return (
    <HomeSection
      className={`credits-section ${props.isActive ? "active" : ""}`}
      contentClassName="credits-section__content"
      bgImage={SplitBg}
    >
      <div className="milkyBg"></div>
      <div className="credits-section__main">
        <div className="duelist-agents">
          <img className="duelist-agents__img" src={duelist} alt="" />
        </div>
        <div className="credits-content">
          <div className="credits-content__overview-title">
            <h1 className="credits-content__title">We are Valorant</h1>
            <div className="credits-content__scamble-text">
              <span>VLRT PROTOCOL</span>
              <span>MR0C - SWD - BR4</span>
            </div>
          </div>

          <div className="credits-content__game-play--video">
            <div className="game-play__dot"></div>
            <div className="credits-content__tag">Gameplay</div>
            <video autoPlay loop={true} muted={true}>
              <source src={gamePlay} type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
    </HomeSection>
  );
};

export default Credits;
