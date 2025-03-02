import React, { useState } from "react";
import { AppBar, Box, CssBaseline, Drawer, Toolbar } from "@mui/material";
import { Outlet } from "react-router-dom";
import { SideNav } from "../components/Sidenav/Sidenav";
import { Header } from "../components/Header";
import { useMediaQuery } from "@mui/material";

const drawerWidth = 340;

export const Layout = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const isMobile = useMediaQuery("(max-width:768px)");

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <Box sx={{ display: "flex", height: "100vh", overflowX: "hidden" }}>
      <CssBaseline />
      <AppBar position="fixed" sx={{ zIndex: 1201, height: "100px" }}>
        <Toolbar sx={{ minHeight: "100px", backgroundColor: "#94071D" }}>
          <Header onMenuClick={handleDrawerToggle} />
        </Toolbar>
      </AppBar>

      {/* Mobile Sidebar - Full-Screen Drawer */}
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        sx={{
          display: isMobile ? "block" : "none",
          zIndex: 1202,
          "& .MuiDrawer-paper": {
            width: "100vw", // Full screen width
            height: "100vh", // Full screen height
            boxSizing: "border-box",
          },
        }}
      >
        <SideNav isMobile={isMobile} onClose={handleDrawerToggle} />
      </Drawer>

      {/* Desktop Sidebar - Permanent Drawer */}
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          display: isMobile ? "none" : "block", // Hide on mobile
          "& .MuiDrawer-paper": { width: drawerWidth, boxSizing: "border-box", mt: "100px" },
        }}
      >
        <SideNav />
      </Drawer>

      {/* Main Content */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          padding: isMobile? '15px':'20px',
          overflowY: "auto",
          overflowX: "hidden",
          mt: "100px",
          width: isMobile ? "100%" : `calc(100% - ${drawerWidth}px)`,
        }}
      >
        <Outlet />
      </Box>
    </Box>
  );
};
