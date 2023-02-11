import React from "react";
import Button from "@mui/material/Button";
function TextFieldComp(props) {
  return (
    <div>
      <Button
        type={props.type}
        fullWidth
        variant={props.variant}
        sx={{ mt: 3, mb: 2 }}
        href={props.href}
        color={props.color}
      >
        {props.text}
      </Button>
    </div>
  );
}

export default TextFieldComp;
