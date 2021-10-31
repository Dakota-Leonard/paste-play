import React from 'react';
import { Box } from '@mui/system';
import { AppBar } from '@mui/material';

const NavBar = () => {
  return (
    <Box
      sx={{
        width: 300,
        height: 300,
        backgroundColor: 'primary.dark',
        '&:hover': {
          backgroundColor: 'primary.main',
          opacity: [0.9, 0.8, 0.7],
        },
      }}
    >
      <AppBar>Test</AppBar>
    </Box>
  );
};

export default NavBar;
