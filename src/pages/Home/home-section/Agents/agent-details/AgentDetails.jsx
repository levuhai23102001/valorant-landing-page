import React from "react";
import {
  fullPortrait,
  decoration,
  tagName,
  roleIcon,
  skillQ,
  skillC,
  skillE,
  skillX,
  divArrow,
  midArrow,
} from "../../../../../assets";

const AgentDetails = () => {
  return (
    <>
      <div className="agent-full-portrait">
        <img src={fullPortrait} alt="" className="agent-full-portrait__img" />
        <img src={tagName} alt="" className="tag-name" />
      </div>
      <div className="agent__info">
        <div className="agent__info__container">
          <div className="agent__info__divider">
            <img src={divArrow} alt="" className="div-arrow" />
            <img src={decoration} alt="" className="decoration" />
          </div>
          <div className="agent__info__wrapper">
            <p className="role-text">Duelist</p>
            <h1 className="agent-name">Jett</h1>
            <div className="agent__abilities">
              <div className="agent__abilities__item">
                <h3 className="agent__abilities__title">Info</h3>
                <img src={roleIcon} alt="" className="agent__abilities__icon" />
              </div>
              <div className="agent__abilities__item">
                <h3 className="agent__abilities__title">Q</h3>
                <img src={skillQ} alt="" className="agent__abilities__icon" />
              </div>
              <div className="agent__abilities__item">
                <h3 className="agent__abilities__title">C</h3>
                <img src={skillC} alt="" className="agent__abilities__icon" />
              </div>
              <div className="agent__abilities__item">
                <h3 className="agent__abilities__title">E</h3>
                <img src={skillE} alt="" className="agent__abilities__icon" />
              </div>
              <div className="agent__abilities__item">
                <h3 className="agent__abilities__title">X</h3>
                <img src={skillX} alt="" className="agent__abilities__icon" />
              </div>
            </div>
            <div className="agent-introduce">
              <h3 className="agent-introduce__top">
                Representing her home country of South Korea, Jett's agile and
                evasive fighting style lets her take risks no one else can. She
                runs circles around every skirmish, cutting enemies before they
                even know what hit them.
              </h3>
              <div className="agent-introduce__bottom">
                <h3 className="agent-introduce__title">Duelist</h3>
                <p className="agent-introduce__subtitle">
                  Duelists are self-sufficient fraggers who their team expects,
                  through abilities and skills, to get high frags and seek out
                  engagements first.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AgentDetails;
