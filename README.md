import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
const pages = ['Home', 'Services', 'Project', 'Contact'];
function TopBar({setSelectContent}) {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = (page,i) => {
  setSelectContent(page)
  };
   return <>
  <AppBar style={{backgroundColor:"#5585b5", color:"black", borderRadius:"5px"}}>
      <Container maxWidth="xl" >
        <Toolbar disableGutters >      
          <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 4 }} style={{fontSize:"30px"}} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.5rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            GUHAN 
          </Typography>
          <Box sx={{ flexGrow: 2, display: {  xs: 'flex',md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
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
                <MenuItem key={page} onClick={()=>{handleCloseNavMenu(page)}}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>   
          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h4"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 3,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            LOGO
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex', justifyContent: 'flex-end' } }}   style={{ margin:"5px"}} >
            {pages.map((page,i) => (
              <Button
                key={page}
                
                onClick={()=>{handleCloseNavMenu(page,i)}}
                sx={{ my: 3, color: 'black', display: 'block', letterSpacing: '.1rem', fontWeight: 600, margin:"10px"}}
              >
                {page}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
   </AppBar>
  </>
}

export default TopBar

// https://palettes.shecodes.io/palettes/1377#palette