import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import valorantAPI from "../../api/valorantAPI";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper";
import "swiper/swiper-bundle.css";

import "./weaponDetails.scss";
import { btnPrev } from "../../assets";
import { ArrowLeftIcon, ArrowRightIcon } from "../../components/Icons/Icons";

SwiperCore.use([Navigation, Pagination]);

const WeaponDetails = (props) => {
  const { id } = useParams();
  const [weaponDetails, setWeaponDetails] = useState([]);

  useEffect(() => {
    const getWeaponDetails = async () => {
      try {
        const response = await valorantAPI.getWeaponDetails(id);
        const weaponDetailsData = response.data;
        setWeaponDetails(weaponDetailsData.data);
      } catch (error) {
        console.error("Can't fetch weapon details", error);
      }
    };
    getWeaponDetails();
  }, []);

  const swiperOptions = {
    slidesPerView: 13,
    centeredSlides: true,
    speed: 300,
    loop: true,
    pagination: {
      type: "fraction",
    },
    navigation: {
      prevEl: ".prev-weapon-btn",
      nextEl: ".next-weapon-btn",
    },
  };

  return (
    <div className="weapon-details-container">
      <div className="background-blur"></div>
      <div className="weapon-details__wrapper">
        <div className="weapon-details__wrapper--bottom">
          <Swiper {...swiperOptions} id="weaponSwiper">
            {weaponDetails.skins?.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="weapon-details__item">
                  <img
                    src={item.displayIcon}
                    alt=""
                    className="weapon-details__item--icon"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="prev-weapon-btn">
            <ArrowLeftIcon />
          </div>
          <div className="next-weapon-btn">
            <ArrowRightIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeaponDetails;
