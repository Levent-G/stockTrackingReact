import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { getPastSales } from "../redux/actions/ProductApiAction";
import { useEffect } from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
const PastSalesChart = () => {
  const state = useSelector((state) => state.pastsales);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPastSales());
  }, [dispatch]);
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

        {state.pastsales
          ? state.pastsales.map((pastsales) => (
              <>
                <tr>
                  <td className="border-solid border-gray-500 p-8">
                    {pastsales?.id}
                  </td>
                  <td className="border-solid border-gray-500 p-8">
                    {pastsales?.userId}
                  </td>
                  <td className="border-solid border-gray-500 p-8">
                    {pastsales?.date}
                  </td>

                  <td className="border-solid border-gray-500 p-8">
                    {pastsales?.products[0].productId}
                  </td>
                  <td className="border-solid border-gray-500 p-8">
                    {pastsales?.products[0].quantity}
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
              </>
            ))
          : ""}
      </table>
    </div>
  );
};

export default PastSalesChart;
