import React from "react";
import { NavLink } from "react-router-dom";

const MenuItem = ({ to, name, icon }) => {
  return (
    <>
      <NavLink to={to} className="sidebar-menu__item">
        <span className="sidebar-menu__item__link">{name}</span>
        <div className="sidebar-menu__item__icon">
          <img src={icon} alt="" />
        </div>
      </NavLink>
    </>
  );
};

export default MenuItem;
