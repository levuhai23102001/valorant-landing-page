import React from "react";
import "./weaponCard.scss";

const WeaponCard = ({ img, name }) => {
  return (
    <div className="weapon-card">
      <div className="weapon-card__top">
        <img className="weapon-card__img" src={img} alt="" />
      </div>
      <p className="weapon-card__title">{name}</p>
    </div>
  );
};

export default WeaponCard;
