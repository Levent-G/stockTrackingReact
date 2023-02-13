import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

const HomePage = () => {
  return (
    <div className="m-11">
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid xs={8}>
            <div className="h-screen bg-red-300">xs=8</div>
          </Grid>
          <Grid xs={4}>
            <div className="h-screen bg-green-300">xs=4</div>
          </Grid>
          <Grid xs={4}>
            <div className="h-screen bg-blue-300">xs=4</div>
          </Grid>
          <Grid xs={8}>
            <div className="h-screen bg-yellow-300">xs=8</div>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default HomePage;
