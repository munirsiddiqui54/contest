import React from "react";
import { Box, Typography } from "@mui/material";

const MatchCardCompact = ({ number, opponent1, opponent2 }) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "#222", // Dark background for contrast
        borderLeft: "4px solid white", // Thin green label
        padding: "6px 10px",
        // width: "200px",
        height: "150px",
        borderRadius: "8px",
      }}
    >
      {/* Opponent Names */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
          height: "100%",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "end",
            width: "290px",
            alignItems: "center",
          }}
        >
          <span
            style={{ fontSize: "18px", marginRight: 20, fontWeight: "bold" }}
          >
            ❌
          </span>

          <Typography
            variant="caption"
            sx={{
              backgroundColor: "#c93030", // Bright Red
              color: "#fff",
              padding: "2px 6px",
              borderRadius: "4px",
              width: "200px",
              height: "40px",
              textAlign: "center",
              fontSize: "16px",
              overflow: "hidden",
              whiteSpace: "nowrap",
              textOverflow: "none",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "5px",
            }}
          >
            {opponent1}
          </Typography>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            width: "100%",
          }}
        >
          {/* Table Number */}
          <Typography
            variant="body2"
            sx={{ fontWeight: "bold", fontSize: 32, color: "#fff" }}
          >
            {number}
          </Typography>
          <Typography
            variant="caption"
            style={{ marginLeft: 150, fontSize: 22 }}
            sx={{ fontWeight: "bold", my: 0.5, color: "#fff" }}
          >
            VS
          </Typography>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "end",
            width: "100%",
            alignItems: "center",
          }}
        >
          <span
            style={{
              fontSize: "24px",
              fontWeight: "bold",
              color: "#648BBA",
              marginRight: 20,
            }}
          >
            O
          </span>

          <Typography
            variant="caption"
            sx={{
              backgroundColor: "#648BBA", // Bright Blue
              color: "#fff",
              padding: "2px 6px",
              borderRadius: "4px",
              width: "200px",
              height: "40px",
              textAlign: "center",
              fontSize: "18px",
              overflow: "hidden",
              whiteSpace: "nowrap",
              textOverflow: "ellipsis",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "5px",
            }}
          >
            {opponent2}
          </Typography>
        </div>
      </Box>
    </Box>
  );
};

export default MatchCardCompact;
