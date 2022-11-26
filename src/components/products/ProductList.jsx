import { Box, Grid, Typography } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import ProductCard from "../products/ProductCard";
import CircularProgress from "@mui/material/CircularProgress";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const fetchProducts = async () => {
    setLoading(true);
    await axios
      .get("https://localhost:5001/api/product")
      .then(({ data }) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <Box width="80%" margin="80px auto">
      <Typography variant="h3" textAlign="center">
        Our Featured <b>Products</b>
      </Typography>
      <Box
        margin="0 auto"
        display="grid"
        gridTemplateColumns="repeat(auto-fill, 300px)"
        justifyContent="space-around"
        rowGap="20px"
        columnGap="1.33%"
      >
        {loading && <CircularProgress />}
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </Box>
    </Box>
  );
};

export default ProductList;
