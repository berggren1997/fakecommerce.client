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
import { fetchCurrentUser } from "./redux/user/userActions";

const App = () => {
  const dispatch = useDispatch();

  //for simplicity sake, since there are not that many products, im storing them
  //in state, to prevent unneccesary API calls
  const { products } = useSelector((state) => state.products.products);

  useEffect(() => {
    dispatch(getShoppingCart());
    if (!products) {
      dispatch(fetchProducts());
    }
    dispatch(fetchCurrentUser());
  }, []);

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
