import React from 'react'


import errorImg from './error.svg'
import useStyles from './styles';

const Error = () => {
  const classes = useStyles();

  return (
    <div>
      <object className={classes.animation} type='image/svg+xml' data={errorImg} title='logo animation'/>
      404 page not found
    </div>
  );
};

export default Error;