import React, { useState, useEffect } from "react";
import HomeSection from "../HomeSection";
import valorantApi from "../../../../api/valorantAPI";
import AgentDetails from "./agent-details";
import {
  LotusBg,
  jettIcon,
  reynaIcon,
  fadeIcon,
  sageIcon,
  phoenixIcon,
  roleIcon,
} from "../../../../assets";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Mousewheel, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "./agent.scss";

// SwiperCore.use([Navigation]);

// const swiperOptions = {
//   direction: "vertical",
//   slidesPerView: 3,
// };

const Agent = (props) => {
  const [agents, setAgents] = useState([]);
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
          {/* <Swiper direction={"vertical"} slidesPerView={3}>
            {agents.map((agent, index) => (
              <SwiperSlide>
                <div className="agent-list__item" key={index}>
                  <img
                    src={agent.displayIcon}
                    alt=""
                    className="agent-list__item__icon"
                  />
                  <img
                    className="agent-list__item__role"
                    src={agent.role.displayIcon}
                    alt=""
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper> */}
          {/* <div className="agent-list__item">
            <img src={reynaIcon} alt="" className="agent-list__item__icon" />
            <img className="agent-list__item__role" src={roleIcon} alt="" />
          </div>
          <div className="agent-list__item">
            <img src={fadeIcon} alt="" className="agent-list__item__icon" />
            <img className="agent-list__item__role" src={roleIcon} alt="" />
          </div>
          <div className="agent-list__item">
            <img src={sageIcon} alt="" className="agent-list__item__icon" />
            <img className="agent-list__item__role" src={roleIcon} alt="" />
          </div>
          <div className="agent-list__item">
            <img src={phoenixIcon} alt="" className="agent-list__item__icon" />
            <img className="agent-list__item__role" src={roleIcon} alt="" />
          </div> */}
          {agents.map((agent) => (
            <div className="agent-list__item">
              <img
                src={agent.displayIcon}
                alt=""
                className="agent-list__item__icon"
              />
              {/* <img
                className="agent-list__item__role"
                src={agent.role.displayIcon}
                alt=""
              /> */}
            </div>
          ))}
        </div>
        {/* <div className="line-box">
          <div className="divider-left"></div>
          <div className="left-line"></div>
          <img src={midArrow} alt="" className="mid-arrow" />
          <div className="polygon"></div>
          <div className="right-line"></div>
          <div className="divider-right"></div>
        </div> */}
        <AgentDetails />
      </div>
    </HomeSection>
  );
};

export default Agent;
