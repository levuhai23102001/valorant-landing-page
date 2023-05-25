import React, { useEffect, useState } from "react";
import { AgentCard } from "../../components/Card/";
import { ValorantLogo } from "../../components/Icons";
import valorantAPI from "../../api/valorantAPI";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import "swiper/swiper-bundle.css";
import "./agents.scss";

SwiperCore.use([]);

const Agents = () => {
  const [agents, setAgents] = useState([]);
  const agentsSet = new Set(agents);
  console.log(agentsSet);

  useEffect(() => {
    const getAgents = async () => {
      try {
        const response = await valorantAPI.getAgentsList();
        const agentsData = response.data;
        setAgents(agentsData.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    getAgents();
  }, []);

  const swiperOptions = {
    slidesPerView: 5,
    speed: 500,
  };

  return (
    <div className="agents-container">
      <div className="agent__wrapper--main">
        <div className="center-logo">
          <ValorantLogo />
        </div>
        <div className="agent-content">
          <Swiper {...swiperOptions} className="agentsSwiper">
            {agents.map((agent, index) => (
              <SwiperSlide key={agent.uuid}>
                <AgentCard
                  agentImg={agent.fullPortrait}
                  bgColor={agent.backgroundGradientColors.map(
                    (color) => `#${color}`
                  )}
                  bgTagName={agent.background}
                  name={agent.displayName}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Agents;
