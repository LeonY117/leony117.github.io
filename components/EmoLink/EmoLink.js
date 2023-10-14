import React from 'react';

import classes from './EmoLink.module.css';

const EmoLink = (props) => {
  let emoji = null;
  if (props.emoji != null) {
    emoji = <p className={classes.Emoji}>{props.emoji}</p>;
  }
  return (
    <div className={classes.LinkWrapper}>
      {emoji}
      <a className={classes.EmoLink} onClick={props.clicked}>
        {props.children}
      </a>
    </div>
  );
};

export default EmoLink;
