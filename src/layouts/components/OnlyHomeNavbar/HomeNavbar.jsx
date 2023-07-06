import React from "react";
import { NavLink } from "react-router-dom";

import "./homeNavbar.scss";

const HomeNavbar = () => {
  return (
    <>
      <nav className="only-navbar">
        <div className="only-navbar-wrapper">
          <ul className="only-navbar-menu">
            <li className="only-navbar-menu__item">
              <NavLink to="/" className="only-navbar-menu__item--link">
                <span>Home</span>
              </NavLink>
            </li>
            <li className="only-navbar-menu__item">
              <NavLink
                to="/collection"
                className="only-navbar-menu__item--link"
              >
                <span>Collection</span>
              </NavLink>
            </li>
            <li className="only-navbar-menu__item">
              <NavLink to="/agents" className="only-navbar-menu__item--link">
                <span>Agents</span>
              </NavLink>
            </li>
            <li className="only-navbar-menu__item">
              <NavLink to="/maps" className="only-navbar-menu__item--link">
                <span>Maps</span>
              </NavLink>
            </li>
            <li className="only-navbar-menu__item">
              <NavLink to="/news" className="only-navbar-menu__item--link">
                <span>News</span>
              </NavLink>
            </li>
            <li className="only-navbar-menu__item">
              <NavLink to="/media" className="only-navbar-menu__item--link">
                <span>Media</span>
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default HomeNavbar;
