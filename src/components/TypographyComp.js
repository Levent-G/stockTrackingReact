import React from "react";
import Typography from "@mui/material/Typography";
const TypographyComp = (props) => {
  return (
    <div>
      <Typography
        variant="h5"
        required
        autoFocus
        noWrap
        fullWidth
        component="div"
        sx={{
          display: {
            xs: "none",
            sm: "block",
          },
        }}
        color={props.color}
      >
        {props.text}
      </Typography>
    </div>
  );
};

export default TypographyComp;
