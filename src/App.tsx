import { Box } from "@chakra-ui/react";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Buttons from "./pages/Buttons";
import Inputs from "./pages/Inputs";
import Time from "./pages/Time";

const App = () => {
  return (
    <Box>
      <Routes>
        <Route path="/" element={<Buttons />} />
        <Route path="/inputs" element={<Inputs />} />
        <Route path="/time" element={<Time />} />
        <Route path="*" element={<div>Not Found</div>} />
      </Routes>
    </Box>
  );
};

export default App;
