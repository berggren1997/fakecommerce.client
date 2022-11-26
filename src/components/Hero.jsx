import { Box, Typography, IconButton, useMediaQuery } from "@mui/material";
import { shades } from "../theme";
import { useNavigate } from "react-router-dom";
import ButtonComponent from "./ButtonComponent";
const Hero = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const navigate = useNavigate();
  return (
    <Box mt="60px">
      <img
        src="/img/hero4.png"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          backgroundAttachment: "fixed",
        }}
      />
      <Box
        color="white"
        padding="20px"
        borderRadius="10px"
        textAlign="left"
        backgroundColor="rgba(0,0,0,0.4)"
        position="absolute"
        top="46%"
        left={isNonMobile ? "10%" : "0"}
        right={isNonMobile ? undefined : "0"}
        margin={isNonMobile ? undefined : "0 auto"}
        maxWidth={isNonMobile ? undefined : "240px"}
      >
        <Typography>ONLINE SHOPPING</Typography>
        <Typography variant="h1">MADE EASY</Typography>
        <ButtonComponent clickEvent={() => navigate("/products")}>
          {"Start shopping"}
        </ButtonComponent>
      </Box>
    </Box>
  );
};

export default Hero;
