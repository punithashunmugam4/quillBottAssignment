import React from "react";
import { useEffect, useState } from "react";
import { CircularProgress, Box, Typography } from "@mui/material";

const ProgressFooter = ({ progressValue, value, text, content }) => {
  const [progress, setprogress] = useState(0);
  useEffect(() => {
    setprogress(progressValue);
  }, [progressValue]);

  const style = {
    width: "280px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  };

  return (
    <Box sx={style}>
      <Box display="flex" justifyContent="center" alignItems="center">
        <CircularProgress
          size={"8rem"}
          color="success"
          variant="determinate"
          value={progress}
        />
        <Typography
          position="absolute"
          variant="h4"
          color={"#2e7d32"}
          fontWeight="700"
        >
          {value}
        </Typography>
        <Typography
          position="absolute"
          color={"#2e7d32"}
          paddingTop={"3rem"}
          fontWeight="600"
        >
          {text}
        </Typography>
      </Box>
      <p style={{ textAlign: "center" }}>{content}</p>
    </Box>
  );
};

export default ProgressFooter;
