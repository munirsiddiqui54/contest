import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Beginner from "./pages/Beginner";
import Qualifier from "./pages/Qualifier";
import SemiFinal from "./pages/SemiFinal";
import Finale from "./pages/Finale";
import Round1 from "./pages/Round1";
import Round2 from "./pages/Round2";
import Round3 from "./pages/Round3";
import Round4 from "./pages/Round4";

const theme = createTheme(); // Default MUI theme

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline /> {/* Ensures consistent styling */}
      <Router>
        <Routes>
          <Route path="/1" element={<Beginner />} />
          <Route path="/2" element={<Qualifier />} />
          <Route path="/3" element={<SemiFinal />} />
          <Route path="/4" element={<Finale />} />
          
          {/* New Start Rounds */}
          <Route path="/start-1" element={<Round1 />} />
          <Route path="/start-2" element={<Round2 />} />
          <Route path="/start-3" element={<Round3 />} />
          <Route path="/start-4" element={<Round4 />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
