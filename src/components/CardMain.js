import React from "react";
import ClearIcon from "@mui/icons-material/Clear";
import CheckIcon from "@mui/icons-material/Check";
import DiamondIcon from "@mui/icons-material/Diamond";

import {
  Table,
  TableBody,
  TableHead,
  TableCell,
  TableRow,
} from "@mui/material";
import ButtonCompo from "./ButtonCompo";

const CardMain = ({ free, headerColor, bottemText, content }) => {
  return (
    <div
      style={{
        width: "428px",
        boxShadow: "1px 1px 20px #ccc",
        borderRadius: "10px",
        margin: "1.3em",
      }}
    >
      <Table aria-label="customized table">
        <TableHead>
          <TableRow>
            <TableCell
              sx={{
                display: "flex",
                height: "35px",
                borderTopLeftRadius: "10px",
                borderTopRightRadius: "10px",
                backgroundColor: `${headerColor}`,
                color: "white",
                fontSize: "1.3em",
                fontWeight: "700",
                letterSpacing: "2px",
                paddingLeft: "1.5em",
              }}
            >
              {!free && (
                <>
                  <DiamondIcon
                    sx={{
                      fontSize: "2em",
                    }}
                  ></DiamondIcon>
                  &nbsp;
                </>
              )}
              <p
                style={{
                  margin: "0",
                  marginTop: "5px",
                  letterSpacing: "2px",
                }}
              >
                {free ? "FREE" : "PREMIUM"}
              </p>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell sx={{ paddingLeft: "2em" }}>
              <ButtonCompo
                text={free ? "Sign Up - It's Free" : "Upgrade to Premium"}
                colorType={"success"}
                rgbacolor={!free ? "rgba(230, 152, 8, 1)" : null}
              />
            </TableCell>
          </TableRow>
          {content.map((feature, index) => (
            <TableRow key={index}>
              <TableCell
                sx={{
                  paddingLeft: "1.5em",
                  height: "25px",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                {feature.availability ? (
                  <CheckIcon sx={{ color: `${headerColor}` }}></CheckIcon>
                ) : (
                  <ClearIcon sx={{ color: "red" }}></ClearIcon>
                )}
                &nbsp;&nbsp;
                <p
                  style={{
                    margin: "0",
                    marginTop: "5px",
                    fontSize: "1em",
                  }}
                >
                  {feature.detail}
                </p>
              </TableCell>
            </TableRow>
          ))}
          <TableRow>
            <TableCell
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#ccc",
                borderBottomLeftRadius: "10px",
                borderBottomRightRadius: "10px",
              }}
            >
              <p
                style={{
                  margin: "0",
                  marginTop: "5px",
                  fontSize: "1em",
                  textAlign: "center",
                  fontWeight: "550",
                }}
              >
                {free
                  ? "No Credit Card Required"
                  : "3-Day Money-Back Guarantee"}
              </p>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
};

export default CardMain;
