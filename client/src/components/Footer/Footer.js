import React from 'react';
import { Box, Container, Toolbar, List, ListItem, ListItemText, Divider, Link, IconButton} from '@material-ui/core'

import useStyles from './styles'
import bottomLogo from './bottomLogo.svg'


import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import Brightness2Icon from  '@material-ui/icons/Brightness2';
import TwitterIcon from '@material-ui/icons/Twitter';

const Footer = () => {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Container maxWidth={false}>
        <Toolbar disableGutters>
          <Box sx={{ display: { xs: 'none', md: 'flex' },}}>
            <object className={classes.logo} type='image/svg+xml' data={bottomLogo} title='logo animation' />
            <h1>WIP</h1>
          </Box>
          


          {/* Mobile and small window footer*/}
          <Box  sx={{display: { md:'none' }, width:"100%"}}>
              <List disablePadding>
                <Divider/>
                  <h3>WIP</h3>
                <Divider/>
                  <ListItem className={classes.listIco}>
                    <IconButton className={classes.icoButton} href='https://github.com/Alx-Li' target='_blank' title='Github'><GitHubIcon/></IconButton>
                    <IconButton className={classes.icoButton} href='' target='_blank' disabled title='Linkedin'><LinkedInIcon/></IconButton>
                    <IconButton className={classes.icoButton} href='https://www.instagram.com/ax_li.tech/' target='_blank' title='Instagram'><InstagramIcon/></IconButton>
                    <IconButton className={classes.icoButton} href='#' disabled title='Twitter'><TwitterIcon/></IconButton>
                    <IconButton className={classes.icoButton} disabled title='Dark Mode'><Brightness2Icon/></IconButton>
                  </ListItem>
              </List>
          </Box>
        </Toolbar>
      </Container>
    </footer> 
  );
};

export default Footer;


/*
sx={{ flexGrow: 0, display: { xs:'none', sm: 'none', md: 'flex' } }}
*/