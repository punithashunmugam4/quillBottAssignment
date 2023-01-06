import React from "react";

const Imageloop = ({ imageUrl }) => {
  return (
    <div className="image-container">
      <img className="imagelooping" src={imageUrl} alt="para formatter"></img>
    </div>
  );
};

export default Imageloop;
