import Homepage from "./pages/Homepage";
import { Routes, Route } from "react-router-dom";
import Login from "./components/account/Login";
import Register from "./components/account/Register";
import Navbar from "./components/Navbar";
import Announcement from "./components/Announcement";
import ProductCard from "./components/ProductCard";

function App() {
  return (
    <div className="App">
      <Announcement />
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/product" element={<ProductCard />} />
      </Routes>
    </div>
  );
}

export default App;
