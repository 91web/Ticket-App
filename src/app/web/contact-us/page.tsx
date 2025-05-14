import React from "react";
import { Container, Box, Typography, TextField, Button } from "@mui/material";

const ContactUs = () => {
  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          mt: 4,
          display: "flex",
          flexDirection: "column",
          gap: 2,
        }}
      >
        <Typography variant="h4" component="h1" gutterBottom>
          Contact Us
        </Typography>
        <TextField label="Name" variant="outlined" fullWidth />
        <TextField label="Email" variant="outlined" fullWidth />
        <TextField
          label="Message"
          variant="outlined"
          fullWidth
          multiline
          rows={4}
        />
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#FDCB6D",
            color: "#000",
            "&:hover": { backgroundColor: "#5442dc", color: "#fff" },
            textTransform: "none",
            my: 2,
            height: 30,
          }}
        >
          Send Message
        </Button>
      </Box>
    </Container>
  );
};

export default ContactUs;
