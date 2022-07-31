import React from 'react';
import './App.css';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Comparison from "./comparison/Comparison";
import Verification from "./verification/Verification";

function App() {

  const [page, setPage] = React.useState<Number>(1);

  return (
      <React.Fragment>
        <CssBaseline />
        <Container sx={{ maxWidth:'80%'}} maxWidth={false}>
          <Box sx={{ height: '100vh' }}>
              {page === 1? 
                <Verification onSubmitPressed={()=>{setPage(2)}}/> 
                :
                <Comparison/>
              }
          </Box>
        </Container>
      </React.Fragment>
  );
}

export default App;
