import { Box, IconButton, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
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
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const getProductItem = async () => {
    try {
      const product = await agent.Products.getProductById(id);
      setItem(product);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProductItem();
  }, [id]);

  return (
    <div className="pt-10 pb-12 pl-20 h-[92vh]">
      <div className="flex flex-col md:flex-row">
        <div className="flex flex-col w-1/2">
          <div className="max-w-md">
            <div className="flex items-center text-sm pt-9">
              <span>{item?.category}&nbsp;</span>
              <span>/ {item?.name}</span>
            </div>
            <div className="pt-10">
              <h1 className="text-4xl font-semibold">{item?.name}</h1>
            </div>
            <div className="flex items-center justify-between pt-4">
              <span className="text-3xl">${item?.price}</span>
              <div className="flex items-center">
                <div className="flex px-6 md:px-0">
                  <StarIcon className="h-5 text-yellow-400" />
                  <StarIcon className="h-5 text-yellow-400" />
                  <StarIcon className="h-5 text-yellow-400" />
                  <StarIcon className="h-5 text-yellow-400" />
                  <StarIcon className="h-5 text-yellow-400" />
                </div>
                <div className="pl-2 leading-none">
                  5.0 / 5.0{" "}
                  <span className="text-gray-900/40">(1000 reviews)</span>
                </div>
              </div>
            </div>
            <p className="pt-8 leading-relaxed">{item?.description}</p>
            <div className="flex items-center mt-8">
              <IconButton onClick={() => setCount(Math.max(count - 1, 1))}>
                <RemoveIcon />
              </IconButton>
              <Typography sx={{ p: "0 5px" }}>{count}</Typography>
              <IconButton onClick={() => setCount(count + 1)}>
                <AddIcon />
              </IconButton>
              <button
                className="button w-44 ml-6"
                onClick={() => {
                  dispatch(addShoppingCartItem(item?.id, count));
                }}
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
        <div className="flex items-center w-[600px] h-[600px] rounded-md">
          <img
            src={item?.pictureUrl}
            alt="itempicture"
            className="bg-inherit"
          />
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
