import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { ProductApiAction } from "../redux/actions/ProductApiAction";
import { useEffect } from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { DeleteProduct } from "../redux/actions/ProductApiAction";
const TableComp = () => {
  const state = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const deleteState = useSelector((deleteState) => deleteState.deleteproduct);
  const deleteDispatch = useDispatch();

  useEffect(() => {
    dispatch(ProductApiAction());
  }, [dispatch]);
  console.log(state.products);
  return (
    <div className="m-5 bg-slate-100 ">
      <table className="w-full   ">
        <tr>
          <th className="border-solid border-gray-500 p-8">ID</th>
          <th className="border-solid border-gray-500 p-8">IMAGE</th>
          <th className="border-solid border-gray-500 p-8">TITLE</th>
          <th className="border-solid border-gray-500 p-8">DESCRIPTION</th>
          <th className="border-solid border-gray-500 p-8">PRICE</th>
          <th className="border-solid border-gray-500 p-8">CATEGORY</th>
          <th className="border-solid border-gray-500 p-8">SETTINGS</th>
        </tr>

        {state.products
          ? state.products.map((product) => (
              <>
                <tr>
                  <td className="border-solid border-gray-500 p-8">
                    {product?.id}
                  </td>
                  <td className="border-solid border-gray-500 p-8">
                    <img
                      src={product?.avatar}
                      alt="sad"
                      className="w-24 h-24"
                    />
                  </td>
                  <td className="border-solid border-gray-500 p-8">
                    {product?.fname}
                  </td>
                  <td className="border-solid border-gray-500 p-8">
                    {product?.username}
                  </td>
                  <td className="border-solid border-gray-500 p-8">
                    {product?.lname}
                  </td>

                  <td className="border-solid border-gray-500 p-8">
                    <Stack spacing={2} direction="row">
                      <Button size="small" variant="contained" color="success">
                        Add
                      </Button>
                      <Button size="small" variant="contained">
                        Edit
                      </Button>
                      <Button
                        size="small"
                        variant="contained"
                        color="error"
                        onClick={() => dispatch(DeleteProduct(product?.id))}
                      >
                        Delete
                      </Button>
                    </Stack>
                  </td>
                </tr>
              </>
            ))
          : ""}
      </table>
    </div>
  );
};

export default TableComp;
