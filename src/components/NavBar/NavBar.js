import React from 'react';
import { AppBar, Toolbar, Typography, Button, Divider } from '@mui/material';
import NavBarButtons from './NavBarButtons';
import { Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';

const NavBar = () => {
  return (
    <AppBar position="sticky">
      <Toolbar>
        <Button
          variant="text"
          disableElevation
          size="large"
          component={Link}
          to="/"
          sx={{ color: 'white' }}
        >
          <HomeIcon />
        </Button>

        <Typography
          sx={{
            flexGrow: 1,
            color: 'primary',
          }}
          variant="h4"
        >
          PastePlay
        </Typography>
        <NavBarButtons />
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
