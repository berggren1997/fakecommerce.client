import { FavoriteBorderOutlined } from "@mui/icons-material";
import { Box, Button, Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { shades } from "../../theme";

const ProductDetails = () => {
  const { id } = useParams();
  const [item, setItem] = useState();
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
  }, []);

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
            {/* <Box
              display="flex"
              alignItems="center"
              border={`1.5px solid ${shades.neutral[300]}`}
              mr="20px"
              p="2px 5px"
            >
              <IconButton onClick={() => setCount(Math.max(count - 1, 0))}>
                <RemoveIcon />
              </IconButton>
              <Typography sx={{ p: "0 5px" }}>{count}</Typography>
              <IconButton onClick={() => setCount(count + 1)}>
                <AddIcon />
              </IconButton>
            </Box> */}
            <Button
              sx={{
                backgroundColor: "#222222",
                color: "white",
                borderRadius: 0,
                minWidth: "150px",
                padding: "10px 40px",
              }}
              //   onClick={() => dispatch(addToCart({ item: { ...item, count } }))}
            >
              ADD TO CART
            </Button>
          </Box>
          <Box mt={4}>
            <Typography>CATEGORY: {item?.category}</Typography>
          </Box>
        </Box>
      </Box>
      <Button
        sx={{
          backgroundColor: "#222222",
          color: "white",
          borderRadius: 0,
          height: "40px",
          minWidth: "150px",
          padding: "10px 40px",
        }}
        onClick={() => {
          navigate("/products");
        }}
      >
        Back to products
      </Button>
      {/* RELATED ITEMS */}
      {/* <Box mt="50px" width="100%">
        <Typography variant="h3" fontWeight="bold">
          Related Products
        </Typography>
        <Box
          mt="20px"
          display="flex"
          flexWrap="wrap"
          columnGap="1.33%"
          justifyContent="space-between"
        >
          {items.slice(0, 4).map((item, i) => (
            <Item key={`${item.name}-${i}`} item={item} />
          ))}
        </Box>
      </Box> */}
    </Box>
  );
};

export default ProductDetails;
