import { Box, Divider, IconButton, Typography } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { CloseOutlined } from "@mui/icons-material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import styled from "@emotion/styled";
import { shades } from "../../theme";
import { useNavigate } from "react-router-dom";
import { toggleShoppingCart } from "../../redux/shoppingcart/shoppingCartActions";
import ButtonComponent from "../ButtonComponent";

const FlexBox = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const CartMenu = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { items, isCartOpen } = useSelector((state) => state.cart);

  items.map((item) => {
    console.log(item.pictureUrl);
  });
  // const totalPrice = items.reduce((total, item) => {
  //   return total + item.quantity * item.price;
  // }, 0);
  return (
    <Box
      display={isCartOpen ? "block" : "none"}
      backgroundColor="rgba(0, 0, 0, 0.4)"
      position="fixed"
      zIndex={10}
      width="100%"
      height="100%"
      left="0"
      top="0"
      overflow="auto"
    >
      <Box
        position="fixed"
        right="0"
        bottom="0"
        width="max(400px, 30%)"
        height="100%"
        backgroundColor="white"
      >
        <Box padding="30px" overflow="auto" height="100%">
          {/* HEADER */}
          <FlexBox mb="15px">
            <Typography variant="h4">SHOPPING BAG ({items.length})</Typography>
            <IconButton
              onClick={() => {
                dispatch(toggleShoppingCart());
              }}
            >
              <CloseOutlined />
            </IconButton>
          </FlexBox>

          {/* CART LIST */}
          <Box>
            {items &&
              items.map((item) => (
                <Box key={item.productId}>
                  <FlexBox p="15px 0">
                    <Box flex="1 1 40%">
                      <img
                        alt={item.name}
                        width="123px"
                        height="164px"
                        src={item.pictureUrl}
                      />
                    </Box>
                    <Box flex="1 1 60%">
                      <FlexBox mb="5px">
                        <Typography fontWeight="bold">{item.name}</Typography>
                        <IconButton onClick={() => {}}>
                          <RemoveIcon />
                        </IconButton>
                      </FlexBox>
                      <Typography>{item.description}</Typography>
                      <FlexBox m="15px 0">
                        <Box
                          display="flex"
                          alignItems="center"
                          border={`1.5px solid ${shades.neutral[500]}`}
                        >
                          <IconButton onClick={() => {}}>
                            <RemoveIcon />
                          </IconButton>
                          <Typography>{item.count}</Typography>
                          <IconButton onClick={() => {}}>
                            <AddIcon />
                          </IconButton>
                        </Box>
                        <Typography fontWeight="bold">${item.price}</Typography>
                      </FlexBox>
                    </Box>
                  </FlexBox>
                  <Divider />
                </Box>
              ))}
          </Box>

          {/* ACTIONS */}
          <Box m="20px 0">
            <FlexBox m="20px 0">
              <Typography fontWeight="bold">SUBTOTAL</Typography>
              <Typography fontWeight="bold">${"totalPrice"}</Typography>
            </FlexBox>
            <ButtonComponent
              style={{ marginBottom: 12 }}
              clickEvent={() => {
                dispatch(toggleShoppingCart());
              }}
            >
              CHECKOUT
            </ButtonComponent>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default CartMenu;
