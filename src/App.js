import Homepage from "./pages/Homepage";
import { Routes, Route } from "react-router-dom";
import Login from "./components/account/Login";
import Register from "./components/account/Register";
import Navbar from "./components/Navbar";
import Announcement from "./components/Announcement";
import ProductCard from "./components/ProductCard";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import ProductList from "./components/ProductList";

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
      </ThemeProvider>
    </div>
  );
}

export default App;
