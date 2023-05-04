import React, { useState } from "react";
import { Link } from "react-router-dom";
import valogo from "../../../../public/logo/valogo.png";
import plus from "../../../assets/18plus.png";
import { RiotLogo } from "../../../components/Icons";
import arrow from "../../../assets/arrow.png";

import "./homeFooter.scss";

const HomeFooter = () => {
  const [showCopyright, setShowCopyright] = useState(false);

  const handleShowCopyright = () => {
    setShowCopyright(!showCopyright);
  };

  return (
    <>
      <div className="home-footer">
        <div className="left-line"></div>
        <div className="footer__logo">
          <img src={valogo} className="footer__logo__img" />
        </div>
        <div className="footer__right">
          <div className="mid-line"></div>
          <h4 className="current-page">01</h4>
          <img src={arrow} alt="" className="arrow" />
          <h4 className="total-page">05</h4>
          <div className="right-line"></div>
        </div>
      </div>
      <div
        className={
          !showCopyright ? "copyright-container" : "copyright-container show"
        }
      >
        <div className="copyright-wrapper">
          <div className="copyright" onClick={handleShowCopyright}>
            Copyrights
          </div>
          <div className="divider"></div>
          <div className="actor">M 1 L K Y</div>
        </div>
        <div className="copyright-inner">
          <RiotLogo className="copyright__logo" />
          <div className="copyright__content">
            <p className="owner">
              Copyright owner: <span>Riot Games, Inc. X M1LKY</span>
            </p>
            <p className="copyright__company">
              &copy;2023 - Riot Games, Inc. All rights reserved
            </p>
            <p className="copyright__contact">
              Contact: {""}
              <Link to="http://www.facebook.com/Milky2310">
                levuhai2310@gmail.com
              </Link>
            </p>
          </div>
          <img
            src={plus}
            alt=""
            className="18plus-img"
            width={100}
            height={50}
          />
        </div>
      </div>
    </>
  );
};

export default HomeFooter;
