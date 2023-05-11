import React, { useState, useEffect, useRef } from "react";
import HomeSection from "../HomeSection";
import valorantApi from "../../../../api/valorantAPI";
import AgentDetails from "./agent-details";
import AgentIcon from "./agent-icons";
import { LotusBg, btnPrev } from "../../../../assets";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "./agent.scss";

SwiperCore.use([Navigation]);

const Agent = (props) => {
  const [agents, setAgents] = useState([]);

  const swiperAgentRef = useRef(null);

  const swiperAgentOptions = {
    direction: "vertical",
    spaceBetween: 10,
    slidesPerView: "auto",
    nested: true,
    speed: 600,
    navigation: {
      prevEl: ".prevAgent-btn",
      nextEl: ".nextAgent-btn",
    },
    // noSwiping: true,
    // noSwipingClass: {
    //   el: "swiper-no-swiping",
    // },
    // slidesPerGroup: 1,
    // loop: true,
  };

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

  const handlePrevAgent = () => {
    if (!swiperAgentRef.current) return;
    swiperAgentRef.current.slidePrev();
  };

  const handleNextAgent = () => {
    if (!swiperAgentRef.current) return;
    swiperAgentRef.current.slideNext();
  };

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
              <SwiperSlide key={index}>
                <AgentIcon
                  agentIcon={agent.displayIcon}
                  roleIcon={agent?.role?.displayIcon}
                />
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="prevAgent-btn">
            <img src={btnPrev} alt="" onClick={handlePrevAgent} />
          </div>
          <div className="nextAgent-btn">
            <img src={btnPrev} alt="" onClick={handleNextAgent} />
          </div>
        </div>
        <AgentDetails />
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
