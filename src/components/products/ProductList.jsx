import { Box, Tab, Tabs, Typography, useMediaQuery } from "@mui/material";
import React, { useEffect, useState } from "react";
import ProductCard from "../products/ProductCard";
import CircularProgress from "@mui/material/CircularProgress";
import agent from "../../api/agent";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [value, setValue] = useState("all");
  const breakPoint = useMediaQuery("(min-width:600px)");

  const fetchProducts = async () => {
    try {
      const response = await agent.Products.getProducts();
      setProducts(response);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const shirtFilter =
    products && products.filter((product) => product.category === "Shirt");

  const pantsFilter = products.filter((pants) => pants.category === "Pants");

  const blouseFilter = products.filter(
    (blouse) => blouse.category === "Blouse"
  );

  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <div className="grid grid-flow-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {products &&
        products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
    </div>
    // <Box width="80%" margin="80px auto">
    //   <Typography variant="h3" textAlign="center">
    //     <b>Our Featured Products</b>
    //   </Typography>
    //   <Tabs
    //     textColor="primary"
    //     indicatorColor="primary"
    //     value={value}
    //     onChange={handleChange}
    //     centered
    //     TabIndicatorProps={{ sx: { display: breakPoint ? "block" : "none" } }}
    //     sx={{
    //       m: "25px",
    //       "& .MuiTabs-flexContainer": {
    //         flexWrap: "wrap",
    //       },
    //     }}
    //   >
    //     <Tab label="ALL" value="all" />
    //     <Tab label="SHIRTS" value="shirts" />
    //     <Tab label="PANTS" value="pants" />
    //     <Tab label="BLOUSES" value="blouse" />
    //   </Tabs>
    //   <Box
    //     margin="0 auto"
    //     display="grid"
    //     gridTemplateColumns="repeat(auto-fill, 300px)"
    //     justifyContent="space-around"
    //     rowGap="20px"
    //     columnGap="1.33%"
    //   >
    //     {loading && <CircularProgress />}
    //     {value === "all" &&
    //       products.map((product) => (
    //         <ProductCard key={product.id} product={product} />
    //       ))}
    //     {value === "shirts" &&
    //       shirtFilter.map((shirt) => (
    //         <ProductCard key={shirt.id} product={shirt} />
    //       ))}
    //     {value === "pants" &&
    //       pantsFilter.map((pants) => (
    //         <ProductCard key={pants.id} product={pants} />
    //       ))}

    //     {value === "blouse" &&
    //       blouseFilter.map((blouse) => (
    //         <ProductCard key={blouse.id} product={blouse} />
    //       ))}
    //   </Box>
    // </Box>
  );
};

export default ProductList;
