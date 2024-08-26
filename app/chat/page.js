"use client";
import { Box, Stack } from "@mui/material";
import Topbar from "../components/Topbar/page";
import Chatbot from "../components/chatbot/page";
import ProSidebar from "../components/Sidebar/page";
const Chat = () => {
  return (
    <Box width="100vw" height="100vh">
      <Topbar />
      <Box display='flex'>
        <ProSidebar />
        <Chatbot />  
      </Box>
    </Box>
  );
};
export default Chat