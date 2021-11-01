import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';
import NavBarButtons from './NavBarButtons';

const NavBar = () => {
  return (
    <AppBar position="sticky">
      <Toolbar>
        <Typography
          sx={{
            flexGrow: 1,
          }}
          variant="h4"
        >
          PastePlay!
        </Typography>
        <NavBarButtons />
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
