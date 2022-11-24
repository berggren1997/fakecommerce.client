import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box, CardHeader, IconButton } from "@mui/material";
import { Avatar } from "@mui/material";
import { Link } from "react-router-dom";
import { useState } from "react";
import {
  AddShoppingCartOutlined,
  RemoveShoppingCartOutlined,
} from "@mui/icons-material";

const ProductCard = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [count, setCount] = useState(1);
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
            console.log("should navigate to product with id:" + product.id);
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
        <Typography variant="subtitle2">
          {product.category
            .replace(/([A-Z])/g, " $1")
            .replace(/^./, (str) => str.toUpperCase())}
        </Typography>
        <Typography>{product.name}</Typography>
        <Typography fontWeight="bold">${product.price}</Typography>
        <Button variant="contained" color="warning">
          Add to Cart
        </Button>
      </Box>
    </Box>
  );
};

export default ProductCard;
