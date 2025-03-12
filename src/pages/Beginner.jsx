import React, { useEffect, useState } from "react";
import { Grid, Paper, Typography, Box, Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import roundsData from "../data/rounds.json"; // Import JSON directly

// Google Theme Colors
const googleColors = ["#4285F4", "#EA4335", "#FBBC05", "#34A853"];

// Styled Card for Participants
const ParticipantCard = styled(Paper)(({ borderColor }) => ({
  backgroundColor: "#000", // Black background for each card
  color: "#fff",
  textAlign: "center",
  fontWeight: "bold",
  borderRadius: "8px",
  boxShadow: "0px 4px 8px rgba(255, 255, 255, 0.2)", // Soft white glow effect
  border: `3px solid ${borderColor}`, // Border color from Google colors
  width: "140px", // Fixed width
  height: "80px", // Fixed height
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const Beginner = () => {
  const [participants, setParticipants] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (roundsData?.rounds?.["Beginner Stage"]) {
      setParticipants(roundsData.rounds["Beginner Stage"]);
    }
  }, []);

  return (
    <Box
      sx={{
        backgroundColor: "#000",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: 2,
      }}
    >
      {/* Title */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around", // Space between the logo & title
          alignItems: "center", // Align items vertically
          width: "100%", // Ensures full width
          mb: 3, // Adds bottom margin
        }}
      >
        {/* Title */}
        <Typography variant="h6" color="white">
          Selected Participants
        </Typography>
        {/* Logo */}
        <img src="/icon.svg" alt="Logo" width="200" height="30" />
      </Box>

      <Grid container spacing={1} justifyContent="center">
        {participants.map((name, index) => (
          <Grid item key={index}>
            <ParticipantCard
              borderColor={googleColors[index % googleColors.length]}
            >
              <Typography variant="body1" color="white">
                {name}
              </Typography>
            </ParticipantCard>
          </Grid>
        ))}
      </Grid>

      {/* Button to Navigate to Pairing Page */}
      <Button
        variant="contained"
        sx={{
          backgroundColor: "#4285F4",
          color: "#fff",
          fontSize: "16px",
          fontWeight: "bold",
          marginTop: "24px",
          padding: "10px 24px",
          borderRadius: "8px",
          "&:hover": {
            backgroundColor: "#357AE8",
          },
        }}
        onClick={() => navigate("/start-1")}
      >
        Start Shuffle!
      </Button>
    </Box>
  );
};

export default Beginner;
