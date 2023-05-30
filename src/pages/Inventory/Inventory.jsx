import React from "react";
import { InventList } from "../../components/List";
import { categories } from "../../api/valorantAPI";
import { PlayerCard } from "../../components/Card";

import "./inventory.scss";

const Inventory = () => {
  return (
    <div className="inventory-container">
      <div className="background-blur"></div>
      <div className="inventory__wrapper--main">
        <div className="inventory__column">
          <h1 className="inventory__header__title">Side Arms</h1>
          <InventList category={categories.sideArm} />
        </div>
        <div className="inventory__column">
          <h1 className="inventory__header__title">SMGS</h1>
          <InventList category={categories.smg} />

          <h1 className="inventory__header__title">Shotguns</h1>
          <InventList category={categories.shotgun} />
        </div>
        <div className="inventory__column">
          <h1 className="inventory__header__title">Rifles</h1>
          <InventList category={categories.rifle} />
          <h1 className="inventory__header__title">Melee</h1>
          <InventList category={categories.melee} />
        </div>
        <div className="inventory__column">
          <h1 className="inventory__header__title">Rifle Snipers</h1>
          <InventList category={categories.sniper} />
          <h1 className="inventory__header__title">Machine Guns</h1>
          <InventList category={categories.heavy} />
        </div>
        <div className="inventory__column">
          <h1 className="inventory__header__title">Player Cards</h1>
          <PlayerCard onClickCard={() => console.log("clicked")} />
        </div>
        <h1 className="inventory__title--main">Collection</h1>
      </div>
    </div>
  );
};

export default Inventory;
