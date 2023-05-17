import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import valogo from "../../../../public/logo/valogo.png";
import plus from "../../../assets/18plus.png";
import { RiotLogo } from "../../../components/Icons";
import arrow from "../../../assets/arrow.png";

import "./homeFooter.scss";

const HomeFooter = (props) => {
  const [showCopyright, setShowCopyright] = useState(false);

  const copyrightRef = useRef(null);

  const handleShowCopyright = () => {
    setShowCopyright(true);
  };
  const handleHideCopyright = () => {
    setShowCopyright(false);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (copyrightRef.current && !copyrightRef.current.contains(e.target)) {
        setShowCopyright(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [copyrightRef]);

  return (
    <>
      <div className="home-footer">
        <div className="left-line"></div>
        <div className="footer__logo">
          <img src={valogo} className="footer__logo__img" />
        </div>
        <div className="footer__right">
          <div className="mid-line"></div>
          <h4 className="current-page">{props.current}</h4>
          <img src={arrow} alt="" className="arrow" />
          <h4 className="total-page">{props.total}</h4>
          <div className="right-line"></div>
        </div>
      </div>
      <div
        ref={copyrightRef}
        className={
          !showCopyright ? "copyright-container" : "copyright-container show"
        }
      >
        {showCopyright ? (
          <div className="copyright-close__btn" onClick={handleHideCopyright}>
            <span>Close</span>
          </div>
        ) : (
          <div className="copyright-wrapper">
            <div className="copyright" onClick={handleShowCopyright}>
              Copyrights
            </div>
            <div className="divider"></div>
            <div className="actor">M 1 L K Y</div>
          </div>
        )}

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
