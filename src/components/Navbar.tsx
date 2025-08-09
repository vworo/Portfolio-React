"use client";

import React, { useState, MouseEvent } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Box,
  Button,
  Menu,
  MenuItem,
  IconButton,
} from "@mui/material";
import AdbIcon from "@mui/icons-material/Adb";
import MenuIcon from "@mui/icons-material/Menu";
import ThemeSwitcher from "@/components/theme-switcher";

const pages = ["About", "Projects", "Contact"];

export default function Navbar() {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="lg">
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          {/* LEFT */}
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <AdbIcon sx={{ display: "flex", mr: 2 }} />
            <Typography variant="h6">VW</Typography>
          </Box>

          {/* RIGHT - MOBILE */}
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            {/* HAMBURGER */}
            <IconButton
              size="large"
              aria-label="Navigation Menu"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            {/* DROPDOWN */}
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "center",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "center",
              }}
              keepMounted
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: "flex", md: "none" } }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography sx={{ textAlign: "center" }}>{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          {/* RIGHT - DESKTOP */}
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white" }}
              >
                {page}
              </Button>
            ))}
            <ThemeSwitcher />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
