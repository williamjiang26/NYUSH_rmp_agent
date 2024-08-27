'use client'
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
const AddProfessor = () => {
  const { isLoaded, isSignedIn, user } = useUser();
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
    <Box>
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
          <TextField
            autoFocus
            margin="dense"
            label="Enter a Rate My Professor Link"
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
      <Button
        variant="contained"
        color="primary"
        fullWidth
        onClick={handleOpen}
        sx={{
          backgroundColor: "#56068B",
        }}
      >
        Add Professor
      </Button>
    </Box>
  );
};
export default AddProfessor;
