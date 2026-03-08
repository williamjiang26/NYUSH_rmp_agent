"use client";
import {
  Box,
  Stack,
  TextField,
  Button,
  Typography,
  Paper,
} from "@mui/material";
import { useState } from "react";
import ReactMarkdown from "react-markdown";
import AddProfessor from "../addProfessor/page";
import remarkGfm from "remark-gfm";
//
import rehypeRaw from "rehype-raw";

export default function Chatbot() {
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content:
        "Hi! I am the NYUSH Rate My Professor assistant. How may I help you?",
    },
  ]);
  const [message, setMessage] = useState("");

  const sendMessage = async () => {
    if (!message.trim()) return;
    setMessages((messages) => [
      ...messages,
      { role: "user", content: message },
      { role: "assistant", content: "" },
    ]);
    // find me a professor whos good at explaining complex concepts
    const response = fetch("/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify([...messages, { role: "user", content: message }]),
    }).then(async (res) => {
      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let result = "";
      return reader.read().then(function processText({ done, value }) {
        if (done) return result;
        const text = decoder.decode(value || new Uint8Array(), {
          stream: true,
        });
        setMessages((messages) => {
          let lastMessage = messages[messages.length - 1];
          let otherMessages = messages.slice(0, messages.length - 1);
          return [
            ...otherMessages,
            { ...lastMessage, content: lastMessage.content + text },
          ];
        });
        return reader.read().then(processText);
      });
    });
    setMessage("");
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      p={2}
      height="100%"
    >
      <Paper
        elevation={3}
        display="flex"
        sx={{
          width: "90%",
          maxWidth: "1000px",
          height: "90%",
          borderRadius: "16px",
          flexDirection: "column",
          p: 3,
          boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Typography variant="h5" fontWeight="bold" textAlign="center" mb={2}>
          Chat with Assistant
        </Typography>
        <Box
          sx={{
            height: "88%",
            overflowY: "auto",
            flexDirection: "column",
            display: "flex",
            gap: "10px",
            p: 2,
            scrollBehavior: "smooth",
          }}
        >
          {messages.map((message, index) => (
            <Box
              key={index}
              alignSelf={
                message.role === "assistant" ? "flex-start" : "flex-end"
              }
              bgcolor={message.role === "assistant" ? "#f5f5f5" : "#56068B"}
              color={message.role === "assistant" ? "black" : "white"}
              borderRadius={2}
              p={2}
              maxWidth="90%"
              sx={{
                boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.1)",
                "& p": { margin: 0 },
              }}
            >
              {message.role === "assistant" ? (
                <ReactMarkdown
                  remarkPlugins={[remarkGfm]}
                  rehypePlugins={[rehypeRaw]}
                >
                  {message.content}
                </ReactMarkdown>
              ) : (
                message.content
              )}
            </Box>
          ))}
        </Box>
        <Stack
          display="flex"
          direction="row"
          spacing={2}
          alignItems="center"
          mb={2}
        >
          <TextField
            label="Type a message..."
            fullWidth
            variant="outlined"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            sx={{ borderRadius: "8px" }}
          />
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#56068B",
              color: "white",
              borderRadius: "8px",
              px: 3,
              //
            }}
            onClick={sendMessage}
          >
            Send
          </Button>
          <AddProfessor />
        </Stack>
      </Paper>
    </Box>
  );
}
