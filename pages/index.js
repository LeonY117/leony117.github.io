import React from 'react';
import Head from 'next/head';
import Content from '../hoc/Content/Content';
import Layout from '../hoc/Layout/Layout';
import Image from 'next/image';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faGraduationCap, faEnvelope } from '@fortawesome/free-solid-svg-icons';

import classes from './index.module.css';

const Index = () => {
  const links = (
    <>
      <li>
        <Link
          href='https://www.linkedin.com/in/linghong-yao/'
          className={classes.SocialMediaLink}
          target='_blank'
        >
          <span className={classes.LinkWrapper}>
            <FontAwesomeIcon icon={faLinkedin} />
          </span>
        </Link>
      </li>
      <li>
        <Link
          href='https://github.com/LeonY117'
          className={classes.SocialMediaLink}
          target='_blank'
        >
          <span className={classes.LinkWrapper}>
            <FontAwesomeIcon icon={faGithub} />
          </span>
        </Link>
      </li>
      <li>
        <Link
          href='https://scholar.google.com/citations?user=9HJ1g0gAAAAJ&hl=en'
          className={classes.SocialMediaLink}
          target='_blank'
        >
          <span className={classes.LinkWrapper}>
            <FontAwesomeIcon icon={faGraduationCap} />
          </span>
        </Link>
      </li>
      <li>
        <Link
          href='mailto:leon.yao117@gmail.com'
          className={classes.SocialMediaLink}
          target='_blank'
        >
          <span className={classes.LinkWrapper}>
            <FontAwesomeIcon icon={faEnvelope} />
          </span>
        </Link>
      </li>
    </>
  );
  return (
    <>
      <Head>
        <title>leonyao</title>
        <meta name="leon's personal page" content='Home Page' />
      </Head>
      <Layout>
        <Content>
          <main>
            <div className={classes.MainBody}>
              <div className={classes.MainText}>
                <p>Hi there 👋!</p>
                <p>
                  My name is Leon, a machine learning engineer and a full-time
                  butler to my cat 🐱.
                </p>
                <p>
                  🎓 I graduated from UCL with a masters in Machine Learning and
                  bachelors in Mechanical Engineering. I’ve done a lot work on
                  with deep learning and{' '}
                  <a href='/projects/msc'>computer vision tasks</a> for{' '}
                  <a href='/projects/namo'>interesting robotics problems</a>.
                </p>
                <p>
                  🎨 I was also the cofounder of Test and Tutor, a data-centric
                  platform for IB maths students to study. And in a past life, I
                  was a part-time graphics designer and web developer.
                </p>
                <p>
                  📝 I{' '}
                  <a href='https://github.com/LeonY117/leony117.github.io'>
                    built this website
                  </a>{' '}
                  to serve as a collection of TL;DRs for my ML projects and
                  creative projects. It’s to showcase my project to those who
                  want more than the one-liners on my CV but don’t want to read
                  an entire paper. It’s also just a small corner of the internet
                  where my archived projects live on.
                </p>
              </div>
              <div className={classes.ImageLinkWrapper}>
                <div className={classes.MainImage}>
                  <Image
                    src='/images/profile_pic_zoomed.jpg'
                    alt='picture of me'
                    layout='fill'
                    objectFit='cover'
                  />
                </div>
                <ul className={classes.Links}>{links}</ul>
              </div>
              <div className={classes.MobileLinks}>{links}</div>
            </div>
          </main>
        </Content>
      </Layout>
    </>
  );
};

export default Index;
