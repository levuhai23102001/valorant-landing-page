import React from "react";
import { radiant } from "../../../assets";
import "./agentCard.scss";

const AgentCard = (props) => {
  const bgColor = props.bgColor
    ? {
        background: `linear-gradient(to top left, ${props.bgColor})`,
      }
    : {};

  return (
    <>
      <div className="agent-card" onClick={props.onClickAgent}>
        <img src={props.agentImg} alt="" className="agent-card__img" />
        <div className="agent-card__background--tagname" style={bgColor}>
          <img src={props.bgTagName} alt="" className="agent-card__bgTagName" />
        </div>
        <div className="agent-card__radiant">
          <img src={radiant} alt="" className="agent-card__radiant-icon" />
        </div>
      </div>
      <h1 className="agent-card__name">{props.name}</h1>
    </>
  );
};

export default AgentCard;
