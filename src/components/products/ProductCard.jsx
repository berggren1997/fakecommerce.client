import Typography from "@mui/material/Typography";
import { Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import ButtonComponent from "../ButtonComponent";
import { useDispatch } from "react-redux";
import { addShoppingCartItem } from "../../redux/shoppingcart/shoppingCartActions";
import { shades } from "../../theme";
import { StarIcon } from "@heroicons/react/solid";

const ProductCard = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [count, setCount] = useState(1);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <div
      className="relative flex items-center flex-col m-5 bg-white z-30 p-10
    hover:cursor-pointer"
    >
      <p className="absolute top-2 right-2 text-sm text-gray-400 italic">
        {product.category}
      </p>
      <img
        src={product.pictureUrl}
        height={250}
        width={250}
        style={{
          objectFit: "contain",
        }}
      />
      <h4>{product.name}</h4>
      <div className="flex">
        <StarIcon className="h-5 text-yellow-400" />
        <StarIcon className="h-5 text-yellow-400" />
        <StarIcon className="h-5 text-yellow-400" />
        <StarIcon className="h-5 text-yellow-400" />
        <StarIcon className="h-5 text-yellow-400" />
      </div>
      <p className="text-sm my-2">{product.description}</p>

      <div className="mb-5">
        <p>${product.price}</p>
      </div>
      <button
        onClick={() => {
          dispatch(addShoppingCartItem(product.id, 1));
        }}
        style={{ width: "100%" }}
        className="mt-auto button"
      >
        Add to Basket
      </button>
    </div>
    // <Box mt={6}>
    //   <Box
    //     position="relative"
    //     onMouseOver={() => setIsHovered(true)}
    //     onMouseOut={() => setIsHovered(false)}
    //   >
    //     <img
    //       alt={product.name}
    //       width="280px"
    //       height="300px"
    //       src={product.pictureUrl}
    //       onClick={() => {
    //         navigate(`/products/${product.id}`);
    //       }}
    //       style={{ cursor: "pointer" }}
    //     />
    //     <Box
    //       display={isHovered ? "blocked" : "none"}
    //       positon="absolute"
    //       bottom="10%"
    //       left="0"
    //       width="100%"
    //       padding="0 5%"
    //     >
    //       <Box display="flex" justifyContent="space-between">
    //         <Box
    //           display="flex"
    //           alignItems="center"
    //           // backGroundColor=""
    //           borderRadius="3px"
    //         ></Box>
    //       </Box>
    //     </Box>
    //   </Box>
    //   <Box mt="3px">
    //     <Typography fontWeight="bold">${product.price}</Typography>
    //     {/* <Typography variant="subtitle2">
    //       {product.category
    //         .replace(/([A-Z])/g, " $1")
    //         .replace(/^./, (str) => str.toUpperCase())}
    //     </Typography> */}
    //     <Typography mb={2}>{product.name}</Typography>
    //     <Box display="flex" justifyContent="space-between">
    //       <Button
    //         sx={{
    //           backgroundColor: shades.primary[400],
    //           color: "white",
    //           minWidth: "95%",
    //           height: "35px",
    //           borderRadius: 0,
    //           padding: "20px 40px",
    //         }}
    //         onClick={() => {
    //           dispatch(addShoppingCartItem(product.id, 1));
    //         }}
    //       >
    //         Add to cart
    //       </Button>
    //     </Box>
    //   </Box>
    // </Box>
  );
};

export default ProductCard;
