import React from "react";
import { Box, Typography } from "@mui/material";
import Imageloop from "./Imageloop";
import Phrase from "./Phrase";
import { useState, useEffect } from "react";
import { content } from "../content";
import ButtonCompo from "./ButtonCompo";

const OverView = ({ view }) => {
  const [imageUrl, setImageUrl] = useState(content[0].image);
  const [val, setVal] = useState(1);

  useEffect(() => {
    if (val > 3) setVal(0);
    const changing = setInterval(() => {
      setImageUrl(content[val].image);
      setVal(val + 1);
    }, 3000);
    return () => clearInterval(changing);
  }, [imageUrl, val]);
  return (
    <div>
      <Box
        display={"flex"}
        justifyContent="center"
        alignItems={"center"}
        marginTop="2%"
        flexDirection={"column"}
      >
        <Typography fontSize={"2em"} padding="1em">
          Save time and write with confidence
        </Typography>
        <ButtonCompo
          text={"Upgrade to QuillBot Premium"}
          colorType={"success"}
        />
      </Box>
      <Box
        display={"flex"}
        flexDirection={view}
        justifyContent="center"
        alignItems={"center"}
        margin="2em"
      >
        <Imageloop imageUrl={imageUrl} />
        <Box width={"540px"}>
          {content.map((item, index) => (
            <Phrase
              key={index}
              item={item}
              imageUrl={imageUrl}
              setImageUrl={setImageUrl}
              index={index}
              setVal={setVal}
            />
          ))}
        </Box>
      </Box>
    </div>
  );
};

export default OverView;
