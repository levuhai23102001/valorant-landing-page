import React, { useRef, useState } from "react";
import SocialList from "./social-list/";
import HomeFooter from "./home-footer";
import { Welcome, Agent, Credits, Trailer } from "./home-section";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { EffectFade, Mousewheel, Navigation } from "swiper";
import "swiper/swiper-bundle.css";
import "./home.scss";

SwiperCore.use([EffectFade, Mousewheel, Navigation]);

const Home = () => {
  const [activeSection, setActiveSection] = useState(1);
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
    onSlideChange: (swiper) => {
      const sectionNumber = document.querySelector(".current-page");
      if (swiper.activeIndex === activeSection) {
        setActiveSection(activeSection + 1);
        sectionNumber.animate(
          [
            { transform: "translate(0, 8px)", opacity: 0 },
            { transform: "translate(0, 0)", opacity: 1 },
          ],
          {
            duration: 500,
          }
        );
      } else {
        setActiveSection(activeSection - 1);
        sectionNumber.animate(
          [
            { transform: "translate(0, -8px)", opacity: 0 },
            { transform: "translate(0, 0)", opacity: 1 },
          ],
          {
            duration: 500,
          }
        );
      }
    },
  };

  return (
    <>
      <div className="home-container">
        <SocialList />
        <Swiper {...swiperOptions} id="mainSwiper" ref={swiperRef}>
          <SwiperSlide>
            {({ isActive }) => <Welcome isActive={isActive} />}
          </SwiperSlide>
          <SwiperSlide>
            {({ isActive }) => <Agent isActive={isActive} />}
          </SwiperSlide>
          <SwiperSlide>
            {({ isActive }) => <Credits isActive={isActive} />}
          </SwiperSlide>
          <SwiperSlide>
            {({ isActive }) => <Trailer isActive={isActive} />}
          </SwiperSlide>
        </Swiper>
        <HomeFooter current={`0${activeSection}`} total="04" />
      </div>
    </>
  );
};

export default Home;
