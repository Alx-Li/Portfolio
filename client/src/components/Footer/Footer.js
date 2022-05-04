import React from 'react';
import { Box, Container, Toolbar, List, ListItem, Divider, Link, IconButton, Typography} from '@material-ui/core'

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
          <Box sx={{ display: { xs: 'none', sm:'none', md: 'flex' },}}>
            <object className={classes.logo} type='image/svg+xml' data={bottomLogo} title='logo animation' />
          </Box>
          <Box className={classes.footerContentBox} sx={{ display: { xs: 'none', md: 'flex' },}}>
            <Typography className={classes.footerContentText}>
              NAVIGATION <br/> 
              <Link href='/' color='inherit' title='Home'>home</Link> | <Link href='/about' color='inherit' title='About Me'>about me</Link> <br/> 
              <Link href='/projects' color='inherit' title='Projects'>projects</Link> | <Link href='/contact' color='inherit' title='Contact'>contact me</Link> <br/>
              <Link href='/fun' color='inherit' title='Hobbies'>fun</Link>
            </Typography>
          </Box>
          <Box className={classes.footerContentBox} sx={{ display: { xs: 'none', md: 'flex' },}}>
            <Typography className={classes.footerContentText}>
              CONTACT <br/>
              email: li.alex.0901@gmail.com <br/>
              phone: 778-868-1203 <br/>
              Vancouver BC, Canada <br/>
            </Typography>
          </Box>
          <Box className={classes.footerContentBox} sx={{ display: { xs: 'none', md: 'flex' },}}>
            <Typography className={classes.footerContentText}>
              ABOUT THE SITE <br/>
              version 1.0.0-b<br/>
              mongoDB | express.js | react.js | node.js <br/>
              <Link href='https://github.com/Alx-Li/MERN-Portfolio-Dev' target='_blank' color='inherit'>github repository</Link>
            </Typography>
          </Box>

          {/* Mobile and small window footer*/}
          <Box sx={{display: { md:'none' }, width:"100%"}}>
              <List disablePadding width='100%'>
                <Divider/>

                <ListItem disableTypography className={classes.listFormatTitle}>
                  <Typography className={classes.listText} align='center'>
                    NAVIGATION
                  </Typography>
                </ListItem>
                <ListItem disableTypography className={classes.listFormatBody}>
                  <Typography className={classes.listText} align='center'>
                    <Link href='/' color='inherit' title='Home'>home</Link> | <Link href='/about' color='inherit' title='About Me'>about me</Link> | <Link href='/projects' color='inherit' title='Projects'>projects</Link> | <Link href='/contact' color='inherit' title='Contact'>contact me</Link> | <Link href='/fun' color='inherit' title='Hobbies'>fun</Link>
                  </Typography>
                </ListItem>

                <Divider/>

                <ListItem disableTypography className={classes.listFormatTitle}>
                  <Typography className={classes.listText} align='center'>
                    CONTACT
                  </Typography>
                </ListItem>
                <ListItem disableTypography className={classes.listFormatBody}>
                  <Typography className={classes.listText} align='center'>
                    email: li.alex.0901@gmail.com | phone: 778-868-1203 | Vancouver BC, Canada
                  </Typography>
                </ListItem>

                <Divider/>

                <ListItem disableTypography className={classes.listFormatTitle}>
                  <Typography className={classes.listText} align='center'>
                    ABOUT THE SITE
                  </Typography>
                </ListItem>
                <ListItem disableTypography className={classes.listFormatBody}>
                  <Typography className={classes.listText} align='center'>
                    version 1.0.0-b | <Link href='https://github.com/Alx-Li/MERN-Portfolio-Dev' target='_blank' color='inherit'>github repository</Link> 
                  </Typography>
                  
                </ListItem>
                  
                <Divider/>
                  <ListItem className={classes.listIco} >
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
NAVIGATION <br/> 
                    <Link href='/' color='inherit' title='Home'>home</Link> | <Link href='/about' color='inherit' title='About Me'>about me</Link> <br/> 
                    <Link href='/projects' color='inherit' title='Projects'>projects</Link> | <Link href='/contact' color='inherit' title='Contact'>contact me</Link> <br/>
                    <Link href='/fun' color='inherit' title='Hobbies'>fun</Link>

                    CONTACT <br/>
                    email: li.alex.0901@gmail.com <br/>
                    phone: 778-868-1203 <br/>
                    Vancouver BC, Canada <br/>

                    ABOUT THE SITE <br/>
                    version 0.2.0-b | development branch<br/>
                    mongoDB | express.js | react.js | node.js <br/>
                    <Link href='https://github.com/Alx-Li/MERN-Portfolio-Dev' target='_blank' color='inherit'>github repository</Link>

                  


*/