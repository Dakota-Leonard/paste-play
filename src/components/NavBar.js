import React from 'react';
import {
  AppBar,
  ButtonGroup,
  Toolbar,
  Typography,
  Button,
} from '@mui/material';

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
        <div>
          <ButtonGroup
            variant="contained"
            color="secondary"
            disableElevation
            size="large"
          >
            <Button>New Paste!</Button>
            <Button>How To Use</Button>
            <Button>About</Button>
          </ButtonGroup>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
