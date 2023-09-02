import React from "react";
import Navbar from "../components/Navbar/";
import { useLocation } from "react-router-dom";

import "./mainLayout.scss";

const MainLayout = ({ children }) => {
  function Navigation() {
    const location = useLocation();

    if (location.pathname === "/") {
      return null; // Don't render navigation for the home page
    }
    return <Navbar isShow={location.pathname === "/" ? null : "show"} />;
  }

  return (
    <div className="wrapper">
      <Navigation />
      <div className="main-container">{children}</div>
    </div>
  );
};

export default MainLayout;
