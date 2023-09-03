import React, { useEffect, useState } from "react";
import MapSection from "./map-section/MapSection";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import "swiper/swiper-bundle.css";
import valorantAPI from "../../api/valorantAPI";

import "./maps.scss";

SwiperCore.use([]);

const Maps = () => {
  const [items, setItems] = useState([]);
  const [mapsIndex, setMapsIndex] = useState(0);

  useEffect(() => {
    const getItems = async () => {
      try {
        const res = await valorantAPI.getMaps();
        const mapData = res.data;
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
    // loop: true,
    onSlideChange: (swiper) => {
      setMapsIndex(swiper.activeIndex);
    },
  };

  return (
    <div className="maps-container">
      <MapSection
        bgImage={items[mapsIndex]?.splash}
        name={items[mapsIndex]?.displayName}
        coordinates={items[mapsIndex]?.coordinates}
      />

      <Swiper {...swiperOptions} id="mapSwiper">
        {items.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="map-img">
              <img src={item.splash} alt="" className="map-img__splash" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Maps;
