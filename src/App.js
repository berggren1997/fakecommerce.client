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
import { useDispatch } from "react-redux";
import { getShoppingCart } from "./redux/shoppingcart/shoppingCartActions";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getShoppingCart());
  }, []);

  const theme = createTheme({
    palette: {
      background: {
        default: "#eaeaea",
      },
    },
  });
  return (
    <div>
      <ThemeProvider theme={theme}>
        <ToastContainer position="bottom-right" hideProgressBar />
        <Navbar />
        {/* <CssBaseline /> */}
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/products/:id" element={<ProductDetails />} />
        </Routes>
        <CartMenu />
      </ThemeProvider>
    </div>
  );
}

export default App;
