import React, { useState, useEffect } from "react";
import HomeSection from "../HomeSection";
import valorantApi from "../../../../api/valorantAPI";
import {
  LotusBg,
  jettIcon,
  reynaIcon,
  fadeIcon,
  sageIcon,
  phoenixIcon,
  roleIcon,
} from "../../../../assets";
import "./agent.scss";

const Agent = (props) => {
  // const [agents, setAgents] = useState([]);
  // useEffect(() => {
  //   const getAgents = async () => {
  //     try {
  //       const response = await valorantApi.getAgentsList();
  //       console.log(response.data.data);
  //       setAgents(response.data.data);
  //     } catch (err) {
  //       console.error(err, "Error get agents");
  //     }
  //   };
  //   getAgents();
  // }, []);

  return (
    <HomeSection
      className={`agent-section ${props.isActive ? "active" : ""}`}
      contentClassName="agent-section__content"
      bgImage={LotusBg}
    >
      <div className="agent-section__title">
        <h1 className="agent-section__title--txt">Agents</h1>
      </div>
      <div className="section-wrapper">
        <div className="agent-list">
          <div className="agent-list__item">
            <img src={jettIcon} alt="" className="agent-list__item__icon" />
            <img className="agent-list__item__role" src={roleIcon} alt="" />
          </div>
          <div className="agent-list__item">
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
          </div>
        </div>
      </div>
    </HomeSection>
  );
};

export default Agent;
