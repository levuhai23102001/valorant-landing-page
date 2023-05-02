import React, { Children } from "react";
import Navbar from "../components/Navbar/";

import "./mainLayout.scss";

const MainLayout = ({ children }) => {
  return (
    <div className="wrapper">
      <Navbar />
      <div className="main-container">{children}</div>
    </div>
  );
};

export default MainLayout;
