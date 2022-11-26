import { Box, IconButton, Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { shades } from "../../theme";
import ButtonComponent from "../ButtonComponent";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

const ProductDetails = () => {
  const { id } = useParams();
  const [item, setItem] = useState();
  const [count, setCount] = useState(1);
  const navigate = useNavigate();
  const getProductItem = async () => {
    await axios
      .get(`https://localhost:5001/api/product/${id}`)
      .then(({ data }) => {
        setItem(data);
      })
      .catch((err) => console.log(err));
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
            <Typography sx={{ mt: "20px" }}>{item?.description}</Typography>
          </Box>

          <Box display="flex" alignItems="center" minHeight="50px">
            <Box
              display="flex"
              alignItems="center"
              border={`1.5px solid ${shades.neutral[300]}`}
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
            <ButtonComponent>{"Add to cart"}</ButtonComponent>
          </Box>
          <Box mt={4}>
            <Typography>CATEGORY: {item?.category}</Typography>
          </Box>
        </Box>
      </Box>
      <ButtonComponent
        clickEvent={() => {
          navigate("/products");
        }}
      >
        {"Back to products"}
      </ButtonComponent>
    </Box>
  );
};

export default ProductDetails;
