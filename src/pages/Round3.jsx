import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import MatchCard from "../components/MatchCard";
import LoaderCard from "../components/LoaderCard";

import roundsData from "../data/rounds.json"; // Import JSON file

const SemiFinal = () => {
  const [pairs, setPairs] = useState([]);
  const [loading, setLoading] = useState(true); // Track loading state

  useEffect(() => {
    // Get all Semi-Final Stage participants
    const semiFinalParticipants = roundsData.rounds["Semi-Final Stage"];

    // Shuffle participants randomly
    const shuffled = [...semiFinalParticipants].sort(() => Math.random() - 0.5);

    // Create 6 random pairs (12 participants needed, ensuring even pairing)
    const matchPairs = [];
    for (let i = 0; i < 12; i += 2) {
      matchPairs.push({
        number: i / 2 + 1,
        opponent1: shuffled[i],
        opponent2: shuffled[i + 1],
      });
    }

    setPairs(matchPairs);

    // Show LoaderCard for 7 seconds before displaying MatchCard
    const timer = setTimeout(() => {
      setLoading(false); // Hide loader after 7 seconds
    }, 7000);

    return () => clearTimeout(timer); // Cleanup timeout on unmount
  }, []);

  return (
    <Box
      sx={{
        backgroundColor: "#000",
        color: "#fff",
        minHeight: "100vh",
        padding: "20px",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "20px",
        }}
      >
        <img src="/icon.svg" alt="Logo" width="200" height="30" />
      </div>

      <Box display="flex" flexWrap="wrap" gap={2} justifyContent="center">
        {loading
          ? Array(6)
              .fill(0)
              .map((_, index) => <LoaderCard key={index} />) // Show LoaderCards
          : pairs.map((pair) => (
              <MatchCard
                key={pair.number}
                number={pair.number}
                opponent1={pair.opponent1}
                opponent2={pair.opponent2}
              />
            ))}
      </Box>
    </Box>
  );
};

export default SemiFinal;
