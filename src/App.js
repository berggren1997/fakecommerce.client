import { Routes, Route } from "react-router-dom";
import Login from "./components/account/Login";
import Register from "./components/account/Register";
import Navbar from "./components/Navbar";
import { ThemeProvider, createTheme } from "@mui/material";
import ProductList from "./components/products/ProductList";
import CartMenu from "./components/cart/CartMenu";
import ProductDetails from "./components/products/ProductDetails";
import Hero from "./components/Hero";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getShoppingCart } from "./redux/shoppingcart/shoppingCartActions";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "./components/Header";
import Banner from "./components/Banner";
import Checkout from "./components/Checkout";
import { fetchProducts } from "./redux/products/productActions";

function App() {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.products.products);

  useEffect(() => {
    dispatch(getShoppingCart());
    if (!products) {
      dispatch(fetchProducts());
    }
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
      {/* <ThemeProvider theme={theme}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/products" element={<ProductList />} />
        </Routes>
        <CartMenu />
      </ThemeProvider> */}
    </div>
  );
}

export default App;
