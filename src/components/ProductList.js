import * as React from "react";

import { useEffect } from "react";
import ProductListItem from "./ProductListItem";
import { useSelector, useDispatch } from "react-redux";
import { ProductApiAction } from "../redux/actions/ProductApiAction";

import Grid from "@mui/material/Grid";

import Box from "@mui/material/Box";

function ProductList() {
  const state = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(ProductApiAction());
  }, [dispatch]);

  return (
    <>
      <Box sx={{ margin: 5 }}>
        <Grid container spacing={1}>
          {" "}
          {state.products
            ? state.products.map((product, index) => (
                <Grid xs={3}>
                  <ProductListItem
                    key={index}
                    product={product}
                    index={index}
                  />
                </Grid>
              ))
            : ""}
        </Grid>
      </Box>
    </>
  );
}

export default ProductList;
