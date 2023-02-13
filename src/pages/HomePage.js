import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import PastSalesChart from "../pages/PastSalesChart";
import CategoryPage from "../pages/CategoryPage";
import SearchCatPage from "../pages/SearchCatPage";

const HomePage = () => {
  return (
    <div className="m-16">
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid xs={8}>
            <div className="p-12 mt-24 h-60 mr-3 bg-white shadow-lg shadow-blue-800/50 ">
              <CategoryPage />
            </div>
          </Grid>

          <Grid xs={4}>
            <div className="p-12 mt-24 h-60 bg-white shadow-lg shadow-blue-800/50">
              <Typography variant="h5" gutterBottom className="text-sky-700">
                Recent Deposits
              </Typography>{" "}
              <Typography variant="h5" gutterBottom>
                $3,024.00
              </Typography>
              <Typography variant="h7" gutterBottom className="text-gray-500">
                on 15 March, 2019
              </Typography>
              <br />
              <Button size="small" variant="contained" className="  mt-3">
                View balance
              </Button>
            </div>
          </Grid>
          <Grid xs={8}>
            <div className="p-12  mt-24 h-full w-screen  bg-white shadow-lg shadow-blue-800/50">
              <PastSalesChart className="text-xs" />
            </div>
          </Grid>

          <Grid xs={8}>
            <div className="p-12 mt-36 h-60 mr-3 bg-white shadow-lg shadow-blue-800/50 ">
              <CategoryPage />
            </div>
          </Grid>

          <Grid xs={4}>
            <div className="p-12 mt-36 h-60 bg-white shadow-lg shadow-blue-800/50">
              <Typography variant="h5" gutterBottom className="text-sky-700">
                Recent Deposits
              </Typography>{" "}
              <Typography variant="h5" gutterBottom>
                $3,024.00
              </Typography>
              <Typography variant="h7" gutterBottom className="text-gray-500">
                on 15 March, 2019
              </Typography>
              <br />
              <Button size="small" variant="contained" className="  mt-3">
                View balance
              </Button>
            </div>
          </Grid>

          <Grid xs={8}>
            <div className="p-12  w-screen mt-24  bg-white shadow-lg shadow-blue-800/50">
              <SearchCatPage />
            </div>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default HomePage;
