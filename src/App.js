import React from "react";
import { Typography, Container } from "@mui/material";
import ClassSub from "./components/ClassSub";

function App() {
  return (
    <Container>
      <Typography variant="h3" textAlign="center" my={5}>
        Subject Management
      </Typography>
      <ClassSub />
    </Container>
  );
}

export default App;
