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
  const swiperOptions = {};

  return (
    <>
      <div className="home-container">
        <Swiper>
          <SwiperSlide>
            {(isActive) => <Welcome isActive={isActive} />}
          </SwiperSlide>
          <SwiperSlide>
            {(isActive) => <Agent isActive={isActive} />}
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default Home;
