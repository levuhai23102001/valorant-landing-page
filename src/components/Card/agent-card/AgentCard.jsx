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
      <div
        className="agent-card"
        style={bgColor}
        onClick={props.clickActiveAgent}
      >
        <img src={props.agentImg} alt="" className="agent-card__img" />
        <div className="agent-card__bottom">
          <h3 className="agent-card__bottom--name">{props.name}</h3>
        </div>
      </div>
      <div className="agent-card__border"></div>
    </>
  );
};

export default AgentCard;
