import React from "react";
import { NavLink } from "react-router-dom";

import { mainMenuList, subMenuList } from "../../../constants";

import "./navbar.scss";
import { ValorantLogo } from "../../../components/Icons";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-fixed">
        <div className="navbar-wrapper">
          <ul className="navbar-menu">
            {mainMenuList.map((item) => (
              <li className="navbar-menu__item">
                <NavLink to={item.path} className="navbar-menu__item--link">
                  {item.title}
                </NavLink>
              </li>
            ))}
          </ul>
          <div className="navbar-brand">
            <div className="overlay"></div>
            <ValorantLogo />
            {/* <span className="navbar-brand__name">VALORANT</span> */}
          </div>
          <ul className="navbar-menu">
            {subMenuList.map((item) => (
              <li className="navbar-menu__item">
                <NavLink to={item.path} className="navbar-menu__item--link">
                  {item.title}
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
