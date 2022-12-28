import { Routes, Route } from "react-router-dom";
import Login from "./components/account/Login";
import Register from "./components/account/Register";
import ProductDetails from "./components/products/ProductDetails";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getShoppingCart } from "./redux/shoppingcart/shoppingCartActions";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "./components/Header";
import Banner from "./components/Banner";
import Checkout from "./components/Checkout";
import { fetchProducts } from "./redux/products/productActions";
import { fetchCurrentUser, refreshToken } from "./redux/user/userActions";
import { getCookie, getUserInfo } from "./utils";
import agent from "./api/agent";

const App = () => {
  const dispatch = useDispatch();
  const userValues = getUserInfo();
  // const startRefreshTokenInterval = () => {
  //   setInterval(() => dispatch(refreshToken()), 600000);
  // };

  const startRefreshTokenInterval = async () => {
    setInterval(() => agent.Account.refreshAccessToken(), 600000);
  };

  const { products } = useSelector((state) => state.products.products);
  const buyerId = getCookie("buyerId");
  useEffect(() => {
    if (buyerId || userValues?.accessToken) {
      dispatch(getShoppingCart());
    }
    if (!products) {
      dispatch(fetchProducts());
    }

    if (userValues?.accessToken) {
      agent.Account.refreshAccessToken().then(() =>
        startRefreshTokenInterval()
      );
    }
    // dispatch(fetchCurrentUser());
  }, [dispatch]);

  return (
    <div className="bg-gray-100">
      <ToastContainer position="bottom-right" limit={3} hideProgressBar />
      <Header />
      <main className="max-w-screen-2xl mx-auto">
        <Routes>
          <Route path="/" element={<Banner />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/products/:id" element={<ProductDetails />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
