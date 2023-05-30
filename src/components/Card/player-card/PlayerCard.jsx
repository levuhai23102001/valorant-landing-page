import React, { useEffect, useState } from "react";
import axios from "axios";

import "./playerCard.scss";

const playerCard = (props) => {
  const [card, setCard] = useState([]);

  useEffect(() => {
    const getPlayerCard = async () => {
      try {
        const response = await axios.get(
          "https://valorant-api.com/v1/playercards/83bffdf0-4aa8-bcf4-7e32-a5a508cbd0f0"
        );
        const cardData = response.data;
        setCard(cardData.data);
      } catch (error) {
        console.error("Can't Fetch data", error);
      }
    };
    getPlayerCard();
  }, []);

  return (
    <div className="player-card" onClick={props.onClickCard}>
      <img src={card.largeArt} alt="" className="player-card__img" />
    </div>
  );
};

export default playerCard;
