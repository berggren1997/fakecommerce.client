import Homepage from "./pages/Homepage";
import { Routes, Route } from "react-router-dom";
import Login from "./components/account/Login";
import Register from "./components/account/Register";
import Navbar from "./components/Navbar";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import ProductList from "./components/products/ProductList";
import CartMenu from "./components/cart/CartMenu";

function App() {
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
        <Navbar />
        <CssBaseline />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/products" element={<ProductList />} />
        </Routes>
        <CartMenu />
      </ThemeProvider>
    </div>
  );
}

export default App;
