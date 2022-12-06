import React from "react";
import { StarIcon } from "@heroicons/react/solid";
import { useDispatch } from "react-redux";
import {
  addShoppingCartItem,
  removeShoppingCartItem,
} from "../redux/shoppingcart/shoppingCartActions";

const CheckoutProduct = ({ product }) => {
  const dispatch = useDispatch();
  return (
    <div className="grid grid-cols-5 relative">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 absolute top-0 right-0 hover:cursor-pointer
        hover:bg-gray-400 hover:rounded-full"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
      <img
        src={product.pictureUrl}
        width={200}
        height={200}
        style={{ objectFit: "contain" }}
        alt=""
      />
      {/* MIDDLE */}
      <div className="col-span-3 mx-5">
        <p>{product.name}</p>
        <div className="flex">
          <StarIcon className="h-5 text-yellow-400" />
          <StarIcon className="h-5 text-yellow-400" />
          <StarIcon className="h-5 text-yellow-400" />
          <StarIcon className="h-5 text-yellow-400" />
          <StarIcon className="h-5 text-yellow-400" />
        </div>
        <p className="text-xs my-2">{product.description}</p>
        <div className="mb-5">
          <p>${product.price}</p>
        </div>
        <div className="flex">
          <svg
            onClick={() => {
              dispatch(addShoppingCartItem(product.productId, 1));
            }}
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 mr-4 hover:cursor-pointer
            hover:bg-gray-400 hover:rounded-full"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4v16m8-8H4"
            />
          </svg>
          <p>{product.quantity}</p>
          <svg
            onClick={() => {
              dispatch(removeShoppingCartItem(product.productId, 1));
            }}
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 hover:cursor-pointer ml-4
            hover:bg-gray-400 hover:rounded-full"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M20 12H4" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default CheckoutProduct;
