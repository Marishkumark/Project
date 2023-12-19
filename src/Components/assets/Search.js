import React, { useState } from "react";
import { IoSearch } from "react-icons/io5";
import { FaCaretDown } from "react-icons/fa";
import "./Search.css";
import { MdAccountCircle } from "react-icons/md";
import { FaBell } from "react-icons/fa6";
import { BiSolidComment } from "react-icons/bi";

const Search = () => {
  const [IsProduct, setIsProduct] = useState(false);
  const [IsApplication, setIsApplication] = useState(false);
  const [IsSpecification, setIsSpecification] = useState(false);

  const product = () => {
    setIsProduct(!IsProduct);
    setIsApplication(false);
    setIsSpecification(false);
  };

  const application = () => {
    setIsProduct(false);
    setIsApplication(!IsApplication);
    setIsSpecification(false);
  };

  const specification = () => {
    setIsProduct(false);
    setIsApplication(false);
    setIsSpecification(!IsSpecification);
  };

  return (
    <div className="btn-container">
      <div className="btn-items">
        <button onClick={() => product()} className="btn">
          <div className="btn-search">
            <IoSearch />
            Products
            <FaCaretDown />
          </div>
        </button>
        {IsProduct && (
          <ul className="absolute bg-white rounded-md shadow-md w-[25%] mt-1 z-50">
            <li className="px-2 py-2 hover:bg-gray-100">Option 1</li>
            <li className="px-2 py-2 hover:bg-gray-100">Option 2</li>
            <li className="px-2 py-2 hover:bg-gray-100">Option 3</li>
          </ul>
        )}
      </div>
      <div className="btn-items">
        <button onClick={() => application()} className="btn">
          <div className="btn-search">
            <IoSearch />
            Application
            <FaCaretDown />
          </div>
        </button>
        {IsApplication && (
          <ul className="absolute bg-white rounded-md shadow-md w-[25%] mt-1 z-50">
            <li className="px-2 py-2 hover:bg-gray-100">Option 1</li>
            <li className="px-2 py-2 hover:bg-gray-100">Option 2</li>
            <li className="px-2 py-2 hover:bg-gray-100">Option 3</li>
          </ul>
        )}
      </div>
      <div className="btn-items">
        <button onClick={() => specification()} className="btn">
          <div className="btn-search">
            <IoSearch />
            Specification
            <FaCaretDown />
          </div>
        </button>
        {IsSpecification && (
          <ul className="absolute bg-white rounded-md shadow-md w-[25%] mt-1 z-50">
            <li className="px-2 py-2 hover:bg-gray-100">Option 1</li>
            <li className="px-2 py-2 hover:bg-gray-100">Option 2</li>
            <li className="px-2 py-2 hover:bg-gray-100">Option 3</li>
          </ul>
        )}
      </div>
      <div>
        <div className="icons">
          <MdAccountCircle />
          <div className="icon">
            <FaBell />
            <BiSolidComment />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
