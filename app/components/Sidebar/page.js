"use client";
import { Box, Button } from "@mui/material";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { useState } from "react";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import HeadsetMicIcon from "@mui/icons-material/HeadsetMic";

const ProSidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <Box sx={{ height: "100vh", backgroundColor: "#" }}>
      <Sidebar collapsed={collapsed} collapsedWidth="80px" width="150px" backgroundColor= "#1876D2">
        <Menu
          menuItemStyles={{
            button: ({active, disabled }) => {
              // only apply styles on first level elements of the tree
                return {
                  color: disabled ? "#1876D2" : "#ffffff",
                  backgroundColor: active ? "#1876D2" : undefined,
                };
            },
          }}
        >
          <MenuItem
            onClick={() => setCollapsed(!collapsed)}
            icon={
              collapsed ? (
                <KeyboardArrowRightIcon fontSize="large" />
              ) : (
                <KeyboardArrowLeftIcon fontSize="large" />
              )
            }
          >
            Home
          </MenuItem>
          <MenuItem href="/chat" icon={<HeadsetMicIcon />}>
            Chat
          </MenuItem>
        </Menu>
      </Sidebar>
    </Box>
  );
};

export default ProSidebar;
