"use client";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogTitle,
  DialogContent,
  DialogContentText,
  TextField,
  MenuItem,
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
    link: "",
  });
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleOpen = () => setDialogOpen(true);
  const handleClose = () => setDialogOpen(false);
  const handleChange = (e) =>
    setProf({ ...prof, [e.target.name]: e.target.value });

  const saveProfessor = () => {
    console.log(prof);
    handleClose();
  };

  return (
    <Box>
      <Dialog open={dialogOpen} onClose={handleClose} maxWidth="sm" fullWidth>
        <DialogTitle sx={{ textAlign: "center", fontWeight: "bold" }}>
          Add Professor
        </DialogTitle>
        <DialogContent>
          <DialogContentText textAlign="center" mb={2}>
            Please enter details about your professor:
          </DialogContentText>
          <TextField
            label="Professor Name"
            name="professor"
            fullWidth
            variant="outlined"
            value={prof.professor}
            onChange={handleChange}
            sx={{ mb: 2 }}
          />
          <TextField
            label="Subject"
            name="subject"
            fullWidth
            variant="outlined"
            value={prof.subject}
            onChange={handleChange}
            sx={{ mb: 2 }}
          />
          <TextField
            select
            label="Stars"
            name="stars"
            fullWidth
            variant="outlined"
            value={prof.stars}
            onChange={handleChange}
            sx={{ mb: 2 }}
          >
            {[1, 2, 3, 4, 5].map((star) => (
              <MenuItem key={star} value={star}>{`${star} Stars`}</MenuItem>
            ))}
          </TextField>
          <TextField
            label="Review"
            name="review"
            fullWidth
            variant="outlined"
            multiline
            rows={3}
            value={prof.review}
            onChange={handleChange}
            sx={{ mb: 2 }}
          />
          <TextField
            label="Rate My Professor Link"
            name="link"
            fullWidth
            variant="outlined"
            value={prof.link}
            onChange={handleChange}
            sx={{ mb: 2 }}
          />
        </DialogContent>
        <DialogActions sx={{ justifyContent: "center" }}>
          <Button
            onClick={handleClose}
            variant="outlined"
            sx={{ borderRadius: "8px" }}
          >
            Cancel
          </Button>
          <Button
            onClick={saveProfessor}
            variant="contained"
            sx={{
              backgroundColor: "#56068B",
              color: "white",
              borderRadius: "8px",
            }}
          >
            Save
          </Button>
        </DialogActions>
      </Dialog>
      <Button
        variant="contained"
        onClick={handleOpen}
        sx={{
          backgroundColor: "#56068B",
          color: "white",
          borderRadius: "8px",
          px: 3,
          textTransform: "none",
        }}
      >
        ADD
      </Button>
    </Box>
  );
};

export default AddProfessor;
