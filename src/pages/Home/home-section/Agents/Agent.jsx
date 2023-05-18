import React, { useState, useEffect, useRef } from "react";
import HomeSection from "../HomeSection";
import valorantApi from "../../../../api/valorantAPI";
import AgentDetails from "./agent-details";
import AgentIcon from "./agent-icons";
import { LotusBg, btnPrev } from "../../../../assets";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, FreeMode } from "swiper";
import "swiper/swiper-bundle.css";
import "./agent.scss";

SwiperCore.use([Navigation, FreeMode]);

const Agent = (props) => {
  const [agents, setAgents] = useState([]);
  const [currentAgentIndex, setCurrentAgentIndex] = useState(0);
  const [tabs, setTabs] = useState(0);

  const swiperAgentRef = useRef(null);

  useEffect(() => {
    const getAgents = async () => {
      try {
        const response = await valorantApi.getAgentsList();
        const agentsRes = await response.data;
        console.log(agentsRes.data);
        setAgents(agentsRes.data);
      } catch (err) {
        console.error(err, "Error get agents");
      }
    };
    getAgents();
  }, []);

  const swiperAgentOptions = {
    direction: "vertical",
    slidesPerView: 5,
    spaceBetween: 10,
    navigation: {
      prevEl: ".prev-agent-btn",
      nextEl: ".next-agent-btn",
      disabledClass: "swiper-agent-button-disabled",
    },
    noSwiping: true,
    noSwipingClass: {
      el: "swiper-no-swiping",
    },
    onSlideChange: (swiper) => {
      setCurrentAgentIndex(swiper.realIndex);
      const fullPortrait = document.querySelector(".agent-full-portrait__img");
      const bgTagName = document.querySelector(".tag-name");
      fullPortrait.animate(
        [
          { transform: "translate(25%, 0)", opacity: 0 },
          { transform: "translate(0, 0)", opacity: 1 },
        ],
        {
          duration: 500,
        }
      );
      bgTagName.animate(
        [
          { transform: "translate(-25%, 0)", opacity: 0 },
          { transform: "translate(0, 0)", opacity: 0.5 },
        ],
        {
          duration: 500,
        }
      );
    },
  };

  const handlePrevAgent = () => {
    if (swiperAgentRef.current && swiperAgentRef.current.slidePrev) {
      swiperAgentRef.current.swiper?.slidePrev();
    }
  };

  const handleNextAgent = () => {
    if (swiperAgentRef.current && swiperAgentRef.current.slidePrev) {
      swiperAgentRef.current.swiper?.slideNext();
    }
  };

  const handleClickDetailsAgent = (index) => {
    swiperAgentRef.current.swiper?.slideTo(index);
    console.log("agent" + index);
  };

  // const getAgentDetails = async (agent) => {
  //   try {
  //     const uuid = agent.uuid;
  //     console.log("agentID:" + uuid);
  //     const response = await valorantApi.getAgentDetails(uuid);
  //     const agentDetails = await response.data;
  //     setAgentDetails(agentDetails.data);
  //   } catch (err) {
  //     console.error(err, "Error get agents");
  //   }
  // };

  // const handleClickDetailsAgent = (agent) => {
  //   getAgentDetails(agent);
  // };

  return (
    <HomeSection
      className={`agent-section ${props.isActive ? "active" : ""}`}
      contentClassName="agent-section__content"
      bgImage={LotusBg}
    >
      <div className="agent-section__title">
        <h1 className="agent-section__title--txt">Agents</h1>
      </div>
      <div className="agent-section__main">
        <div className="agent-list">
          <Swiper
            ref={swiperAgentRef}
            {...swiperAgentOptions}
            id="swiperAgents"
          >
            {agents.map((agent, index) => (
              <SwiperSlide key={agent.uuid}>
                <AgentIcon
                  onClick={() => handleClickDetailsAgent(index)}
                  agentIcon={agent.displayIcon}
                  roleIcon={agent?.role?.displayIcon}
                />
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="prev-agent-btn">
            <img src={btnPrev} alt="" onClick={handlePrevAgent} />
          </div>
          <div className="next-agent-btn">
            <img src={btnPrev} alt="" onClick={handleNextAgent} />
          </div>
        </div>
        {agents.length > 0 && (
          <AgentDetails
            className="agent-details__wrapper"
            fullPortrait={agents[currentAgentIndex].fullPortrait}
            bgTagName={agents[currentAgentIndex].background}
            name={agents[currentAgentIndex].displayName}
            roleTitle={agents[currentAgentIndex]?.role?.displayName}
          >
            <div className="agent__abilities">
              <div
                className={
                  tabs === 0
                    ? "agent__abilities__item active"
                    : "agent__abilities__item"
                }
                onClick={() => setTabs(0)}
              >
                <h3 className="agent__abilities__title">Info</h3>
                <img
                  src={agents[currentAgentIndex]?.role?.displayIcon}
                  alt=""
                  className="agent__abilities__icon"
                />
              </div>
              <div
                className={
                  tabs === 1
                    ? "agent__abilities__item active"
                    : "agent__abilities__item"
                }
                onClick={() => setTabs(1)}
              >
                <h3 className="agent__abilities__title">C</h3>
                <img
                  src={agents[currentAgentIndex]?.abilities[2]?.displayIcon}
                  alt=""
                  className="agent__abilities__icon"
                />
              </div>
              <div
                className={
                  tabs === 2
                    ? "agent__abilities__item active"
                    : "agent__abilities__item"
                }
                onClick={() => setTabs(2)}
              >
                <h3 className="agent__abilities__title">Q</h3>
                <img
                  src={agents[currentAgentIndex]?.abilities[0]?.displayIcon}
                  alt=""
                  className="agent__abilities__icon"
                />
              </div>
              <div
                className={
                  tabs === 3
                    ? "agent__abilities__item active"
                    : "agent__abilities__item"
                }
                onClick={() => setTabs(3)}
              >
                <h3 className="agent__abilities__title">E</h3>
                <img
                  src={agents[currentAgentIndex]?.abilities[1]?.displayIcon}
                  alt=""
                  className="agent__abilities__icon"
                />
              </div>
              <div
                className={
                  tabs === 4
                    ? "agent__abilities__item active"
                    : "agent__abilities__item"
                }
                onClick={() => setTabs(4)}
              >
                <h3 className="agent__abilities__title">X</h3>
                <img
                  src={agents[currentAgentIndex]?.abilities[3]?.displayIcon}
                  alt=""
                  className="agent__abilities__icon"
                />
              </div>
            </div>
            <div className="agent-introduce">
              <div className={tabs === 0 ? "box active" : "box"}>
                <h3 className="agent-introduce__top">
                  {agents[currentAgentIndex].description}
                </h3>
                <div className="agent-introduce__bottom">
                  <h3 className="agent-introduce__title">
                    {agents[currentAgentIndex]?.role?.displayName}
                  </h3>
                  <p className="agent-introduce__subtitle">
                    {agents[currentAgentIndex]?.role?.description}
                  </p>
                </div>
              </div>
              <div className={tabs === 1 ? "box active" : "box"}>
                <div className="agent-introduce__bottom">
                  <h3 className="agent-introduce__title">
                    {agents[currentAgentIndex]?.abilities[2]?.displayName}
                  </h3>
                  <p className="agent-introduce__subtitle">
                    {agents[currentAgentIndex]?.abilities[2]?.description}
                  </p>
                </div>
              </div>
              <div className={tabs === 2 ? "box active" : "box"}>
                <div className="agent-introduce__bottom">
                  <h3 className="agent-introduce__title">
                    {agents[currentAgentIndex]?.abilities[0]?.displayName}
                  </h3>
                  <p className="agent-introduce__subtitle">
                    {agents[currentAgentIndex]?.abilities[0]?.description}
                  </p>
                </div>
              </div>
              <div className={tabs === 3 ? "box active" : "box"}>
                <div className="agent-introduce__bottom">
                  <h3 className="agent-introduce__title">
                    {agents[currentAgentIndex]?.abilities[1]?.displayName}
                  </h3>
                  <p className="agent-introduce__subtitle">
                    {agents[currentAgentIndex]?.abilities[1]?.description}
                  </p>
                </div>
              </div>
              <div className={tabs === 4 ? "box active" : "box"}>
                <div className="agent-introduce__bottom">
                  <h3 className="agent-introduce__title">
                    {agents[currentAgentIndex]?.abilities[3]?.displayName}
                  </h3>
                  <p className="agent-introduce__subtitle">
                    {agents[currentAgentIndex]?.abilities[3]?.description}
                  </p>
                </div>
              </div>
            </div>
          </AgentDetails>
        )}
      </div>
    </HomeSection>
  );
};

export default Agent;

{
  /* <div className="line-box">
  <div className="divider-left"></div>
  <div className="left-line"></div>
  <img src={midArrow} alt="" className="mid-arrow" />
  <div className="polygon"></div>
  <div className="right-line"></div>
  <div className="divider-right"></div>
</div> */
}
