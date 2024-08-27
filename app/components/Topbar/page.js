"use client";
import {
  AppBar,
  Box,
  TextField,
  Button,
  Dialog,
  DialogActions,
  DialogTitle,
  DialogContent,
  DialogContentText,
  Toolbar,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { useUser } from "@clerk/nextjs";
import { SignedOut, UserButton, SignedIn } from "@clerk/nextjs";
const Topbar = () => {
  return (
    <AppBar position="static">
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          backgroundColor: "#ffffff",
          color: "#56068B",
        }}
      >
        <Box>
          <Button color="inherit" href="/">
            <Typography variant="h6">NYUSH Rate My Professor</Typography>
          </Button>
        </Box>
        <Box
          sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}
        >
          <SignedOut>
            <Button
              color="inherit"
              href="/sign-in"
              sx={{
                backgroundColor: "transparent", // Default background color
                "&:hover": {
                  backgroundColor: "#56068B",
                  color: "#ffffff" // Hover background color
                },
                transition: "background-color 0.3s ease", // Smooth transition
              }}
            >
              Login
            </Button>
            <Button
              color="inherit"
              href="/sign-up"
              sx={{
                backgroundColor: "transparent", // Default background color
                "&:hover": {
                  backgroundColor: "#56068B", // Hover background color
                  color: "#ffffff"
                },
                transition: "background-color 0.3s ease", // Smooth transition
              }}
            >
              Sign Up
            </Button>
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </Box>
      </Toolbar>
    </AppBar>
  );
};
export default Topbar;
