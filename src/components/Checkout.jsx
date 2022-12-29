import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import agent from "../api/agent";
import { clearShoppingCart } from "../redux/shoppingcart/shoppingCartActions";
import { getUserInfo } from "../utils";
import CheckoutProduct from "./CheckoutProduct";

const stripePromise = loadStripe(
  "pk_test_51LQFW9HXTD9E5fdzrt5aJsYuP8UqMtAPNVkQ2ysBnrTHQjZUFa0cR5nznIIu8qFOJFxzw35QMgh5XcyY3fJjIY1G00fWKmVWVs"
);

const Checkout = () => {
  const { items } = useSelector((state) => state.cart);
  const userInfo = getUserInfo();
  const dispatch = useDispatch();
  let totalPrice;
  if (items) {
    totalPrice = (items || []).reduce((total, item) => {
      return total + item.quantity * item.price;
    }, 0);
  }

  const createCheckoutSession = async () => {
    const stripe = await stripePromise;

    //call backend to create checkout session
    const checkoutSession = await agent.Checkout.createCheckoutSession(items);
  };

  return (
    <div className="bg-gray-100">
      <main
        className="lg:flex max-w-screen-2xl
        mx-auto"
      >
        {/* LEFT */}
        <div className="flex-grow m-5 shadow-sm">
          <img
            src="https://links.papareact.com/ikj"
            width={1020}
            height={250}
            style={{ objectFit: "contain" }}
            alt=""
          />

          <div className="flex flex-col p-5 space-y-10">
            <h1 className="text-3xl border-b pb-4">
              {items.length === 0
                ? "Your Shopping Basket is empty"
                : "Shopping Basket"}
            </h1>
            {items.length !== 0 && (
              <div className="flex items-center mx-auto">
                <label className="mx-4">Clear basket</label>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 hover:cursor-pointer"
                  onClick={() => {
                    dispatch(clearShoppingCart());
                  }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                  />
                </svg>
              </div>
            )}

            {items.length > 0 &&
              items.map((product) => (
                <CheckoutProduct key={product.productId} product={product} />
              ))}
          </div>
        </div>
        {/* RIGHT/CHECKOUT-SUBTOTAL */}
        <div className="flex flex-col bg-white p-10 shadow-md">
          {items.length > 0 && (
            <>
              <h2 className="whitespace-nowrap">
                Subtotal ({items.length} unique{" "}
                {items.length === 1 ? "item" : "items"}
                ): <span className="font-bold">${totalPrice}</span>
              </h2>

              <button
                onClick={createCheckoutSession}
                role="link"
                className={`button mt-4 ${
                  !userInfo?.accessToken &&
                  "from-gray-300 to-gray-500 border-gray-200 text-gray-300 cursor-not-allowed"
                }`}
              >
                {!userInfo?.accessToken ? "Sign in to checkout" : "Checkout"}
              </button>
            </>
          )}
        </div>
      </main>
    </div>
  );
};

export default Checkout;
