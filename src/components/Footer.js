import React from "react";
import ProgressFooter from "./ProgressFooter";

const Footer = () => {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <ProgressFooter
        progressValue={75}
        value={"75%"}
        text={"time saved"}
        content={"Average time savings per writing project."}
      />
      <ProgressFooter
        progressValue={100}
        value={"50+"}
        text={"million"}
        content={"Trusted by millions worldwide."}
      />
      <ProgressFooter
        progressValue={85}
        value={"85%"}
        text={"of students"}
        content={"Who reported their grades improved after using QuillBot."}
      />
    </div>
  );
};

export default Footer;
