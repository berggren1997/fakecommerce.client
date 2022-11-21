import React from "react";
import "../styles/navbar.css";
import SearchIcon from "@mui/icons-material/Search";
import Badge from "@mui/material/Badge";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

const Navbar = () => {
  return (
    <div className="container">
      <div className="wrapper">
        <div className="left">
          <span className="language">EN</span>
          <div className="searchcontainer">
            <input className="nav-input" placeholder="Search" />
            <SearchIcon sx={{ fontSize: 16, color: "gray" }} />
          </div>
        </div>
        <div className="center">
          <a
            style={{
              textDecoration: "none",
              cursor: "pointer",
              color: "inherit",
            }}
            href="/"
          >
            <h1 className="logo">E-Commerce</h1>
          </a>
        </div>
        <div className="right">
          <a
            style={{
              textDecoration: "none",
              cursor: "pointer",
              color: "inherit",
              justifyContent: "center",
              alignSelf: "center",
            }}
            href="register"
          >
            <div className="menu-item">REGISTER</div>
          </a>
          <a
            style={{
              textDecoration: "none",
              cursor: "pointer",
              color: "inherit",
              alignSelf: "center",
            }}
            href="login"
          >
            <div className="menu-item">SIGN IN</div>
          </a>
          <div className="menu-item">
            <Badge badgeContent={4} color="primary">
              <ShoppingCartOutlinedIcon />
            </Badge>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
