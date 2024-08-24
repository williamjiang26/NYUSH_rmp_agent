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
} from "@mui/material";
import { useState } from "react";
import { useUser } from "@clerk/nextjs";

import Chatbot from "./chatbot/page";

export default function Home() {
 const [prof, setProf] = useState({
  professor: "",
  stars: "",
  subject: "",
  review: "",
 });
 const [dialogOpen, setDialogOpen] = useState(false);

 const handleOpen = () => setDialogOpen(true);
 const handleClose = () => setDialogOpen(false);

 const saveProfessor = () => {
  console.log(prof);

  // input: url
  // output: ?
  // storage: professor data
 };

 return (
  <Box width="100vw" height="100vh">
   <AppBar position="static">
    <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
     <Box>
      <Button color="inherit" href="/">
       <Typography variant="h6">NYUSH Rate My Professor</Typography>
      </Button>
     </Box>
     <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
      <Box>
       <Button
        variant="contained"
        color="primary"
        fullWidth
        onClick={handleOpen}
       >
        Add Professor
       </Button>
       <Dialog open={dialogOpen} onClose={handleClose}>
        <DialogTitle>Add Professor</DialogTitle>
        <DialogContent>
         <DialogContentText>
          Please enter a review for your professor:
         </DialogContentText>
         <TextField
          autoFocus
          margin="dense"
          label="Professor Name"
          type="text"
          fullWidth
          value={prof.professor}
          onChange={(e) => setProf({ ...prof, professor: e.target.value })}
         />

         <TextField
          autoFocus
          margin="dense"
          label="Subject"
          type="text"
          fullWidth
          value={prof.subject}
          onChange={(e) => setProf({ ...prof, subject: e.target.value })}
         />

         <TextField
          autoFocus
          margin="dense"
          label="Stars"
          type="text"
          fullWidth
          value={prof.stars}
          onChange={(e) => setProf({ ...prof, stars: e.target.value })}
         />

         <TextField
          autoFocus
          margin="dense"
          label="Reviews"
          type="text"
          fullWidth
          value={prof.review}
          onChange={(e) => setProf({ ...prof, review: e.target.value })}
         />
        </DialogContent>
        <DialogActions>
         <Button onClick={handleClose}>Cancel</Button>
         <Button onClick={saveProfessor} color="secondary">
          Save
         </Button>
        </DialogActions>
       </Dialog>
      </Box>
      {/* <SignedOut>
                <Button color='inherit' href='/sign-in'>Login</Button>
                <Button color='inherit' href='/sign-up'>Sign Up</Button>
            </SignedOut>
            <SignedIn>
            <Box>
                <Button color='inherit' href='/generate'><AutoAwesomeIcon fontSize="medium"/></Button>
                <Button color='inherit' href='/flashcards'><FolderIcon fontSize="medium"/></Button>  
            </Box>
            <UserButton/>
            </SignedIn> */}
     </Box>
    </Toolbar>
   </AppBar>
   <Chatbot />
  </Box>
 );
}
