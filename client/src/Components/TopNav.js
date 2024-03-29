import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu, AiOutlineSearch } from "react-icons/ai";
import { BsFillCartFill, BsPerson } from "react-icons/bs";
import { TbTruckReturn } from "react-icons/tb";
import { MdHelp, MdOutlineFavorite } from "react-icons/md";
import { FaGoogleWallet } from "react-icons/fa";
const TopNav = () => {
  const [sideNav, setSideNav] = useState(false);
  console.log(sideNav);
  return (
    <div className="max-w-[1520px] mx-auto flex justify-between items-center p-4">
      <div className="flex items-center">
        <div onClick={() => setSideNav(!sideNav)} className="cursor-pointer">
          <AiOutlineMenu size={25} />
        </div>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl px-2">
          Yum
          <span className="text-orange-700 font-bold">Eats</span>
        </h1>
        <div className="hidden lg:flex items-center bg-gray-200 rounded-full p-1 text-[14px]">
          <p className="bg-orange-700 text-white rounded-full p-2 text-bold">
            Free
          </p>
          <p className="p-2 text-bold">Delivery</p>
        </div>
      </div>
      <div className="flex items-center w-[200px] bg-gray-200 sm:w-[400px] lg:w-[500px] p-1 rounded-full">
        <AiOutlineSearch size={20} className="ml-1" />
        <input
          type="text"
          className="bg-transparent w-full p-2 focus:outline-none"
          placeholder="search meals"
        />
      </div>
      <button className="bg-orange-700 text-white hidden md:flex items-center rounded-full py-2">
        <BsFillCartFill size={20} className="mr-1" />
        Cart
      </button>
      {sideNav && (
        <div
          className="fixed bg-black/60 w-full h-screen z-10 top-0 left-0"
          onClick={() => setSideNav(!sideNav)}
        ></div>
      )}

      <div
        className={
          sideNav
            ? "fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300"
            : "fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300"
        }
      >
        <AiOutlineClose
          onClick={() => setSideNav(!sideNav)}
          size={25}
          className="absolute right-4 top-4 cursor-pointer"
        />
        <h2 className="text-2xl p-4">
          Yum<span className="text-orange-700 font-bold">Eats</span>
        </h2>
        <nav>
          <ul className="flex flex-col p-4 text-gray-900">
            <li className="text-xl py-4 flex ">
              <BsPerson
                size={35}
                className="mr-4 bg-black text-white rounded-full p-2"
              />
              My Account
            </li>
            <li className="text-xl py-4 flex ">
              <TbTruckReturn
                size={35}
                className="mr-4 bg-black text-white rounded-full p-2"
              />
              Delivery
            </li>
            <li className="text-xl py-4 flex ">
              <MdOutlineFavorite
                size={35}
                className="mr-4 bg-black text-white rounded-full p-2"
              />
              My Favorite
            </li>
            <li className="text-xl py-4 flex ">
              <FaGoogleWallet
                size={35}
                className="mr-4 bg-black text-white rounded-full p-2"
              />
              My Wallet
            </li>
            <li className="text-xl py-4 flex ">
              <MdHelp
                size={35}
                className="mr-4 bg-black text-white rounded-full p-2"
              />
              Help
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default TopNav;
