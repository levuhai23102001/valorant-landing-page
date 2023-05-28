import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ValorantLogo } from "../../components/Icons";
import valorantAPI from "../../api/valorantAPI";

import "./agentDetails.scss";

const AgentDetails = (props) => {
  const { id } = useParams();
  const [agentDetails, setAgentDetails] = useState([]);
  const [color, setColor] = useState([]);

  useEffect(() => {
    const getAgentDetails = async () => {
      try {
        const response = await valorantAPI.getAgentDetails(id);
        const agentData = response.data;
        setAgentDetails(agentData.data);
        const colorData = agentData.data.backgroundGradientColors[0];
        setColor(colorData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    getAgentDetails();
  }, [id]);

  return (
    <div className="agent-details-container">
      <div className="agent-details__background">
        <div className="center-logo">
          <ValorantLogo color={"#" + color} />
        </div>
        <div className="agent-details-content">
          <h1 className="agent-details-content__name">
            {agentDetails.displayName}
          </h1>
          <div className="agent-details-content__fullPortrait">
            <img
              src={agentDetails.fullPortrait}
              className="agent-details-content__fullPortrait--img"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgentDetails;
