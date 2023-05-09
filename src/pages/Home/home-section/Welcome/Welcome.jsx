import React, { useRef, useState } from "react";
import { ValEP6, arcade } from "../../../../assets";
import valogo from "../../../../../public/logo/valogo.png";
import HomeSection from "../HomeSection";
import { newsList } from "../../../../constants";
import { btnPrev } from "../../../../assets";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./welcome.scss";

SwiperCore.use([Navigation, Pagination, Autoplay]);

const swiperNewsOptions = {
  spaceBetween: 0,
  centeredSlides: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  loop: true,
  pagination: true,
  navigation: {
    prevEl: ".prev-btn",
    nextEl: ".next-btn",
  },
  nested: true,
};

const Welcome = (props) => {
  const [showNews, setShowNews] = useState(true);

  const swiperRef = useRef(null);

  const handlePrevSlide = () => {
    if (!swiperRef.current) return;
    swiperRef.current.swiper.slidePrev();
  };

  const handleNextSlide = () => {
    if (!swiperRef.current) return;
    swiperRef.current.swiper.slideNext();
  };

  const handleShowNews = () => {
    setShowNews(!showNews);
  };

  return (
    <HomeSection
      className={`welcome-section ${props.isActive ? "active" : ""}`}
      contentClassName="welcome-section__content overlay"
    >
      <div className="video-bg">
        <video src={ValEP6} autoPlay loop={true} muted={true} />
      </div>
      <div className={!showNews ? "news-container hide" : "news-container"}>
        <div className="news-toggle__btn" onClick={handleShowNews}>
          <img src={valogo} alt="" />
        </div>
        <div className="news__content--main">
          <img src={arcade} alt="" className="news__img" />
          <div className="news__bottom">
            <h1 className="news__title">Featured</h1>
            <span>collection</span>
          </div>
        </div>
        <div className="news__content--sub">
          <Swiper
            ref={swiperRef}
            {...swiperNewsOptions}
            className="news-swiper"
          >
            {newsList.map((news) => (
              <SwiperSlide>
                <div className="news--sub__wrapper">
                  <img src={news.img} alt="" />
                  <h2 className="news--sub__title">{news.title}</h2>
                </div>
              </SwiperSlide>
            ))}
            <div className="prev-btn" onClick={handlePrevSlide}>
              <img src={btnPrev} alt="" />
            </div>
            <div className="next-btn" onClick={handleNextSlide}>
              <img src={btnPrev} alt="" />
            </div>
          </Swiper>
        </div>
      </div>
      <h1 className="welcome-section__logo">vALORaNT</h1>
      <div className="btn-wrapper">
        <div className="play-now__btn">
          <span className="square-2x"></span>
          Play Now
          <span className="square-2x"></span>
          <div className="play-now__btn__mask"></div>
        </div>
      </div>
    </HomeSection>
  );
};

export default Welcome;
