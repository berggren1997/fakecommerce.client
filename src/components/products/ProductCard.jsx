import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import ButtonComponent from "../ButtonComponent";
import { useDispatch } from "react-redux";
import { addShoppingCartItem } from "../../redux/shoppingcart/shoppingCartActions";

const ProductCard = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [count, setCount] = useState(1);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <Box mt={6}>
      <Box
        position="relative"
        onMouseOver={() => setIsHovered(true)}
        onMouseOut={() => setIsHovered(false)}
      >
        <img
          alt={product.name}
          width="280px"
          height="300px"
          src={product.pictureUrl}
          onClick={() => {
            navigate(`/products/${product.id}`);
          }}
          style={{ cursor: "pointer" }}
        />
        <Box
          display={isHovered ? "blocked" : "none"}
          positon="absolute"
          bottom="10%"
          left="0"
          width="100%"
          padding="0 5%"
        >
          <Box display="flex" justifyContent="space-between">
            <Box
              display="flex"
              alignItems="center"
              // backGroundColor=""
              borderRadius="3px"
            ></Box>
          </Box>
        </Box>
      </Box>
      <Box mt="3px">
        <Typography fontWeight="bold">${product.price}</Typography>
        {/* <Typography variant="subtitle2">
          {product.category
            .replace(/([A-Z])/g, " $1")
            .replace(/^./, (str) => str.toUpperCase())}
        </Typography> */}
        <Typography mb={2}>{product.name}</Typography>
        <Box display="flex" justifyContent="space-between">
          <ButtonComponent
            clickEvent={() => {
              dispatch(addShoppingCartItem(product.id, 1));
            }}
          >
            {"Add to cart"}
          </ButtonComponent>
        </Box>
      </Box>
    </Box>
  );
};

export default ProductCard;
