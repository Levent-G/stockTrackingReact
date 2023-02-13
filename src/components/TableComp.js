import React from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

const TableComp = (props) => {
  return (
    <div className="m-5 bg-slate-100 ">
      <table className="w-full   ">
        <tr>
          {props.th.map((th, index) => (
            <th className="border-solid border-gray-500 p-8" key={index}>
              {th}
            </th>
          ))}
        </tr>

        {props.td
          ? props.td.map((td) => (
              <>
                <tr>
                  <td className="border-solid border-gray-500 p-8">{td?.id}</td>
                  <td className="border-solid border-gray-500 p-8">
                    <img src={td?.image} alt="sad" className="w-32 h-16" />
                  </td>
                  <td className="border-solid border-gray-500 p-8 bg-blue-200 ">
                    {td?.title}
                  </td>

                  <td className="border-solid border-gray-500 p-8">
                    {td?.description}
                  </td>
                  <td className="border-solid border-gray-500 p-8 bg-green-200 ">
                    {td?.price}
                  </td>

                  <td className="border-solid border-gray-500 p-8">
                    {td?.category}
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

export default TableComp;
