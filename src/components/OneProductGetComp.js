import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getOneProduct } from "../redux/actions/ProductApiAction";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

const OneProductGetComp = () => {
  const { productId } = useParams();

  const state = useSelector((state) => state.getoneproduct);
  const dispatch = useDispatch();

  useEffect(() => {
    getonePr();
  });
  function getonePr() {
    dispatch(getOneProduct(productId));
  }

  console.log(state.getoneproduct, "dflkgjsldkgjsdlgjsdlk");

  return (
    <div>
      <table className="w-full   ">
        <tr>
          <th className="border-solid border-gray-500 p-8">id</th>
          <th className="border-solid border-gray-500 p-8">User id</th>
          <th className="border-solid border-gray-500 p-8">Date</th>
          <th className="border-solid border-gray-500 p-8">productId</th>
          <th className="border-solid border-gray-500 p-8">quantity</th>
        </tr>

        <tr>
          <td className="border-solid border-gray-500 p-8">
            {state.getoneproduct?.id}
          </td>
          <td className="border-solid border-gray-500 p-8">
            <img
              src={state.getoneproduct?.image}
              alt="sad"
              className="w-32 h-16"
            />
          </td>
          <td className="border-solid border-gray-500 p-8">
            {state.getoneproduct?.title}
          </td>

          <td className="border-solid border-gray-500 p-8">
            {state.getoneproduct?.description}
          </td>
          <td className="border-solid border-gray-500 p-8">
            {state.getoneproduct?.price}
          </td>

          <td className="border-solid border-gray-500 p-8">
            {state.getoneproduct?.category}
          </td>
          <td className="border-solid border-gray-500 p-8">
            <Stack spacing={2} direction="row">
              <Button size="small" variant="contained" color="success">
                Add
              </Button>
              <Button size="small" variant="contained">
                Edit
              </Button>
              <Button size="small" variant="contained" color="error">
                Delete
              </Button>
            </Stack>
          </td>
        </tr>
      </table>
    </div>
  );
};

export default OneProductGetComp;
