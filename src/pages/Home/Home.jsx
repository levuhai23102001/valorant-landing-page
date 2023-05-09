import React, { useRef } from "react";
import SocialList from "./social-list/";
import HomeFooter from "./home-footer";
import { Welcome, Agent } from "./home-section";
import { btnPrev } from "../../assets";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { EffectFade, Mousewheel, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "./home.scss";

SwiperCore.use([EffectFade, Mousewheel, Navigation]);

const Home = () => {
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
    onSlideChange: (index) => console.log(index.activeIndex),
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
        <Swiper {...swiperOptions} className="mySwiper" ref={swiperRef}>
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
        <HomeFooter />
      </div>
    </>
  );
};

export default Home;
