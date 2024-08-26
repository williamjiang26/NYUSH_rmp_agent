import { Box, Button } from "@mui/material";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { useState } from "react";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";

const ProSidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <Box sx={{ height: "100%", minHeight: "400px" }}>
      <Sidebar collapsed={collapsed} collapsedWidth="80px" color="primary">
        <Button className="sb-button" onClick={() => setCollapsed(!collapsed)}>
          {collapsed ? <KeyboardArrowRightIcon /> : <KeyboardArrowLeftIcon />}
        </Button>
        <Menu>
          <MenuItem href="/chat">Chat</MenuItem>
        </Menu>
      </Sidebar>
    </Box>
  );
};

export default ProSidebar;
