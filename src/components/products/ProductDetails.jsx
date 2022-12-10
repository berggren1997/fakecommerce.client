import { Box, Button, IconButton, Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { shades } from "../../theme";
import ButtonComponent from "../ButtonComponent";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useDispatch, useSelector } from "react-redux";
import { StarIcon } from "@heroicons/react/solid";
import { addShoppingCartItem } from "../../redux/shoppingcart/shoppingCartActions";
import agent from "../../api/agent";

const ProductDetails = () => {
  const { id } = useParams();
  const [item, setItem] = useState();
  const [count, setCount] = useState(1);
  const { token } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const getProductItem = async () => {
    try {
      const product = await agent.Products.getProductById(id, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setItem(product);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProductItem();
  }, [id]);

  return (
    <Box width="80%" m="80px auto">
      <Box display="flex" flexWrap="wrap" columnGap="40px">
        {/* IMAGES */}
        <Box flex="1 1 40%" mb="40px">
          <img
            alt={item?.name}
            width="100%"
            height="100%"
            src={item?.pictureUrl}
            style={{ objectFit: "contain" }}
          />
        </Box>

        {/* ACTIONS */}
        <Box flex="1 1 50%" mb="40px">
          <Box m="65px 0 25px 0">
            <Typography variant="h3">{item?.name}</Typography>
            <Typography>
              <b>${item?.price}</b>
            </Typography>
            <div className="flex">
              <StarIcon className="h-5 text-yellow-400" />
              <StarIcon className="h-5 text-yellow-400" />
              <StarIcon className="h-5 text-yellow-400" />
              <StarIcon className="h-5 text-yellow-400" />
              <StarIcon className="h-5 text-yellow-400" />
            </div>
            <Typography sx={{ mt: "20px" }}>{item?.description}</Typography>
          </Box>

          <Box display="flex" alignItems="center" minHeight="50px">
            <Box
              display="flex"
              alignItems="center"
              // border={`1.5px solid ${shades.neutral[300]}`}
              mr="20px"
              p="2px 5px"
            >
              <IconButton onClick={() => setCount(Math.max(count - 1, 1))}>
                <RemoveIcon />
              </IconButton>
              <Typography sx={{ p: "0 5px" }}>{count}</Typography>
              <IconButton onClick={() => setCount(count + 1)}>
                <AddIcon />
              </IconButton>
            </Box>
            <button
              className="button w-44"
              onClick={() => {
                dispatch(addShoppingCartItem(item?.id, count));
              }}
            >
              Add to Cart
            </button>
          </Box>
          <Box mt={4}>
            <Typography>CATEGORY: {item?.category}</Typography>
          </Box>
        </Box>
      </Box>
      <button
        onClick={() => {
          navigate("/");
        }}
        className="button w-44"
      >
        Home
      </button>
    </Box>
  );
};

export default ProductDetails;
