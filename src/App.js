import "./App.css";
import React, { useState, useEffect } from "react";
import OverView from "./components/OverView";
import { Typography, Box } from "@mui/material";
import Footer from "./components/Footer";
import CardMain from "./components/CardMain";
import { freeFeatures } from "./freeFeatures";
import { premiumFeatures } from "./premiumFeatures";

const App = () => {
  const [view, setView] = useState("row");
  useEffect(() => {
    if (window.screen.width <= 680) {
      setView("column");
    }
  }, []);

  return (
    <div className="App">
      <OverView view={view} />
      <Typography variant="body1" textAlign={"center"} fontSize="2rem">
        Experience the full power of QuillBot
      </Typography>
      <Box
        display="flex"
        flexDirection={view}
        margin={"auto"}
        justifyContent="center"
        paddingTop={"2.5rem"}
      >
        <CardMain free={true} content={freeFeatures} headerColor={"#2e7d32"} />
        <CardMain
          free={false}
          content={premiumFeatures}
          headerColor={"rgba(230, 152, 8, 1)"}
        />
      </Box>
      <Box
        display={"flex"}
        flexDirection="column"
        justifyContent="center"
        alignItems={"center"}
      >
        <Typography variant="h5" paddingTop={"2em"} paddingBottom={"0.6em"}>
          Write better, faster, and clearer instantly
        </Typography>
        <Typography width={"30%"} paddingBottom={"2em"}>
          QuillBot is trusted by students, professional writers, and business
          people who want to write more effectively.
        </Typography>
      </Box>
      <Footer />
    </div>
  );
};

export default App;
