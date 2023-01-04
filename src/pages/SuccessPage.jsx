import React from "react";
import { CheckCircleIcon } from "@heroicons/react/outline";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { clearShoppingCart } from "../redux/shoppingcart/shoppingCartActions";

const SuccessPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(clearShoppingCart());
  }, []);
  return (
    <div className="h-screen bg-gray-100">
      <main className="max-w-screen-lg mx-auto">
        <div className="flex flex-col p-10 bg-white items-center">
          <div className="flex items-center space-x-2 mb-5">
            <CheckCircleIcon className="text-green-500 h-10" />
            <h1 className="text-3xl">
              Thank you, you order has been confirmed.
            </h1>
          </div>
          <p>
            Thank you for shopping with us. We hope to see you again sometime
            soon!
          </p>
          <button
            className="button mt-8 w-full"
            onClick={() => {
              navigate("/");
            }}
          >
            Go to products
          </button>
        </div>
      </main>
    </div>
  );
};

export default SuccessPage;
