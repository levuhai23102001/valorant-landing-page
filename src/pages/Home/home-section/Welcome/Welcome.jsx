import React, { useRef, useState } from "react";
import { topNews, videoBg } from "../../../../assets";
import valogo from "../../../../../public/logo/valogo.png";
import HomeSection from "../HomeSection";
import HomeNavbar from "../../../../layouts/components/OnlyHomeNavbar/HomeNavbar";
import { newsList } from "../../../../constants";
import { btnPrev } from "../../../../assets";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/swiper-bundle.css";
import "./welcome.scss";
import { Link } from "react-router-dom";

SwiperCore.use([Navigation, Pagination, Autoplay]);

const Welcome = (props) => {
  const [showNews, setShowNews] = useState(true);
  const swiperRef = useRef(null);

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

  const handlePrevSlide = () => {
    if (!swiperRef.current) return;
    swiperRef.current.slidePrev();
  };

  const handleNextSlide = () => {
    if (!swiperRef.current) return;
    swiperRef.current.slideNext();
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
        <video src={videoBg} autoPlay loop={true} muted={true} />
      </div>
      <HomeNavbar />
      <div className="valorant-topLeft">
        <div className="valogo-mini">
          <img src={valogo} alt="" className="valogo-mini__img" />
        </div>
        <div className="valorant__title">
          <h2 className="valorant__title--main">Evolution</h2>
          <h4 className="valorant__title--sub">
            Episode 7 &nbsp; // &nbsp; Act II
          </h4>
        </div>
      </div>
      <div className={!showNews ? "news-container hide" : "news-container"}>
        <div className="news-toggle__btn" onClick={handleShowNews}>
          <img src={valogo} alt="" />
        </div>
        <div className="news__content--main">
          <img src={topNews} alt="" className="news__img" />
          <div className="news__bottom">
            <h1 className="news__title">Featured</h1>
            <span>collection</span>
          </div>
        </div>
        <div className="news__content--sub">
          <Swiper ref={swiperRef} {...swiperNewsOptions} id="news-swiper">
            {newsList.map((news, index) => (
              <SwiperSlide key={index}>
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
          <Link to="https://valorant.zing.vn/vi-vn/download/">Play Now</Link>
          <span className="square-2x"></span>
          <div className="play-now__btn__mask"></div>
        </div>
      </div>
    </HomeSection>
  );
};

export default Welcome;
