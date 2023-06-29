import React from "react";
import { NavLink } from "react-router-dom";
import { ValorantLogo } from "../../../components/Icons";
import { mainMenuList, subMenuList } from "../../../constants";

import "./navbar.scss";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-fixed">
        <div className="navbar-wrapper">
          <ul className="navbar-menu">
            {mainMenuList.map((item, index) => (
              <li className="navbar-menu__item">
                <NavLink to={item.path} className="navbar-menu__item--link">
                  <img
                    src={item.img}
                    alt=""
                    className="navbar-menu__item--icon"
                  />
                </NavLink>
              </li>
            ))}
          </ul>
          <div className="navbar-brand">
            <div className="overlay"></div>
            <ValorantLogo />
          </div>
          <ul className="sub-menu">
            {subMenuList.map((item, index) => (
              <li className="sub-menu__item" key={index}>
                <NavLink to={item.path} className="sub-menu__item--link">
                  <img src={item.img} alt="" className="sub-menu__item--icon" />
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
