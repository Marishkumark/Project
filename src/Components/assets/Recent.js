import React from "react";
import Data from "../../Data.js";
import "./Recent.css";
import Carousel from "react-elastic-carousel";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 500, itemsToShow: 3 },
  { width: 900, itemsToShow: 4 },
];

const Recent = () => {
  return (
    <div className="recentContainer">
      <h1 className="title">Recently Accessed</h1>
      <hr />
      <div className="productContainer">
        <Carousel
          breakPoints={breakPoints}
          style={{ height: "10%" }}
          enableAutoPlay
          autoPlaySpeed={1500}
        >
          {Data.map((data) => {
            const { id, img, product } = data;
            return (
              <div key={id} className="products">
                <h3>{product}</h3>
                <img src={img} alt={product} className="ProductImage"></img>
              </div>
            );
          })}
        </Carousel>
      </div>
    </div>
  );
};

export default Recent;
