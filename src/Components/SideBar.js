import React from "react";
import "./SideBar.css";
import { RiSettings5Fill } from "react-icons/ri";
import { MdLogout } from "react-icons/md";
import { useSelector } from "react-redux";

const SideBar = () => {
  const { favData } = useSelector((store) => store.fav);
  const { downData } = useSelector((store) => store.down);
  return (
    <div>
      <div className="sideContainer">
        <h1 className="logo">Logo</h1>
        <div className="Divider">
          <div className="S-ExtraContainer">
            <div className="Section">
              <h1>Favourites</h1>
              <div className="FavContainer">
                <ul>
                  {favData.map((item) => {
                    return (
                      <div key={item} className="p-1">
                        <li>{item.product}</li>
                        <hr />
                      </div>
                    );
                  })}
                </ul>
              </div>
            </div>
            <div className="Section">
              <h1>All Downloaded Items</h1>
              <div className="FavContainer">
                <ul>
                  {downData.map((item) => {
                    return (
                      <div key={item} className="p-1">
                        <li>{item.product}</li>
                        <hr />
                      </div>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="Setting">
          <div className="Menu">
            <RiSettings5Fill />
            <h1 className="ml-1">Setting</h1>
          </div>
          <div className="Menu">
            <MdLogout />
            <h1 className="ml-1">Logout</h1>
          </div>
        </div>
      </div>
      <div className="ExtraContainer">
        <div className="Section">
          <h1>Favourites</h1>
          <div className="FavContainer">
            <ul>
              {favData.map((item) => {
                return (
                  <div key={item} className="p-1">
                    <li>{item.product}</li>
                    <hr />
                  </div>
                );
              })}
            </ul>
          </div>
        </div>
        <div className="Section">
          <h1>All Downloaded Items</h1>
          <div className="FavContainer">
            <ul>
              {downData.map((item) => {
                return (
                  <div key={item} className="p-1">
                    <li>{item.product}</li>
                    <hr />
                  </div>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
