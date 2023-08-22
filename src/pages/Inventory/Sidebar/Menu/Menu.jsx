import React, { useEffect, useState } from "react";

import "./menu.scss";

const Menu = ({ title, children, handleTitleClick }) => {
  //  const [weapons, setWeapons] = useState([]);
  // const navigate = useNavigate();

  // useEffect(() => {
  //   const getWeapon = async () => {
  //     try {
  //       const response = await valorantAPI.getWeaponsList();
  //       const weaponsData = await response.data;
  //       const filterWeapon = weaponsData.data.filter(
  //         (weapon) => weapon.category === `${category}`
  //       );
  //       const sortedWeapons = filterWeapon.sort(
  //         (a, b) => a.shopData?.cost - b.shopData?.cost
  //       );
  //       setWeapons(sortedWeapons);
  //     } catch (error) {
  //       console.error("Can't Fetch Weapons", error);
  //     }
  //   };
  //   getWeapon();
  // }, []);

  return (
    <div className="sidebar-wrapper" onClick={handleTitleClick}>
      <div className="sidebar-title">{title}</div>
      <ul className="sidebar-menu">{children}</ul>
    </div>
  );
};

export default Menu;
