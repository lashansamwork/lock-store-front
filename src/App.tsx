import React from 'react';
import './App.css';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Comparison from "./comparison/Comparison";
import Verification from "./verification/Verification";

function App() {
  return (
      <React.Fragment>
        <CssBaseline />
        <Container maxWidth="sm">
          <Box sx={{ height: '100vh' }}>
              <Verification/>
              <Comparison/>
          </Box>
        </Container>
      </React.Fragment>
  );
}

export default App;
