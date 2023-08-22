import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import Menu from "./Sidebar/Menu/Menu";
import MenuItem from "./Sidebar/Menu/MenuItem";
import { useNavigate } from "react-router-dom";
import valorantAPI from "../../api/valorantAPI";
import "./inventory.scss";
import WeaponDetails from "../Weapons-details/WeaponDetails";

const Inventory = () => {
  const [weapons, setWeapons] = useState([]);
  const [weaponDetails, setWeaponDetails] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const getWeapon = async () => {
      try {
        const response = await valorantAPI.getWeaponsList();
        const weaponsData = await response.data;
        // const filterWeapon = weaponsData.data.filter(
        //   (weapon) => weapon.category === `${category}`
        // );
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

  const handleClickItem = (item) => {
    getWeaponDetails(item);
  };

  const getWeaponDetails = async (item) => {
    try {
      const uuid = item.uuid;
      const response = await valorantAPI.getWeaponDetails(uuid);
      const weaponsDetailsData = await response.data;
      setWeaponDetails(weaponsDetailsData.data);
    } catch (error) {
      console.error("Can't Fetch Weapon", error);
    }
  };

  return (
    <div className="collect-container">
      <div className="background-blur"></div>
      <div className="collect__wrapper">
        <div className="sidebar">
          <Menu title="Weapons">
            {weapons.map((item, index) => (
              <MenuItem
                key={index}
                name={item.displayName}
                icon={item.killStreamIcon}
                onMenuItemClick={() => handleClickItem(item)}
              />
            ))}
          </Menu>
          <Menu title="Player Cards"></Menu>
          <Menu title="Buddles"></Menu>
        </div>
        <div className="collect__content">
          {weaponDetails.skins?.map((item, index) => (
            <h1 key={index}>{item.displayName}</h1>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Inventory;
