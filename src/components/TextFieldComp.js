import React from "react";
import TextField from "@mui/material/TextField";
function TextFieldComp(props) {
  return (
    <div>
      <TextField
        margin="normal"
        required
        fullWidth
        id={props.id}
        label={props.label}
        name={props.name}
        type={props.type}
        autoComplete={props.autoComplete}
        value={props.value}
        autoFocus
      />
    </div>
  );
}

export default TextFieldComp;
