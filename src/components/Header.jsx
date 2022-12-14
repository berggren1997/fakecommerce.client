import React from "react";
import { SearchIcon, ShoppingCartIcon } from "@heroicons/react/outline";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const dispatch = useDispatch();
  const { items } = useSelector((state) => state.cart);
  const navigate = useNavigate();

  return (
    <>
      {/* LEFT */}
      <div className="flex items-center z-20 bg-amazon_blue p-1 flex-grow py-2">
        <div className="mt-2 items-center flex-grow sm:flex-grow-0">
          <div className="flex text-center">
            <h1
              onClick={() => {
                navigate("/");
              }}
              className="mb-2 text-center text-white mr-14 ml-8 font-bold text-xl 
              hover:cursor-pointer hover:text-yellow-400"
              style={{ fontFamily: "Poppins" }}
            >
              20-dollar-store
            </h1>
          </div>

          {/* <img
            src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
            width={150}
            height={40}
            style={{
              objectFit: "contain",
              cursor: "pointer",
              marginLeft: 4,
              marginRight: 25,
            }}
          /> */}
        </div>
        {/* MIDDLE */}
        <div
          className="hidden sm:flex bg-yellow-400 items-center h-10 rounded-md flex-grow
        cursor-pointer hover:bg-yellow-500"
        >
          <input
            className="p-2 h-full w-6 flex-grow rounded-l-md focus:outline-none px-4"
            type="text"
          />
          <SearchIcon className="h-12 p-4" />
        </div>

        {/* RIGHT */}
        <div className="text-white flex items-center text-xs space-x-6 mx-6 whitespace-nowrap">
          <div
            className="cursor-pointer hover:underline"
            onClick={() => {
              navigate("/login");
            }}
          >
            <p className="font-extrabold md:text-sm">Sign in</p>
          </div>
          {/* Logged in? show orders btn or smth */}
          <div className="cursor-pointer hover:underline">
            <p className="font-extrabold md:text-sm">Orders</p>
          </div>
          <div className="cursor-pointer md:text-sm relative flex items-center">
            <span
              className="absolute top-0 right-0 h-5 w-5 bg-yellow-400 rounded-full text-center 
            text-black font-bold"
            >
              {items.length > 9 ? "9+" : items.length}
              {/* if items over 9, do "9+" */}
            </span>
            <ShoppingCartIcon
              className="h-10 hover:text-yellow-400"
              onClick={() => {
                navigate("/checkout");
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
