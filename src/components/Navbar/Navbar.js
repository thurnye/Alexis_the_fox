import * as React from 'react';
// import {
//   Link
// } from "react-router-dom";
import Link from '@mui/material/Link';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';

const colorAlexis = "#8F8A7A";

const pages = [
  { label: 'Home', path: '/' },
  { label: 'Meet Alexis', path: 'meet-me' },
  { label: 'Sensual Dance', path: 'sensual-dance' },
  { label: 'Cacao Circles', path: 'cacao-circles' },
  { label: 'Retreats Event', path: 'retreats-event' },
  { label: 'Vlog/Podcast', path: 'podcast' },
  { label: 'Shop', path: 'shop' },
  { label: 'Contact', path: 'contact' }
];

function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static" sx={{background:"none", boxShadow:"none"}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */}
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'none' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: colorAlexis,
              textDecoration: 'none',
            }}
          >
            AlexisThatFox
          </Typography>

          <Box sx={{ flexGrow: 1,  display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color={colorAlexis}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page.label} onClick={handleCloseNavMenu}>
                  {/* <Typography textAlign="center">
                    <Link to={page.link}>
                      {page.label}
                    </Link>
                  </Typography> */
                  }
                    <Link href={page.link} underline="none" sx={{color:colorAlexis, cursor:"pointer"}}>
              {page.label}
            </Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>


          {/* for desktops screens */}
          {/* <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} /> */}
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: colorAlexis,
              textDecoration: 'none',
            }}
          >
            AlexisThatFox
          </Typography>
          <Box sx={{ flexGrow: 1, justifyContent:"center", alignItems:"flex-start" , textAlign:"center" , display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              // <Button
              //   key={page}
              //   onClick={handleCloseNavMenu}
              //   sx={{ my: 2, color: 'white', display: 'block' }}
              // >
              //   {page}
              // </Button>
              <Link href={page.link} underline="none" sx={{color:colorAlexis, mx:3, cursor:"pointer"}}>
              {page.label}
            </Link>
            ))}
          </Box>

          
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;