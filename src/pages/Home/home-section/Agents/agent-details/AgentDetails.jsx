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
            {props.children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgentDetails;
