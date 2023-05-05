import React, { useState, useEffect } from "react";
import HomeSection from "../HomeSection";
import valorantApi from "../../../../api/valorantAPI";
import "./agent.scss";

const Agent = (props) => {
  const [agents, setAgents] = useState([]);
  useEffect(() => {
    const getAgents = async () => {
      try {
        const response = await valorantApi.getAgentsList();
        console.log(response.data.data);
        setAgents(response.data.data);
      } catch (err) {
        console.error(err, "Error get agents");
      }
    };
    getAgents();
  }, []);

  return (
    <HomeSection
      className={`agent-section ${props.isActive ? "active" : ""}`}
      contentClassName="agent-section__content overlay"
    >
      {agents.map((agent) => (
        <div style={{ display: "flex" }}>
          <h3>{agent.displayName}</h3>
          <img
            src={agent.displayIcon}
            alt={agent.displayName}
            width={50}
            height={50}
          />
        </div>
      ))}
    </HomeSection>
  );
};

export default Agent;
