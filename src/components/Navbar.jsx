import React from "react";
import "../styles/navbar.css";
import { IconButton, Box, Badge, Typography } from "@mui/material";
import {
  PersonOutline,
  ShoppingBagOutlined,
  MenuOutlined,
  SearchOutlined,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleShoppingCart } from "../redux/shoppingcart/shoppingCartActions";
import ButtonComponent from "./ButtonComponent";

const Navbar = () => {
  const dispatch = useDispatch();
  const { isCartOpen, items } = useSelector((state) => state.cart);
  const navigate = useNavigate();
  return (
    <Box
      display="flex"
      alignItems="center"
      width="100%"
      height="60px"
      backgroundColor="#232f3e"
      color="white"
      position="fixed"
      top="0"
      left="0"
      zIndex="1"
      borderBottom="1px solid black"
    >
      <Box
        width="80%"
        margin="auto"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <Box
          sx={{ cursor: "pointer" }}
          onClick={() => navigate("/")}
          color="white"
        >
          <Typography variant="h5" color="#CCCC00">
            Fake Commerce
          </Typography>
        </Box>
        <Box
          display="flex"
          justifyContent="space-between"
          columnGap="20px"
          zIndex="2"
        >
          {/* <IconButton sx={{ color: "black" }}>
            <SearchOutlined />
          </IconButton>
          <IconButton sx={{ color: "black" }}>
            <PersonOutline />
          </IconButton> */}
          <ButtonComponent
            clickEvent={() => {
              navigate("/login");
            }}
          >
            Sign in
          </ButtonComponent>
          <Badge
            badgeContent={items.length}
            color="primary"
            sx={{
              "& .MuiBadge-badge": {
                right: 5,
                top: 5,
                padding: "0 4px",
                height: "14px",
                minWidth: "13px",
              },
            }}
          >
            <IconButton
              onClick={() => {
                dispatch(toggleShoppingCart());
              }}
              sx={{ color: "black" }}
            >
              <ShoppingBagOutlined />
            </IconButton>
          </Badge>
          {/* <IconButton sx={{ color: "black" }}>
            <MenuOutlined />
          </IconButton> */}
        </Box>
      </Box>
    </Box>
    // <div className="container">
    //   <div className="wrapper">
    //     <div className="center">
    //       <a
    //         style={{
    //           textDecoration: "none",
    //           cursor: "pointer",
    //           color: "inherit",
    //         }}
    //         href="/"
    //       >
    //         <h1 className="logo">E-Commerce</h1>
    //       </a>
    //     </div>
    //     <div className="right">
    //       <a
    //         style={{
    //           textDecoration: "none",
    //           cursor: "pointer",
    //           color: "inherit",
    //           justifyContent: "center",
    //           alignSelf: "center",
    //         }}
    //         href="register"
    //       >
    //         <div className="menu-item">REGISTER</div>
    //       </a>
    //       <a
    //         style={{
    //           textDecoration: "none",
    //           cursor: "pointer",
    //           color: "inherit",
    //           alignSelf: "center",
    //         }}
    //         href="login"
    //       >
    //         <div className="menu-item">SIGN IN</div>
    //       </a>
    //       <div className="menu-item">
    //         <Badge badgeContent={4} color="primary">
    //           <ShoppingCartOutlinedIcon />
    //         </Badge>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default Navbar;
