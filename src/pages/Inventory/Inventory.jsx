import React from "react";
import { InventList } from "../../components/List";

import "./inventory.scss";

const Inventory = () => {
  return (
    <>
      <div className="collect-container">
        <div className="background-blur"></div>
        <div className="collect__wrapper">
          <div className="collect__title">
            <h1 className="collect__title--txt">Choose your weapon</h1>
          </div>
          <InventList />
        </div>
      </div>
    </>
  );
};

export default Inventory;
