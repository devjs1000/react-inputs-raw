import { Box } from "@chakra-ui/react";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Buttons from "./pages/Buttons";
import Inputs from "./pages/Inputs";

const App = () => {
  return (
    <Box>
      <Routes>
        <Route path="/" element={<Buttons />} />
        <Route path="/inputs" element={<Inputs />} />
      </Routes>
    </Box>
  );
};

export default App;
