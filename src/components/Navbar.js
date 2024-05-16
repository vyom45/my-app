import React from "react";
import "./css/nav.css";

const Nav = () => {
  return (
    <div className="fixed z-100 top-0 bg-white w-full">
      <nav className="flex items-center p-0 h-[72px] border-b border-gray-600">
        <h1 className="meesho-h1 ml-[96px]">meesho</h1>
        {/* <img href="https://www.meesho.com/assets/svgicons/meeshoLogo.svg" /> */}

        <div className="flex justify-center items-center ml-[36px]">
          <input
            className="h-[42px] w-[398px] rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
            type="Search"
            placeholder="Try saree"
          ></input>
        </div>

        <div className="flex justify-between items-center ml-[70px] ">
          <div className="flex justify-center h-[100%] w-[100%] items-center flex-grow-6 flex-shrink-1 flex-0">
            <span className="material-symbols-outlined">phone_iphone</span>
            <a href="/" className="pr-[25px] pl-[10px]">
              Download App
            </a>
            <div className="h-[40px] border-r-2 pr border-gray-400"></div>
            <a href="/" className="pr-[25px] pl-[24px]">
              Become a Supplier
            </a>
            <div className="h-[40px] border-r-2  border-gray-400"></div>
            <a href="/" className="pr-[25px] pl-[24px]">
              Newsroom
            </a>
            <div className="h-[40px] border-r-2  border-gray-400"></div>
          </div>
          <div className="flex items-center justify-center ml-[25px] ">
            <div className="flex flex-col items-center mr-[20px]">
              <span className="material-symbols-outlined mb-auto">person</span>
              <a href="/" className="mt-auto">
                Profile
              </a>
            </div>
            <div className="flex flex-col items-center mr-[10px]">
              <span className="material-symbols-outlined">shopping_cart</span>
              <a href="/">Cart</a>
            </div>
          </div>
        </div>
      </nav>
      <nav className="flex w-full h-[51px] border-b border-gray-600">
        <div className="flex justify-around items-center w-full">
          <a href="/">Women Ethnic</a>
          <a href="/">Women Western</a>
          <a href="/">Men</a>
          <a href="/">Kids</a>
          <a href="/">Home&Kitchen</a>
          <a href="/">Beauty&Health</a>
          <a href="/">Jewellery&Accessories</a>
          <a href="/">Bags&Footwear</a>
          <a href="/">Electronics</a>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
