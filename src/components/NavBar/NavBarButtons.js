import React from 'react';
import { Link } from 'react-router-dom';
import { ButtonGroup, Button } from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';
import HelpIcon from '@mui/icons-material/Help';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import GitHubIcon from '@mui/icons-material/GitHub';
import './NavBarButtons.css';

const NavBarButtons = () => {
  return (
    <ButtonGroup
      variant="contained"
      color="secondary"
      disableElevation
      size="large"
    >
      <Button component={Link} to="/help" endIcon={<HelpIcon />}>
        How To Use
      </Button>

      <Button component={Link} to="/about" endIcon={<InfoIcon />}>
        About
      </Button>

      <Button
        endIcon={<GitHubIcon />}
        href="https://github.com/Dakota-Leonard/paste-play"
        target="_blank"
      >
        GitHub
      </Button>

      <Button
        component={Link}
        to="/new"
        color="callToAction"
        endIcon={<AddCircleIcon />}
      >
        New Paste
      </Button>
    </ButtonGroup>
  );
};

export default NavBarButtons;
