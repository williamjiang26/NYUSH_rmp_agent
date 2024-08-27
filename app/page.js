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
  Stack,
} from "@mui/material";
import { useState } from "react";

import ProSidebar from "./components/Sidebar/page";
import Topbar from "./components/Topbar/page";

export default function Home() {
  return (
    <Box width="100vw" height="100vh">
      <Topbar />
      <Box display="flex" >
        <ProSidebar />
        <Box width="100vw" justifyContent="center" flexDirection='row' alignItems='center' m="20px" >
          Dashboard
        </Box>
      </Box>
    </Box>
  );
}
