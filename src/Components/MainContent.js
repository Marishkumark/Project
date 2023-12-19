import React, { useState } from "react";
import "./MainContent.css";
import Search from "./assets/Search";
import Recent from "./assets/Recent";
import Product from "./assets/Product";

const MainContent = () => {
  return (
    <div className="Content-Container">
      <div>
        <Search />
        <Recent />
        <Product />
      </div>
    </div>
  );
};

export default MainContent;
