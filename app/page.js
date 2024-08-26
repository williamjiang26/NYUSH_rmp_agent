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
      <Stack>
      <ProSidebar/>
      </Stack>
      
    </Box>
  );
}
