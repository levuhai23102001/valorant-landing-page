import React from "react";
import { videoBg } from "../../assets";
import { Welcome, Agent } from "./home-section";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { EffectFade, Mousewheel, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "./home.scss";

SwiperCore.use([EffectFade, Mousewheel, Navigation]);

const Home = () => {
  const swiperOptions = {
    spaceBetween: 0,
    effect: "fade",
    effectfade: {
      crossFade: true,
    },
    noSwiping: true,
    noSwipingClass: {
      el: "no-swiper",
    },
    mousewheel: true,
    speed: 1000,
    onSwiper: (swiper) => console.log(swiper),
    onSlideChange: (index) => console.log(index.activeIndex),
  };

  return (
    <>
      <div className="home-container">
        <Swiper {...swiperOptions} className="mySwiper">
          <SwiperSlide>
            {({ isActive }) => <Welcome isActive={isActive} />}
          </SwiperSlide>
          <SwiperSlide>
            {({ isActive }) => <Agent isActive={isActive} />}
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default Home;
