import React from "react";
import TableComp from "../components/TableComp";
import { useSelector, useDispatch } from "react-redux";
import { ProductApiAction } from "../redux/actions/ProductApiAction";
import { useEffect } from "react";
const ProductTable = () => {
  const ThItems = [
    "id",
    "image",
    "title",
    "description",
    "price",
    "category",
    "settings",
  ];
  const state = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(ProductApiAction());
  }, [dispatch]);
  return (
    <div>
      <TableComp th={ThItems} td={state.products} />
    </div>
  );
};

export default ProductTable;
