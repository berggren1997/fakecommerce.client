import React from "react";
import { useSelector } from "react-redux";
import CheckoutProduct from "./CheckoutProduct";

const Checkout = () => {
  const { items } = useSelector((state) => state.cart);
  const { token } = useSelector((state) => state.user);
  let totalPrice = 0;
  const calcTotalPrice = () => {
    if (items.length > 0) {
      totalPrice = items.reduce((total, item) => {
        return total + item.quantity * item.price;
      }, 0);
    }
    return totalPrice;
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
                className={`button mt-4 ${
                  !token &&
                  "from-gray-300 to-gray-500 border-gray-200 text-gray-300 cursor-not-allowed"
                }`}
              >
                {!token ? "Sign in to checkout" : "Checkout"}
              </button>
            </>
          )}
        </div>
      </main>
    </div>
  );
};

export default Checkout;
