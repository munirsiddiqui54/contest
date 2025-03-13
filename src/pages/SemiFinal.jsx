import React, { useEffect, useState } from "react";
import { Grid, Paper, Typography, Box, Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useNavigate } from "react-router-dom"; // For navigation
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
  width: "270px", // Fixed width
  height: "80px", // Fixed height
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const SemiFinal = () => {
  const [participants, setParticipants] = useState([]);
  const navigate = useNavigate(); // Hook for navigation

  useEffect(() => {
    if (roundsData?.rounds?.["Semi-Final Stage"]) {
      setParticipants(roundsData.rounds["Semi-Final Stage"]);
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
      <img src="/icon.svg" alt="Logo" width="400" height="100" />
      {/* Title */}
      <Typography style={{ margin: 30 }} variant="h4" color="white">
        Semi Finale Round
      </Typography>

      {/* Participants Grid */}
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

      {/* Start Shuffle Button */}
      <Button
        variant="contained"
        sx={{
          mt: 4,
          backgroundColor: "#4285F4", // Google blue
          color: "#fff",
          fontSize: "16px",
          fontWeight: "bold",
          padding: "10px 20px",
          textTransform: "none",
          borderRadius: "8px",
          "&:hover": { backgroundColor: "#3367D6" },
        }}
        onClick={() => navigate("/start-3")}
      >
        Start Shuffle for Semi-Final Round
      </Button>
    </Box>
  );
};

export default SemiFinal;
