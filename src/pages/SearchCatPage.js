import React from "react";
import TextField from "@mui/material/TextField";
import ButtonComp from "../components/ButtonComp";
import { searchGetCat } from "../redux/actions/ProductApiAction";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import TableComp from "../components/TableComp";
const SearchCatPage = () => {
  const state = useSelector((state) => state.searchcategory);
  const dispatch = useDispatch();
  const [searchCat, setSearchCat] = useState("");

  const searchFunction = async (e) => {
    e.preventDefault();
    dispatch(searchGetCat(searchCat));
  };
  const ThItems = [
    "id",
    "image",
    "title",
    "description",
    "price",
    "category",
    "settings",
  ];
  return (
    <div>
      <form onSubmit={searchFunction} className="w-72 ml-auto mr-auto mt-5">
        <TextField
          value={searchCat}
          required
          fullWidth
          id="text"
          label="Search field"
          type="text"
          onChange={(e) => setSearchCat(e.target.value)}
        />
        <ButtonComp type="submit" variant="contained" text="Search" />
      </form>
      <TableComp th={ThItems} td={state.searchcategory} />
    </div>
  );
};

export default SearchCatPage;
