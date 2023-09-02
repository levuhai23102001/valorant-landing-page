import React from "react";
import "./inventoryCard.scss";

const InventoryCard = (props) => {
  return (
    <div className="inventory-card" onClick={props.onClickItem}>
      <span className="inventory-card__bg-hover"></span>
      <div className="inventory-card__content">
        <div className="inventory-card__name">{props.itemName}.</div>
        <div className="inventory-card__img">
          <img
            src={props.itemImg}
            alt=""
            className="inventory-card__img--main"
          />
        </div>
        <div className="inventory-card__desc">
          <p className="inventory-card__desc--text">
            Lightweight and versatile, the default weapon for all is an instant
            classic.
          </p>
        </div>
      </div>
    </div>
  );
};

export default InventoryCard;
