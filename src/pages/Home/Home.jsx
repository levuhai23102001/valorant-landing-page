import React, { useRef, useState } from "react";
import SocialList from "./social-list/";
import HomeFooter from "./home-footer";
import { Welcome, Agent } from "./home-section";
import { btnPrev } from "../../assets";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { EffectFade, Mousewheel, Navigation } from "swiper";
import "swiper/swiper-bundle.css";
import "./home.scss";

SwiperCore.use([EffectFade, Mousewheel, Navigation]);

const Home = () => {
  const [activeSlide, setActiveSlide] = useState(1);

  const swiperRef = useRef(null);

  const swiperOptions = {
    spaceBetween: 0,
    effect: "fade",
    noSwiping: true,
    noSwipingClass: {
      el: "no-swiper",
    },
    navigation: {
      prevEl: ".prev-slide-btn",
      nextEl: ".next-slide-btn",
    },
    mousewheel: true,
    speed: 1000,
    onSwiper: (swiper) => console.log(swiper),
  };

  const handlePrev = () => {
    if (!swiperRef.current) return;
    swiperRef.current.swiper.slidePrev();
  };

  const handleNext = () => {
    if (!swiperRef.current) return;
    swiperRef.current.swiper.slideNext();
  };

  return (
    <>
      <div className="home-container">
        <SocialList />
        <div className="prev-slide-btn">
          <img src={btnPrev} alt="" onClick={handlePrev} />
        </div>
        <Swiper {...swiperOptions} id="mainSwiper" ref={swiperRef}>
          <SwiperSlide>
            {({ isActive }) => <Welcome isActive={isActive} />}
          </SwiperSlide>
          <SwiperSlide>
            {({ isActive }) => <Agent isActive={isActive} />}
          </SwiperSlide>
        </Swiper>
        <div className="next-slide-btn">
          <img src={btnPrev} alt="" onClick={handleNext} />
        </div>
        <HomeFooter current="01" total="05" />
      </div>
    </>
  );
};

export default Home;
