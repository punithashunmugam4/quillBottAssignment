import React from "react";

const Imageloop = ({ imageUrl }) => {
  return (
    <div>
      <img
        src={imageUrl}
        alt="para formatter"
        style={{
          paddingLeft: "0",
          paddingRight: "3em",
          width: "100%",
          height: "400px",
          marginLeft: "0",
        }}
      ></img>
    </div>
  );
};

export default Imageloop;
