import React from "react";

const AgentIcon = (props) => {
  return (
    <>
      <div className="agent-list__item" onClick={props.onClick}>
        <img className="agent-list__item__icon" src={props.agentIcon} alt="" />
        <img className="agent-list__item__role" src={props.roleIcon} alt="" />
      </div>
    </>
  );
};

export default AgentIcon;
