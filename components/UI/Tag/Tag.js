import React from 'react';
import classes from './Tag.module.css';

const Tag = (props) => {
  let classArray = [classes.Tag];
  let color = props.color ? props.color : '#f0f0f0';
  return (
    <label className={classArray.join(' ')} style={{ backgroundColor: color }}>
      {props.children}
    </label>
  );
};

export default Tag;
