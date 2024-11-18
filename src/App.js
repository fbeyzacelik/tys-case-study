import React from 'react';
import { Box, CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import Sidebar from './components/Sidebar';
import MainLayout from './components/MainLayout';

const theme = createTheme({
  palette: {
    primary: {
      main: '#5E35B1',
    },
    background: {
      default: '#f5f5f5',
    },
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ display: 'flex', minHeight: '100vh' }}>
        <Sidebar />
        <MainLayout />
      </Box>
    </ThemeProvider>
  );
};

export default App;