import React, { useEffect, useState } from "react";
import Menu from "./Sidebar/Menu/Menu";
import MenuItem from "./Sidebar/Menu/MenuItem";
import WeaponDetailsContent from "./WeaponDetailsContent";
import valorantAPI from "../../api/valorantAPI";
import { Routes, Route } from "react-router-dom";

import "./weaponDetails.scss";
import PlayerCardDetails from "../PlayerCard-details/PlayerCardDetails";

const WeaponDetails = () => {
  const [weapons, setWeapons] = useState([]);

  useEffect(() => {
    const getWeapon = async () => {
      try {
        const response = await valorantAPI.getWeaponsList();
        const weaponsData = await response.data;
        const sortedWeapons = weaponsData.data.sort(
          (a, b) => a.shopData?.cost - b.shopData?.cost
        );
        setWeapons(sortedWeapons);
      } catch (error) {
        console.error("Can't Fetch Weapons", error);
      }
    };
    getWeapon();
  }, []);

  return (
    <div className="weapons-container">
      <div className="background-blur"></div>
      <div className="weapons__wrapper">
        <div className="sidebar">
          <Menu title="Weapons">
            {weapons.map((item, index) => (
              <MenuItem
                key={index}
                name={item.displayName}
                icon={item.killStreamIcon}
                to={`/collection/` + item.uuid}
              />
            ))}
          </Menu>
          <Menu title="Player Cards" to="/collection/player-cards"></Menu>
          <Menu title="Buddles" to="/collection/buddles"></Menu>
        </div>

        {/* <PlayerCardDetails /> */}

        <WeaponDetailsContent />
      </div>
    </div>
  );
};

export default WeaponDetails;
