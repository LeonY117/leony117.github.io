import React from 'react';
import classes from './Footer.module.css';

const Footer = () => {
  return (
    <div className={classes.Backdrop}>
      <div className={classes.Footer}>
        <div className={classes.TextWrapper}>
          <p>
            I am an MSc Machine Learning graduate from UCL, and I made this
            website to document all the projects that I've worked on. I'm
            currently looking for the next chapter of my life in ML, so reach
            out to me if you want to have a chat!
          </p>
        </div>
        <div className={classes.FooterItems}>
          <ul className={classes.Links}>
            <li className={classes.Link}>Here are some links in the footer</li>
            <li className={classes.Link}>Here's another link thing!</li>
            <li className={classes.Link}>So many links!</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
