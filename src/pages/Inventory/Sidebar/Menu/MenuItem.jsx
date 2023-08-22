import React from "react";

const MenuItem = ({ onMenuItemClick, name, icon }) => {
  return (
    <>
      <li className="sidebar-menu__item" onClick={onMenuItemClick}>
        <span className="sidebar-menu__item__link">{name}</span>
        <div className="sidebar-menu__item__icon">
          <img src={icon} alt="" />
        </div>
      </li>
    </>
  );
};

export default MenuItem;
