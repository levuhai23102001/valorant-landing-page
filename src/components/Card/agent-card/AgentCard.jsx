import React from "react";
import "./agentCard.scss";

const AgentCard = (props) => {
  return (
    <>
      <div className="agent-card">
        <img src={props.agentImg} alt="" className="agent-card__img" />
        <div className="agent-card__background--tagname">
          <img src={props.bgTagName} alt="" className="agent-card__bgTagName" />
        </div>
      </div>
    </>
  );
};

export default AgentCard;
