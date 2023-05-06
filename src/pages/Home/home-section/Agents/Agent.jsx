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
  fullPortrait,
  decoration,
  tagName,
  skillQ,
  skillC,
  skillE,
  skillX,
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
      <div className="agent-section__main">
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
        <div className="line-box">
          <div className="divider-left"></div>
          <div className="left-line"></div>
          <div className="circle"></div>
          <div className="right-line"></div>
          <div className="divider-right"></div>
        </div>
        <div className="agent-full-portrait">
          <img src={fullPortrait} alt="" className="agent-full-portrait__img" />
          <img src={tagName} alt="" className="tag-name" />
        </div>
        <div className="agent__info">
          <div className="agent__info__container">
            <img src={decoration} alt="" className="decoration" />
            <div className="agent__info__wrapper">
              <p className="role-text">Duelist</p>
              <h1 className="agent-name">Jett</h1>
              <div className="agent__abilities">
                <div className="agent__abilities__item">
                  <h3 className="agent__abilities__title">Info</h3>
                  <img
                    src={roleIcon}
                    alt=""
                    className="agent__abilities__icon"
                  />
                </div>
                <div className="agent__abilities__item">
                  <h3 className="agent__abilities__title">Q</h3>
                  <img src={skillQ} alt="" className="agent__abilities__icon" />
                </div>
                <div className="agent__abilities__item">
                  <h3 className="agent__abilities__title">C</h3>
                  <img src={skillC} alt="" className="agent__abilities__icon" />
                </div>
                <div className="agent__abilities__item">
                  <h3 className="agent__abilities__title">E</h3>
                  <img src={skillE} alt="" className="agent__abilities__icon" />
                </div>
                <div className="agent__abilities__item">
                  <h3 className="agent__abilities__title">X</h3>
                  <img src={skillX} alt="" className="agent__abilities__icon" />
                </div>
              </div>
            </div>

            {/* <h3 className="agent-introduce">
              Representing her home country of South Korea, Jett's agile and
              evasive fighting style lets her take risks no one else can. She
              runs circles around every skirmish, cutting enemies before they
              even know what hit them.
            </h3> */}
          </div>
        </div>
      </div>
    </HomeSection>
  );
};

export default Agent;
