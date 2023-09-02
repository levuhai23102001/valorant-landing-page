import React, { useEffect, useRef, useState } from "react";
import valorantAPI from "../../api/valorantAPI";

import "./playerCardDetails.scss";

const PlayerCardDetails = () => {
  const [cardDetails, setCardDetails] = useState([]);

  useEffect(() => {
    const getWeaponDetails = async () => {
      try {
        const response = await valorantAPI.getPlayerCards();
        const cardDetailsData = response.data;
        setCardDetails(cardDetailsData.data);
      } catch (error) {
        console.error("Can't fetch weapon details", error);
      }
    };
    getWeaponDetails();
  }, []);

  return <>player card</>;
};

export default PlayerCardDetails;
