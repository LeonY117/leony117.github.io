import React from 'react';
import classes from './Logo.module.css';

const Logo = (props) => {
  return (
    <div className={classes.Logo} onClick={props.clicked}>
      <p className={classes.LogoText} unselectable='on'>
        leonyao
      </p>
    </div>
  );
};

export default Logo;
