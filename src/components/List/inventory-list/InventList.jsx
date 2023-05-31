import React, { useEffect, useState } from "react";
import valorantAPI from "../../../api/valorantAPI";
import { InventoryCard } from "../../Card";
import { useNavigate } from "react-router-dom";

import "./inventList.scss";

const InventList = (props) => {
  const [weapons, setWeapons] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const getWeapon = async () => {
      try {
        const response = await valorantAPI.getWeaponsList();
        const weaponsData = response.data;
        const filterWeapon = weaponsData.data.filter(
          (weapon) => weapon.category === `${props.category}`
        );
        const sortedWeapons = filterWeapon.sort(
          (a, b) => a.shopData?.cost - b.shopData?.cost
        );
        setWeapons(sortedWeapons);
      } catch (error) {
        console.error("Can't Fetch Weapons", error);
      }
    };
    getWeapon();
  }, []);

  const handleClickItem = (weapon) => {
    navigate("weapons/" + weapon.uuid);
  };

  return (
    <div className="inventory-list">
      {weapons.map((weapon, index) => (
        <InventoryCard
          onClickItem={() => handleClickItem(weapon)}
          key={index}
          itemImg={weapon.displayIcon}
          itemName={weapon.displayName}
        />
      ))}
    </div>
  );
};

export default InventList;
