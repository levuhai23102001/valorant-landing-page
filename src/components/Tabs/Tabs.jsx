import React from "react";

import "./tabs.scss";

const Tabs = ({ children }) => {
  return (
    <>
      <div className="tabs">{children}</div>
    </>
  );
};

export const TabsItem = ({ cName, clickTabsItem, icon }) => {
  return (
    <div className={cName} onClick={clickTabsItem}>
      <img src={icon} />
    </div>
  );
};

export default Tabs;
