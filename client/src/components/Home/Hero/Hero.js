import { Container, Slide, Fade, AppBar, Typography, Grid, Box} from '@material-ui/core';
import React from 'react';
import Particles from 'react-tsparticles';

import useStyles from './styles'
import LogoAnim from './LogoFull_animated.svg';
import particleOptions from './ParticleBackground';

const Hero = () => {
  const classes = useStyles();
  return (
      <Box display="flex" flexDirection="row" >
        <Grid container>
          <Grid item lg={7}>
            <Typography component='div' style={{backgroundColor:'#cfe8fc', height:'90vh'}}/>
          </Grid>
          <Grid item lg={5}>
          <Fade in={true} timeout={{enter:3000}}>
            <div>
              <Slide in={true} direction='left' timeout={{enter:2000}}>
                <object className={classes.animation} type='image/svg+xml' data={LogoAnim} title='logo animation'/>
              </Slide>
            </div>
          </Fade>
          </Grid>
        </Grid>
      
      </Box>
  );
};

export default Hero;

/*          
 <Particles options={particleOptions}/>
*/