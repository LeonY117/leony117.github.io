import React from 'react';
import classes from './Tag.module.css';

const Tag = (props) => {
  let classArray = [classes.Tag];
  return (
    <label className={classArray.join(' ')}>
      {props.children.toLowerCase()}
    </label>
  );
};

export default Tag;
