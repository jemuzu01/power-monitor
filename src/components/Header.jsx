import React from "react";
import { Box, Typography, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useMediaQuery } from "@mui/material";
import logo from "../assets/img/tup-logo.png";

export const Header = ({ onMenuClick }) => {
  const isMobile = useMediaQuery("(max-width:768px)"); // Check screen size

  return (
    <Box
      sx={{
        height: "100px",
        width: "100%",
        backgroundColor: "#94071D",
        display: "flex",
        alignItems: "center",
        padding: "30px",
        boxSizing: "border-box",
        gap: "20px",
      }}
    >
      {/* Show menu button on mobile */}
      {isMobile && (
        <IconButton color="inherit" onClick={onMenuClick}>
          <MenuIcon sx={{ color: "#FFF" }} />
        </IconButton>
      )}

      {/* Logo remains visible always */}
      <img style={{ height: "70px", width: "70px" }} src={logo} alt="TUP logo" />

      {/* Hide text on mobile */}
      {!isMobile && (
        <Typography sx={{ color: "#FFF" }}>
          TECHNOLOGICAL UNIVERSITY OF THE PHILIPPINES VISAYAS
        </Typography>
      )}
    </Box>
  );
};
