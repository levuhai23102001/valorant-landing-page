import React from "react";
import { Link } from "react-router-dom";
import { socialList } from "../../../constants";

import "./socialList.scss";

const SocialList = () => {
  return (
    <>
      <ul className="social-list">
        {socialList.map((item, index) => (
          <li key={index} className="social-list__item">
            <Link to={item.path}>{<item.icon />}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default SocialList;
