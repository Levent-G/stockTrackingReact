import React from "react";

import { useSelector, useDispatch } from "react-redux";
import { getCategory } from "../redux/actions/ProductApiAction";
import { useEffect } from "react";
import TypographyComp from "../components/TypographyComp";
import Button from "@mui/material/Button";
const CategoryPage = () => {
  const state = useSelector((state) => state.category);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCategory());
  }, [dispatch]);

  return (
    <div className="m-48">
      {state.category
        ? state.category.map((td) => (
            <>
              <TypographyComp color="black" text={td + " "} />
              <Button variant="contained">Düzenle</Button>
            </>
          ))
        : ""}
    </div>
  );
};

export default CategoryPage;
