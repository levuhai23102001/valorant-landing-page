import React from "react";
import HomeSection from "../HomeSection";
import "./agent.scss";

const Agent = (props) => {
  return (
    <HomeSection
      className={`agent-section ${props.isActive ? "active" : ""}`}
      contentClassName="agent-section__content overlay"
    >
      <div>AGENT</div>
    </HomeSection>
  );
};

export default Agent;
