"use client";
import { Box, IconButton } from "@mui/material";
import { useRouter } from "next/navigation";
import Topbar from "../components/Topbar/page";
import Chatbot from "../components/chatbot/page";

const Chat = () => {
  const router = useRouter();

  return (
    <Box width="100vw" height="100vh">
      <Topbar />
      <Box display="flex">
        <Box
          width="100vw"
          justifyContent="center"
          flexDirection="row"
          alignItems="center"
        >
          <Chatbot />
        </Box>
      </Box>

      {/* Floating Mascot Button (Navigates to Home) */}
      <IconButton
        onClick={() => router.push("/")}
        sx={{
          position: "fixed",
          bottom: 20,
          right: 20,
          backgroundColor: "transparent", // No background to let the image stand out
          width: 64,
          height: 64,
          borderRadius: "50%",
          boxShadow: "0px 4px 10px rgba(106, 13, 173, 0.3)",
          "&:hover": {
            boxShadow: "0px 6px 15px rgba(86, 6, 139, 0.4)",
          },
          "&:active": {
            transform: "scale(0.95)",
          },
        }}
      >
        <img
          src="https://shanghai.nyu.edu/sites/default/files/media/03.gif"
          alt="Mascot"
          style={{
            width: "100%",
            height: "100%",
            borderRadius: "50%", // Optional: if you want a round shape
          }}
        />
      </IconButton>
    </Box>
  );
};

export default Chat;
