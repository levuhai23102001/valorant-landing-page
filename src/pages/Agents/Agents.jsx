import React, { useEffect, useRef, useState } from "react";
import { AgentCard } from "../../components/Card/";
import valorantAPI from "../../api/valorantAPI";
import Tabs, { TabsItem } from "../../components/Tabs/Tabs";
import TabsContent from "../../components/Tabs/TabsContent";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import "swiper/swiper-bundle.css";
import "./agents.scss";

SwiperCore.use([]);

const Agents = () => {
  const [agents, setAgents] = useState([]);
  const [agentIndex, setAgentIndex] = useState(0);
  const [tabs, setTabs] = useState(0);
  const swiperAgentRef = useRef(null);

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
    slidesPerView: 9,
    speed: 500,
    // centeredSlides: true,
    // loop: true,
    onSlideChange: (swiper) => {
      setAgentIndex(swiper.activeIndex);
    },
  };

  const handleClickActiveAgent = (index) => {
    swiperAgentRef.current.swiper?.slideTo(index);
    console.log("agent" + index);
  };

  return (
    <div className="agents-container">
      <div className="agent__wrapper--main">
        <div className="agent__background-blur"></div>
        <div className="agent-content">
          {agents.length > 0 && (
            <>
              <div className="agent__portrait">
                <img
                  src={agents[agentIndex].fullPortrait}
                  alt=""
                  className="agent__portrait--img"
                />
              </div>
              <div className="agent__details">
                <div className="agent__details--wrapper">
                  <div className="agent__info">
                    <p className="role-text">
                      {agents[agentIndex]?.role?.displayName}
                    </p>
                    <h1 className="agent-name">
                      {agents[agentIndex].displayName}
                    </h1>
                    <h3 className="agent__introduce">
                      {agents[agentIndex].description}
                    </h3>
                  </div>
                  <Tabs>
                    {agents[agentIndex]?.abilities
                      .slice(0, 4)
                      .map((item, index) => (
                        <TabsItem
                          key={index}
                          // ref={tabActive}
                          cName={
                            tabs === index ? "tabs-item active" : "tabs-item"
                          }
                          clickTabsItem={() => setTabs(index)}
                          icon={item.displayIcon}
                        />
                      ))}
                  </Tabs>

                  {agents[agentIndex]?.abilities
                    .slice(0, 4)
                    .map((item, index) => (
                      <TabsContent
                        key={index}
                        cName={tabs === index ? "tab-pane active" : "tab-pane"}
                      >
                        <h3>{item.displayName}</h3>
                        <p>{item.description}</p>
                      </TabsContent>
                    ))}
                </div>
              </div>
            </>
          )}
          <Swiper
            {...swiperOptions}
            className="agentsSwiper"
            ref={swiperAgentRef}
          >
            {agents.map((agent, index) => (
              <SwiperSlide key={agent.uuid}>
                <AgentCard
                  clickActiveAgent={() => handleClickActiveAgent(index)}
                  agentImg={agent.fullPortrait}
                  name={agent.displayName}
                  // bgColor={agent.backgroundGradientColors.map(
                  //   (color) => `#${color}`
                  // )}
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
