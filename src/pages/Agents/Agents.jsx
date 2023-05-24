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

  useEffect(() => {
    const getAgents = async () => {
      try {
        const response = await valorantAPI.getAgentsList();
        const agentsData = response.data;
        setAgents(agentsData.data);
      } catch (err) {
        console.log(err);
      }
    };
    getAgents();
  }, []);

  const swiperOptions = {
    slidesPerView: 5,
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
                  bgTagName={agent.background}
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
