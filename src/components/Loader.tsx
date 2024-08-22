// Loader.js
import React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";

const CenteredBox = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "50vh",
  width: "100%",
}));

const Loader = () => {
  return (
    <CenteredBox>
      <CircularProgress size={30} thickness={5} sx={{ color: "#757575" }} />
    </CenteredBox>
  );
};

export default Loader;
