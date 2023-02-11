import React from "react";
import Typography from "@mui/material/Typography";
const TypographyComp = (props) => {
  return (
    <div>
      <Typography
        value={props.value}
        variant={props.variant}
        required
        autoFocus
        noWrap
        fullWidth
        component={props.div}
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
