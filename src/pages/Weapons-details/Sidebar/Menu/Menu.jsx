import React from "react";
import { Link } from "react-router-dom";

import "./menu.scss";

const Menu = ({ title, children, to }) => {
  return (
    <div className="sidebar-wrapper">
      <Link to={to} className="sidebar-title">
        {title}
      </Link>
      <ul className="sidebar-menu">{children}</ul>
    </div>
  );
};

export default Menu;
