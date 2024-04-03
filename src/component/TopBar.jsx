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
import CodeIcon from '@mui/icons-material/Code';
import {UserContext} from "../utils/UserContex.jsx"
import "../index.css"

const pages = ['Home', 'Skills', 'Project', 'Contact'];

function TopBar() {

  let content= React.useContext(UserContext)
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = (page,i) => {
    content.setSelectContent(page)
   setAnchorElNav(null)
  };

   return <>
   <div className='topbarmain'>
  <AppBar style={{color:"black", borderRadius:"5px", backgroundColor:"whitesmoke",width:'100%'}}>
      <Container maxWidth="xl" >
        <Toolbar disableGutters >      
          <CodeIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 4 }} style={{fontSize:"30px"}} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            className='poppins-thin'
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontWeight: 700,
              letterSpacing: '.6rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            GM
          </Typography>
            <div className='mobileviewtopbar'>
          <Box sx={{ flexGrow: 2, display: {  xs: 'flex',md: 'none' } }}  >
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
                <MenuItem key={page}   onClick={()=>{handleCloseNavMenu(page)}}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>   
          <CodeIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h4"
            noWrap
            component="a"
            className='poppins-thin'
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 3,
              fontWeight: 600,
              letterSpacing: '.6rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
           GM
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex', justifyContent: 'flex-end' },width: '100%' }}   style={{ margin:"5px"}} >
            {pages.map((page,i) => (
              <Button
                key={page}
              
                onClick={()=>{handleCloseNavMenu(page,i)}}
                sx={{ my: 3, color: 'black', display: 'block', letterSpacing: '.1rem', fontWeight: 500, margin:"10px", '&:hover': {color: 'blue' },}}
              >
                {page}
              </Button>
            ))}
          </Box>
          </div>
        </Toolbar>
      </Container>
   </AppBar>
   </div>
  </>
}

export default TopBar

// https://palettes.shecodes.io/palettes/1377#palette