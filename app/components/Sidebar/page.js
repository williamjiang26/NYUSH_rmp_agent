import { Box, Button } from "@mui/material";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { useState } from "react";
const ProSidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <Box sx={{ height: "100%", minHeight: "400px" }}>
      <Sidebar collapsed={collapsed} collapsedWidth="100px">
        <Button className="sb-button" onClick={() => setCollapsed(!collapsed)}>
        Collapse
      </Button>
        <Menu>
          <MenuItem href="/chat">Chat</MenuItem>
        </Menu>
      </Sidebar>
    </Box>
  );
};

export default ProSidebar;
