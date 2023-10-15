import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

import Content from '@/hoc/Content/Content';
import Layout from '@/hoc/Layout/Layout';
import EmoLink from '@/components/EmoLink/EmoLink';

import classes from './projects.module.css';

const Projects = () => {
  const router = useRouter();
  const projectClickedHandler = (project) => {
    router.push('/projects/' + project);
  };

  const PLink = (props) => {
    return (
      <a onClick={() => projectClickedHandler(props.link)}>{props.children}</a>
    );
  };

  return (
    <>
      <Head>
        <title>Projects</title>
      </Head>
      <Layout>
        <Content>
          <p className={classes.Intro}>
            I've worked on a pretty broad range of research topics so far, from{' '}
            <PLink link='namo'>
              reinforcement learning for robot navigation
            </PLink>
            , to a{' '}
            <PLink link='emotion'>
              multitask learning framework for emotion detection
            </PLink>
            . But I have been most interested in{' '}
            <PLink link='msc'>vision models</PLink>, in particular{' '}
            <PLink link='bsc'>efficient scene segmentation</PLink> and{' '}
            <PLink link='waste-detection'>object detection</PLink>. Currently
            I'm working on something between the intersection between vision and
            bayesian inference.
          </p>
          <div className={classes.ProjectsWrapper}>
            <h2>Projects</h2>
            <ul className={classes.Projects}>
              <li>
                <EmoLink
                  emoji='🤖'
                  clicked={() => projectClickedHandler('namo')}
                >
                  Efficient Bayesian Neural Networks for Outdoor Semantic Scene
                  Understanding Tasks in Robotics
                </EmoLink>
              </li>
              <li>
                <EmoLink
                  emoji='🤖'
                  clicked={() => projectClickedHandler('namo')}
                >
                  Efficient Bayesian Neural Networks for Outdoor Semantic Scene
                  Understanding Tasks in Robotics
                </EmoLink>
              </li>
            </ul>
          </div>
        </Content>
      </Layout>
    </>
  );
};

export default Projects;
