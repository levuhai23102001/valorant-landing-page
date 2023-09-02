import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import valorantAPI from "../../api/valorantAPI";
import { WeaponCard } from "../../components/Card";

const WeaponDetailsContent = () => {
  const { id } = useParams();
  const [items, setItems] = useState([]);

  useEffect(() => {
    const getItems = async () => {
      try {
        const res = await valorantAPI.getWeaponDetails(id);
        const itemData = await res.data;
        console.log(itemData.data);
        setItems(itemData.data);
      } catch (err) {
        console.error(err);
      }
    };
    getItems();
  }, [id]);

  return (
    <div className="weapons__content">
      <div className="weapons__title">
        <h1>{items.displayName}</h1>
      </div>
      <div className="weapons-list">
        {items.skins?.map((item, index) => (
          <WeaponCard
            key={index}
            img={item.displayIcon}
            name={item.displayName}
          />
        ))}
      </div>
    </div>
  );
};

export default WeaponDetailsContent;
