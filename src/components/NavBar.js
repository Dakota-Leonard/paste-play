import React from 'react';
import { Box } from '@mui/system';

const NavBar = () => {
  return (
    <Box
      component="span"
      sx={{
        bgcolor: 'red',
        p: 2,
        border: '1px dashed grey',
      }}
    ></Box>
  );
};

export default NavBar;
