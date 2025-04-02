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
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            margin: "5px",
          }}
        >
          <SignedOut>
            <Box sx={{ display: "flex", gap: "15px" }}>
              <Button
                variant="contained"
                href="/sign-in"
                sx={{
                  backgroundColor: "#6A0DAD",
                  color: "#ffffff",
                  fontWeight: "bold",
                  textTransform: "none",
                  padding: "10px 20px",
                  borderRadius: "8px",
                  boxShadow: "0px 4px 10px rgba(106, 13, 173, 0.3)",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    backgroundColor: "#56068B",
                    boxShadow: "0px 6px 15px rgba(86, 6, 139, 0.4)",
                  },
                  "&:active": {
                    transform: "scale(0.96)",
                  },
                }}
              >
                Log In
              </Button>

              <Button
                variant="contained"
                href="/sign-up"
                sx={{
                  backgroundColor: "#6A0DAD",
                  color: "#ffffff",
                  fontWeight: "bold",
                  textTransform: "none",
                  padding: "10px 20px",
                  borderRadius: "8px",
                  boxShadow: "0px 4px 10px rgba(106, 13, 173, 0.3)",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    backgroundColor: "#56068B",
                    boxShadow: "0px 6px 15px rgba(86, 6, 139, 0.4)",
                  },
                  "&:active": {
                    transform: "scale(0.96)",
                  },
                }}
              >
                Sign Up
              </Button>
            </Box>
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
