import React from 'react';
import classes from './Footer.module.css';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faGraduationCap, faEnvelope } from '@fortawesome/free-solid-svg-icons';

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
            <li className={classes.Link}>
              <div className={classes.IconWrapper}>
                <span className={classes.Icon}>
                  <FontAwesomeIcon icon={faLinkedin} />
                </span>
              </div>
              <Link
                href='https://www.linkedin.com/in/linghong-yao/'
                className={classes.SocialMediaLink}
                target='_blank'
              >
                <p className={classes.LinkText}>Leon Yao</p>
              </Link>
            </li>
            <li className={classes.Link}>
              <div className={classes.IconWrapper}>
                <span className={classes.Icon}>
                  <FontAwesomeIcon icon={faGithub} />
                </span>
              </div>
              <Link
                href='https://github.com/LeonY117'
                className={classes.SocialMediaLink}
                target='_blank'
              >
                <p className={classes.LinkText}>LeonY117</p>
              </Link>
            </li>
            <li className={classes.Link}>
              <div className={classes.IconWrapper}>
                <span className={classes.Icon}>
                  <FontAwesomeIcon icon={faGraduationCap} />
                </span>
              </div>
              <Link
                href='https://scholar.google.com/citations?user=9HJ1g0gAAAAJ&hl=en'
                className={classes.SocialMediaLink}
                target='_blank'
              >
                <p className={classes.LinkText}>Linghong Yao</p>
              </Link>
            </li>
            <li className={classes.Link}>
              <div className={classes.IconWrapper}>
                <span className={classes.Icon}>
                  <FontAwesomeIcon icon={faEnvelope} />
                </span>
              </div>
              <p
                style={{ textDecoration: 'none' }}
                className={classes.LinkText}
              >
                leon.yao117@gmail.com
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
