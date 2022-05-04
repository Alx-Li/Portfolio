import React from 'react'
import { Box, Typography } from '@material-ui/core';

import errorImg from './error.svg'
import useStyles from './styles';

const Error = () => {
  const classes = useStyles();

  return (
    <Box className={classes.body}>
      <object className={classes.image} type='image/svg+xml' data={errorImg} title='logo animation'/>
      <Typography className={classes.Title}><br/>404</Typography>
      <Box className={classes.spacer}/>
    </Box>
  );
};

export default Error;