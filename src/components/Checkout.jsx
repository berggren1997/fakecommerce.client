import React from "react";
import { useSelector } from "react-redux";
import CheckoutProduct from "./CheckoutProduct";

const Checkout = () => {
  const { items } = useSelector((state) => state.cart);
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
        {/* RIGHT */}
        <div></div>
      </main>
    </div>
  );
};

export default Checkout;
