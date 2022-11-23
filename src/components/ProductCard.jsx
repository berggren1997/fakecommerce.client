import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { CardHeader } from "@mui/material";
import { Avatar } from "@mui/material";
import { Link } from "react-router-dom";

const ProductCard = ({ id }) => {
  return (
    <>
      <Card sx={{ width: "300px", minWidth: "300px" }}>
        <CardMedia
          sx={{
            height: 300,
            width: 300,
          }}
          image={`/img/products/f${id}.jpg`}
          title="product name"
        />
        <CardContent>
          <Typography gutterBottom variant="h5">
            {"price"}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {"product.brand"} / {"product.type"}
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            // loading={status === "pendingAddItem" + product.id}
            onClick={() => {}}
            size="small"
          >
            Add to cart
          </Button>
          <Link
            style={{ textDecoration: "none", color: "inherit" }}
            // to={`catalog/${product.id}`}
          >
            <Button size="small">View</Button>
          </Link>
        </CardActions>
      </Card>
      {/* <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          alt="green iguana"
          height="300"
          width="600"
          image="/img/products/f1.jpg"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            17,3" gaming laptop från 11:e gen.
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lorem ipsup.. yadadada Lorem ipsup.. yadadada Lorem ipsup.. yadadada
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Add to cart</Button>
          <Button size="small">View</Button>
        </CardActions>
      </Card> */}
    </>
  );
};

export default ProductCard;
