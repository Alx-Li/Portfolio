import React, { useState }from 'react';
import { AppBar, Button, Fade, Tooltip, Box, Zoom, IconButton, Toolbar, Container, Typography, Drawer, Divider, List, ListItem ,ListItemText} from '@material-ui/core';
import { Link } from 'react-router-dom';

import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import SettingsIcon from '@material-ui/icons/Settings';
import MenuIcon from '@material-ui/icons/Menu';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import TwitterIcon from '@material-ui/icons/Twitter';

import useStyles from './styles';
import topLogo from './AL_animated.svg';

const Navbar = () => {
  const classes = useStyles();

  //event listeners for the menu
  const [active, setActive] = useState(false);

  const toggleDrawer = (open) => (event) =>{
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setActive(open);
  };

  return (

    <AppBar elevation={active?0:3} className={classes.header} >
      <Container maxWidth={false}>
        <Toolbar disableGutters>
            {/* the logo, always present=====================================================================*/}
            <Fade in  timeout={{enter:1000}}>
              <object className={classes.logo} type='image/svg+xml' data={topLogo} title='logo animation' />
            </Fade>

            {/* what displays when screen is md or larger=====================================================================*/}
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' },}}>
              <Zoom in timeout={{enter:500}}><Button className={classes.navButton} component={Link} to='/' title='Home'>Home</Button></Zoom>
              <Zoom in timeout={{enter:500}}><Button className={classes.navButton} component={Link} to='/about' title='About Me'>About Me</Button></Zoom>
              <Zoom in timeout={{enter:500}}><Button className={classes.navButton} component={Link} to='/projects' title='Projects'>Projects</Button></Zoom>
              <Zoom in timeout={{enter:500}}><Button className={classes.navButton} component={Link} to='/contact' title='Contact'>Contact</Button></Zoom>
              <Zoom in timeout={{enter:500}}><Button className={classes.navButton} component={Link} to='/fun' title='Hobbies'>Fun</Button></Zoom>
            </Box>

            <Box sx={{ flexGrow: 0, display: { xs:'none', sm: 'none', md: 'flex' } }}>
              <Zoom in timeout={{enter:500}}><IconButton className={classes.icoButton} href='https://github.com/Alx-Li' target='_blank' title='Github'><GitHubIcon/></IconButton></Zoom>
              <Zoom in timeout={{enter:500}}><IconButton className={classes.icoButton} href='' target='_blank' disabled title='Linkedin'><LinkedInIcon/></IconButton></Zoom>
              <Zoom in timeout={{enter:500}}><IconButton className={classes.icoButton} disabled target='_blank' title='Instagram'><InstagramIcon/></IconButton></Zoom>
              <Zoom in timeout={{enter:500}}><IconButton className={classes.icoButton} href='#' disabled title='Twitter'><TwitterIcon/></IconButton></Zoom>
              <Zoom in timeout={{enter:500}}><IconButton className={classes.icoButton} component={Link} to='/login' title='Settings'><SettingsIcon/></IconButton></Zoom>
            </Box>

            {/* what displays when screen is sm or smaller=====================================================================*/}
            <Box sx={{ flexGrow: 1, display: { sm: 'flex', md: 'none' } }}>
                <Typography fontSize='1em'>hi</Typography>
            </Box>
            
            
            <Box sx={{ flexGrow: 0, display: {sm: 'flex', md: 'none' } } } keepMounted>
              <Tooltip title="Open Menu">
                <Zoom in timeout={{enter:500}}><IconButton className={classes.icoButton} title='github' onClick={active?toggleDrawer(false):toggleDrawer(true)}>
                  {active?<ExpandLessIcon/>:<MenuIcon/>}
                </IconButton></Zoom>
              </Tooltip>
            </Box>

            {/* Drawer Element----> should move to separate file and import it*/}
            <Drawer anchor='top' open={active} onClose={toggleDrawer(false)}>
              <div style={{height: '4rem'}}></div>
              <List disablePadding>
                <Divider/>
                  <ListItem button component={Link} to='/' onClick={toggleDrawer(false)}>
                    <ListItemText disableTypography className={classes.listFormat} primary="Home"/>
                  </ListItem>
                  <ListItem button component={Link} to='/about' onClick={toggleDrawer(false)}>
                    <ListItemText disableTypography className={classes.listFormat} primary="About Me"/>
                  </ListItem>
                  <ListItem button component={Link} to='/projects' onClick={toggleDrawer(false)}>
                    <ListItemText disableTypography className={classes.listFormat} primary="Projects"/>
                  </ListItem>
                  <ListItem button component={Link} to='/contact' onClick={toggleDrawer(false)}>
                    <ListItemText disableTypography className={classes.listFormat} primary="Contact"/>
                  </ListItem>
                  <ListItem button component={Link} to='/fun' onClick={toggleDrawer(false)}>
                    <ListItemText disableTypography className={classes.listFormat} primary="Fun"/>
                  </ListItem>
                <Divider/>
                  <ListItem className={classes.listIco}>
                    <IconButton className={classes.icoButton} onClick={toggleDrawer(false)} href='https://github.com/Alx-Li' target='_blank' title='Github'><GitHubIcon/></IconButton>
                    <IconButton className={classes.icoButton} onClick={toggleDrawer(false)} href='' target='_blank' disabled title='Linkedin'><LinkedInIcon/></IconButton>
                    <IconButton className={classes.icoButton} onClick={toggleDrawer(false)} disabled target='_blank' title='Instagram'><InstagramIcon/></IconButton>
                    <IconButton className={classes.icoButton} onClick={toggleDrawer(false)} href='#' disabled title='Twitter'><TwitterIcon/></IconButton>
                    <IconButton className={classes.icoButton} onClick={toggleDrawer(false)} component={Link} to='/login' title='Settings'><SettingsIcon/></IconButton>
                  </ListItem>
              </List>
            </Drawer>



        </Toolbar>
      </Container>
    </AppBar>
    
    
  );
};

export default Navbar;

/*
    
*/