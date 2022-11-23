import { Grid } from "@mui/material";
import React from "react";
import ProductCard from "./ProductCard";

const ProductList = () => {
  return (
    <>
      <h1 style={{ marginLeft: 700, marginTop: 20 }}>ON SALE</h1>
      <Grid flex={true} container spacing={4} p={12}>
        <Grid item xs={3}>
          <ProductCard id={1} />
        </Grid>
        <Grid item xs={3}>
          <ProductCard id={2} />
        </Grid>
        <Grid item xs={3}>
          <ProductCard id={3} />
        </Grid>
        <Grid item xs={3}>
          <ProductCard id={4} />
        </Grid>
        <Grid item xs={3}>
          <ProductCard id={5} />
        </Grid>
        <Grid item xs={3}>
          <ProductCard id={6} />
        </Grid>
        <Grid item xs={3}>
          <ProductCard id={7} />
        </Grid>
        <Grid item xs={3}>
          <ProductCard id={8} />
        </Grid>
      </Grid>
    </>
  );
};

export default ProductList;
