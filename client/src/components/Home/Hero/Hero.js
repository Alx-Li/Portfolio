import { Slide, Fade, Grid, Box, Zoom, Typography} from '@material-ui/core';
import React from 'react';
import Particles from 'react-tsparticles';
import { Link } from 'react-router-dom';

import useStyles from './styles'
import LogoAnim from './LogoFull_animated.svg';
import particleOptions from './ParticleBackground';

const Hero = () => {
  const classes = useStyles();
  return (
    <div> 
      {/* large window display*/}
      <Grid container spacing= {2} className={classes.bodyH} >
        <Grid item md={7}>
          <Fade in timeout={{enter:2000}}>
          <div>
            <Typography className={classes.bodyTitleH}>I'M ALEXANDER LI</Typography>
            <Typography className={classes.bodyTextH}>
                A student, hobbyist artist, and maker. <br/>
                Currently pursuing a degree in CS.<br/>
            </Typography>
            {/* temporary while site is under construction */}
            <Typography style={{fontFamily: 'Gill Sans MT', fontSize: '0.8rem', color: 'grey', textAlign: 'right'}}>
              <br/>Notice: this site is currently under construction, follow the repository on github to see my progress
            </Typography>
          </div>
          </Fade>
        </Grid>
        <Grid item md={5}>
          <Fade in timeout={{enter:1500}}>
            <div>
              <Slide in direction='left' timeout={{enter:2000}}>
                <object type='image/svg+xml' className={classes.animationH} data={LogoAnim} title='logo animation' />
              </Slide>
            </div>
          </Fade>
        </Grid>
      </Grid>



      {/* small window display*/}
      <Box className={classes.bodyV}>
        <Box className={classes.animation}>
          <Fade in={true} timeout={{enter:2000}}>
            <div>
              <Slide in={true} direction='down' timeout={{enter:2000}}>
                <object  type='image/svg+xml' data={LogoAnim} title='logo animation'/>
              </Slide>
            </div>
          </Fade>
        </Box>
        <Fade in={true} timeout={{enter:2000}}>
          <Box>
              <Typography className={classes.bodyTitleV}>I'M ALEXANDER LI</Typography>
              <Typography className={classes.bodyTextV}>
                A student, hobbyist artist, and maker. <br/>
                Currently pursuing a degree in CS.<br/>
              </Typography>
          {/* temporary while site is under construction */}
              <Typography style={{fontFamily: 'Gill Sans MT', fontSize: '2vw', color: 'grey'}}><br/>Notice: this site is currently under construction, follow the repository on github to see my progress</Typography>
          </Box>
        </Fade>
        <Box className={classes.spacer}/>
      </Box>
      <Particles options={particleOptions}/>
    </div>
  );
};

export default Hero;

/*          
 <Particles options={particleOptions}/>


 
*/