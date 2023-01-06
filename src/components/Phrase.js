import LinearProgress from "@mui/material/LinearProgress";
import React, { useState, useEffect } from "react";

const Phrase = ({ item, imageUrl, setImageUrl, index, setVal }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          return 0;
        }
        return oldProgress + 20;
      });
    }, 500);

    return () => {
      clearInterval(timer);
    };
  }, []);
  // console.log(item);
  const { title, description, image } = item;
  return (
    <div
      style={{ cursor: "pointer", width: "450px", margin: "1rem" }}
      onClick={() => {
        setImageUrl(image);
        setVal(index + 1);
        setProgress(0);
      }}
    >
      <h3 style={{ margin: "0" }}>{title}</h3>
      <p style={{ margin: "0", fontSize: "1.1rem" }}>{description}</p>
      <LinearProgress
        variant="determinate"
        value={image === imageUrl ? progress : 0}
      />
    </div>
  );
};

export default Phrase;
