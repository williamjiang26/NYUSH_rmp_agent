"use client";
import {
  Box,
  Typography,
  IconButton,
} from "@mui/material";
import { useRouter } from "next/navigation";
import Topbar from "./components/Topbar/page";
import ChatIcon from "@mui/icons-material/SmartToy"; // Mascot Icon

export default function Home() {
  const router = useRouter();

  return (
    <Box width="100vw" height="100vh" display="flex" flexDirection="column">
      {/* Navbar / Topbar */}
      <Topbar />

      {/* Hero Section */}
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        textAlign="center"
        flexGrow={1}
        px={3}
      >
        <Typography variant="h2" fontWeight="bold" color="#6A0DAD" mb={2}>
          Rate My NYU Shanghai Professor
        </Typography>

        <Typography variant="h5" color="gray" maxWidth="600px" mb={4}>
          Ask the chatbot for professor recommendations tailored to your
          preferences. You can query based on workload, group projects, and
          more.
        </Typography>
      </Box>

      {/* Floating Mascot Button */}
      <IconButton
        onClick={() => router.push("/chat")}
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
}
