import React from 'react';
import useStyles from './styles';
import {Box, Typography} from '@material-ui/core';

import wipImage from './wip.png';

const WIP = () => {
  const classes = useStyles();

  return (
    <Box className={classes.body}>
      <img className={classes.image} src={wipImage} title='wip' />
      <Typography className={classes.Title}>Under Construction...</Typography>
      <Box className={classes.spacer}/>
    </Box>
  )
}

export default WIP;