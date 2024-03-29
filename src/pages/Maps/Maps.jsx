import React, { useEffect, useRef, useState } from "react";
import MapSection from "./map-section/MapSection";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import "swiper/swiper-bundle.css";
import valorantAPI from "../../api/valorantAPI";

import "./maps.scss";
import HomeFooter from "../Home/home-footer/HomeFooter";

SwiperCore.use([]);

const Maps = () => {
  const [items, setItems] = useState([]);
  const [mapsIndex, setMapsIndex] = useState(0);
  const mapSwiperRef = useRef(null);

  useEffect(() => {
    const getItems = async () => {
      try {
        const res = await valorantAPI.getMaps();
        const mapData = await res.data;
        console.log(mapData.data);
        setItems(mapData.data);
      } catch (err) {
        console.error(err);
      }
    };
    getItems();
  }, []);

  const swiperOptions = {
    slidesPerView: 2.7,
    speed: 500,
    loop: true,
    onSlideChange: (swiper) => {
      setMapsIndex(swiper.realIndex);
    },
  };

  const handleMapImageClick = (index) => {
    if (mapSwiperRef.current) {
      let newIndex = index;
      const maxIndex = items.length - 1;

      if (newIndex < 0) {
        newIndex = maxIndex;
      } else if (newIndex > maxIndex) {
        newIndex = 0;
      }

      mapSwiperRef.current.swiper?.slideToLoop(newIndex);
    }
  };

  return (
    <>
      <div className="maps-container">
        <MapSection
          bgImage={items[mapsIndex]?.splash}
          name={items[mapsIndex]?.displayName}
          coordinates={items[mapsIndex]?.coordinates}
        />
        <div className="maps-index">
          {mapsIndex < 9 ? (
            <span className="current-index">{`0${mapsIndex + 1}`}</span>
          ) : (
            <span className="current-index">{mapsIndex + 1}</span>
          )}
          <span className="divider">/</span>
          <span className="total-num">{items.length}</span>
        </div>
        {items.length > 0 && (
          <Swiper {...swiperOptions} id="mapSwiper" ref={mapSwiperRef}>
            {items.map((item, index) => (
              <SwiperSlide key={index}>
                <div
                  className="map-img"
                  onClick={() => handleMapImageClick(index)}
                >
                  <img src={item.splash} alt="" className="map-img__splash" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>
      <HomeFooter />
    </>
  );
};

export default Maps;
