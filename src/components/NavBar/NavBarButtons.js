import React from 'react';
import { ButtonGroup, Button } from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';
import HelpIcon from '@mui/icons-material/Help';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import GitHubIcon from '@mui/icons-material/GitHub';

const NavBarButtons = () => {
  return (
    <ButtonGroup
      variant="contained"
      color="secondary"
      disableElevation
      size="large"
    >
      <Button endIcon={<HelpIcon />}>How To Use</Button>
      <Button endIcon={<InfoIcon />}>About</Button>
      <Button
        endIcon={<GitHubIcon />}
        href="https://github.com/Dakota-Leonard/paste-play"
      >
        GitHub
      </Button>
      <Button color="callToAction" endIcon={<AddCircleIcon />}>
        New Paste!
      </Button>
    </ButtonGroup>
  );
};

export default NavBarButtons;
