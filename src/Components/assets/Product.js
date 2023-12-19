import React, { useContext, useState } from "react";
import "./Product.css";
import Data from "../../Data";
import { MdOutlineFileDownload } from "react-icons/md";
import { useDispatch } from "react-redux";
import { add } from "../../features/fav/favSlice";
import { downl } from "../../features/down/downSlice";

const Product = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <h1 className="title">All Products</h1>
      <hr />
      <div className="ProductContainer">
        {Data.map((data) => {
          const { id, img, product } = data;
          return (
            <div key={id} className="product">
              <h3 className="productName">{product}</h3>
              <div>
                <img
                  src={img}
                  alt={product}
                  className="productImage relative"
                ></img>
                <div className="flex items-center justify-evenly text-white mb-3">
                  <button onClick={() => dispatch(add({ product }))}>
                    Favourite
                  </button>

                  <button onClick={() => dispatch(downl({ product }))}>
                    <a href={img} download>
                      <MdOutlineFileDownload />
                    </a>
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Product;
