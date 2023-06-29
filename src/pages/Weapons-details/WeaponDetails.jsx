import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import valorantAPI from "../../api/valorantAPI";
import { ArrowLeftIcon, ArrowRightIcon } from "../../components/Icons/Icons";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper";
import "swiper/swiper-bundle.css";

import "./weaponDetails.scss";

SwiperCore.use([Navigation, Pagination]);

const WeaponDetails = (props) => {
  const [weaponDetails, setWeaponDetails] = useState([]);
  const [currentWeaponIndex, setCurrentWeaponIndex] = useState(0);
  const { id } = useParams();

  const swiperWeaponRef = useRef(null);

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
    // loop: true,
    pagination: {
      type: "fraction",
    },
    navigation: {
      prevEl: ".prev-weapon-btn",
      nextEl: ".next-weapon-btn",
    },
    onSlideChange: (swiper) => {
      setCurrentWeaponIndex(swiper.activeIndex);
    },
  };

  const handleClickDetailsWeapon = (index) => {
    swiperWeaponRef.current.swiper?.slideTo(index);
  };

  return (
    <div className="weapon-details-container">
      <div className="background-blur"></div>
      <div className="weapon-details__wrapper">
        {weaponDetails.skins?.length > 0 && (
          <div className="weapon-details__wrapper--main">
            <h1 className="weapon-details__name">
              {weaponDetails.skins[currentWeaponIndex]?.displayName}
            </h1>
            <img
              src={weaponDetails.skins[currentWeaponIndex]?.displayIcon}
              alt=""
              className="weapon-details__fullImg"
            />
          </div>
        )}
        <div className="weapon-details__wrapper--bottom">
          <Swiper ref={swiperWeaponRef} {...swiperOptions} id="weaponSwiper">
            {weaponDetails.skins?.map((item, index) => (
              <SwiperSlide key={item.uuid}>
                <div
                  className="weapon-details__item"
                  onClick={() => handleClickDetailsWeapon(index)}
                >
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
