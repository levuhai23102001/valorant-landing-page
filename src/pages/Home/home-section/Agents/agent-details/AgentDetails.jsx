import React from "react";
import { decoration, divArrow, midArrow } from "../../../../../assets";

const AgentDetails = (props) => {
  return (
    <div className={props.className}>
      <div className="agent-full-portrait">
        <img
          src={props.fullPortrait}
          alt=""
          className="agent-full-portrait__img"
        />
        <img src={props.bgTagName} alt="" className="tag-name" />
      </div>
      <div className="agent__info">
        <div className="agent__info__container">
          <div className="agent__info__divider">
            <img src={divArrow} alt="" className="div-arrow" />
            <img src={decoration} alt="" className="decoration" />
          </div>
          <div className="agent__info__wrapper">
            <p className="role-text">{props.roleTitle}</p>
            <h1 className="agent-name">{props.name}</h1>
            <div className="agent__abilities">
              <div className="agent__abilities__item active">
                <h3 className="agent__abilities__title">Info</h3>
                <img
                  src={props.roleIcon}
                  alt=""
                  className="agent__abilities__icon"
                />
              </div>
              <div className="agent__abilities__item">
                <h3 className="agent__abilities__title">Q</h3>
                <img
                  src={props.skill}
                  alt=""
                  className="agent__abilities__icon"
                />
              </div>
              <div className="agent__abilities__item">
                <h3 className="agent__abilities__title">C</h3>
                <img
                  src={props.skill}
                  alt=""
                  className="agent__abilities__icon"
                />
              </div>
              <div className="agent__abilities__item">
                <h3 className="agent__abilities__title">E</h3>
                <img
                  src={props.skill}
                  alt=""
                  className="agent__abilities__icon"
                />
              </div>
              <div className="agent__abilities__item">
                <h3 className="agent__abilities__title">X</h3>
                <img
                  src={props.skill}
                  alt=""
                  className="agent__abilities__icon"
                />
              </div>
            </div>
            <div className="agent-introduce">
              <h3 className="agent-introduce__top">{props.desc}</h3>
              <div className="agent-introduce__bottom">
                <h3 className="agent-introduce__title">{props.roleTitle}</h3>
                <p className="agent-introduce__subtitle">{props.roleDesc}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgentDetails;
