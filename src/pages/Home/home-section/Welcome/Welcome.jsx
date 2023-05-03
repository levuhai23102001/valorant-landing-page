import React from "react";
import { ValEP6, arcade } from "../../../../assets";
import newsBg2 from "../../../../assets/backgrounds/newsBg2.jpg";
import HomeSection from "../HomeSection";
import { newsList } from "../../../../constants";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Mousewheel, Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "./welcome.scss";

SwiperCore.use([Mousewheel, Navigation, Pagination]);

const swiperOptions = {};

const Welcome = (props) => {
  return (
    <HomeSection
      className={`welcome-section ${props.isActive ? "active" : ""}`}
      contentClassName="welcome-section__content overlay"
    >
      <div className="video-bg">
        <video src={ValEP6} autoPlay loop={true} muted={true} />
      </div>
      <div className="news-container">
        <div className="news__content--main">
          <img src={arcade} alt="" className="news__img" />
          <div className="news__bottom">
            <h1 className="news__title">Featured</h1>
            <span>collection</span>
          </div>
        </div>
        <div className="news__content--sub">
          <Swiper className="news-swiper">
            {newsList.map((news) => (
              <SwiperSlide>
                <div className="news--sub__wrapper">
                  <img src={news.img} alt="" />
                  <h2 className="news--sub__title">{news.title}</h2>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <h1 className="welcome-section__logo">vALORaNT</h1>
      <div className="btn-wrapper">
        <span></span>
        <span></span>
        <div className="play-now__btn">
          <span className="square-2x"></span>
          Play Now
          <span className="square-2x"></span>
        </div>
      </div>
    </HomeSection>
  );
};

export default Welcome;
