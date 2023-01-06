import React from "react";
import { Button } from "@mui/material";

const ButtonCompo = ({ text, colorType, rgbacolor }) => {
  return (
    <Button
      sx={{
        width: "360px",
        textTransform: "none",
        borderRadius: "20px",
        fontSize: "1.1rem",
        backgroundColor: `${rgbacolor}`,
      }}
      variant="contained"
      color={colorType && colorType}
    >
      {text}
    </Button>
  );
};

export default ButtonCompo;
