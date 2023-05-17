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
  const [agentDetails, setAgentDetails] = useState("");

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
            roleIcon={agents[currentAgentIndex]?.role?.displayIcon}
            icon={agents[currentAgentIndex]?.abilities?.displayIcon}
            // skillQ={agents[currentAgentIndex]?.skill}
            // skillC={agents[currentAgentIndex]?.skill}
            // skillE={agents[currentAgentIndex]?.skill}
            // skillX={agents[currentAgentIndex]?.skill}
            desc={agents[currentAgentIndex]?.description}
            roleDesc={agents[currentAgentIndex]?.role?.description}
          />
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
