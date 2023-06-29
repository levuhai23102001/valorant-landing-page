import React, { useEffect, useRef, useState } from "react";
import valorantAPI from "../../api/valorantAPI";
import { ArrowLeftIcon, ArrowRightIcon } from "../../components/Icons/Icons";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper";
import "swiper/swiper-bundle.css";

import "./playerCardDetails.scss";

SwiperCore.use([Navigation, Pagination]);

const PlayerCardDetails = () => {
  const [cardDetails, setCardDetails] = useState([]);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  const swiperCardRef = useRef(null);

  useEffect(() => {
    const getWeaponDetails = async () => {
      try {
        const response = await valorantAPI.getPlayerCards();
        const cardDetailsData = response.data;
        setCardDetails(cardDetailsData.data);
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
      prevEl: ".prev-card-btn",
      nextEl: ".next-card-btn",
    },
    onSlideChange: (swiper) => {
      setCurrentCardIndex(swiper.activeIndex);
    },
  };

  const handleClickDetailsCard = (index) => {
    swiperCardRef.current.swiper?.slideTo(index);
  };

  return (
    <div className="card-details-container">
      <div className="background-blur"></div>
      <div className="card-details__wrapper">
        {cardDetails.length > 0 && (
          <div className="card-details__wrapper--main">
            <h1 className="card-details__name">
              {cardDetails[currentCardIndex].displayName}
            </h1>
            <img
              src={cardDetails[currentCardIndex].largeArt}
              alt=""
              className="card-details__fullImg"
            />
          </div>
        )}
        <div className="card-details__wrapper--bottom">
          <Swiper ref={swiperCardRef} {...swiperOptions} id="cardSwiper">
            {cardDetails.map((item, index) => (
              <SwiperSlide key={item.uuid}>
                <div
                  className="card-details__item"
                  onClick={() => handleClickDetailsCard(index)}
                >
                  <img
                    src={item.displayIcon}
                    alt=""
                    className="card-details__item--icon"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="prev-card-btn">
            <ArrowLeftIcon />
          </div>
          <div className="next-card-btn">
            <ArrowRightIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayerCardDetails;
