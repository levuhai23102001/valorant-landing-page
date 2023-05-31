import React from "react";
import "./inventoryCard.scss";

const InventoryCard = (props) => {
  return (
    <div className="inventory-card" onClick={props.onClickItem}>
      <div className="inventory-card__content">
        <img src={props.itemImg} alt="" className="inventory-card__img" />
      </div>
      <div className="inventory-card__name">{props.itemName}</div>
    </div>
  );
};

export default InventoryCard;
