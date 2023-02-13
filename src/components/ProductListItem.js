import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

function ProductListItem(props) {
  const { product } = props;
  const { title, price, category, description, image } = product;
  return (
    <>
      <Card
        sx={{ maxWidth: 345 }}
        className="bg-white shadow-lg shadow-blue-800/50 mt-5 "
      >
        <CardMedia sx={{ height: 400 }} image={image} title={category} />
        <CardContent className="pt-5">
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            className="whitespace-nowrap text-ellipsis overflow-hidden "
          >
            {title}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            className="whitespace-nowrap text-ellipsis overflow-hidden"
          >
            {description}
          </Typography>
        </CardContent>
        <Button size="small" className="float-right pt-5 ">
          Share
        </Button>
        <CardActions>
          <Typography variant="h6" className="font-black pt-5 text-red-800 ">
            {price} $
          </Typography>
        </CardActions>
      </Card>
    </>
  );
}

export default ProductListItem;
