import React from "react";
import { Box } from "@mui/material";
import { keyframes } from "@emotion/react";

// Define the flipping animation
const flipAnimation = keyframes`
  0% { transform: rotateY(0deg); }
  50% { transform: rotateY(180deg); }
  100% { transform: rotateY(360deg); }
`;

const LoaderCard = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#fff", // Dark background for contrast
        borderLeft: "4px solid #0f0", // Thin green label
        width: "180px",
        height: "110px",
        borderRadius: "8px",
        animation: `${flipAnimation} 1s infinite linear`, // Continuous flipping
        transformStyle: "preserve-3d",
      }}
    >
      {/* GDG Icon */}
      <img
        src="https://pbs.twimg.com/media/D22N_huX4AEbb1y.jpg"
        alt="GDG Logo"
        style={{ width: "60px", height: "60px" }}
      />
    </Box>
  );
};

export default LoaderCard;
