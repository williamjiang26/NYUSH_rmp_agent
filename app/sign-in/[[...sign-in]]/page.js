import React from "react";
import {
 Container,
 Box,
 Typography,
 AppBar,
 Toolbar,
 Button,
} from "@mui/material";
import Link from "next/link";
import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
 return (
  <Box height="100vh">
   <AppBar position="static" sx={{ backgroundColor: "#" }}>
    <Toolbar>
     <Typography variant="h6" sx={{ flexGrow: 1 }}>
      <Link href="/" passHref>
       NYUSH Rate My Professor
      </Link>
     </Typography>
     <Button color="inherit">
      <Link href="/sign-in" passHref>
       Login
      </Link>
     </Button>
     <Button color="inherit">
      <Link href="/sign-up" passHref>
       SignUp
      </Link>
     </Button>
    </Toolbar>
   </AppBar>
   <Box
    display="flex"
    flexDirection="column"
    justifyContent="center"
    alignItems="center"
    sx={{ textAlign: "center", my: 4 }}
   >
    <Typography variant="h4" component="h1" gutterBottom>
     Sign In
    </Typography>
    <SignIn />
   </Box>
  </Box>
 );
}