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

  const intro = (
    <p className={classes.Intro}>
      I've worked on a pretty broad range of research topics so far, from{' '}
      <PLink link='namo'>reinforcement learning for robot navigation</PLink>, to
      a{' '}
      <PLink link='emotion'>
        multitask learning framework for emotion detection
      </PLink>
      . But I have been most interested in vision models, in particular{' '}
      <PLink link='bsc'>efficient scene segmentation</PLink> and{' '}
      <PLink link='waste'>object detection</PLink>. Currently I'm
      working on something between the intersection between{' '}
      <PLink link='msc'>vision and bayesian inference</PLink>.
    </p>
  );

  const projects = (
    <ul className={classes.Projects}>
      <li>
        <EmoLink emoji='🚗' clicked={() => projectClickedHandler('msc')}>
          Efficient Bayesian neural networks for outdoor semantic scene
          understanding tasks (MSc thesis)
        </EmoLink>
      </li>
      <li>
        <EmoLink emoji='🥳' clicked={() => projectClickedHandler('emotion')}>
          Multi-task learning for text-based emotion detection across disparate
          label spaces
        </EmoLink>
      </li>
      <li>
        <EmoLink emoji='🤖' clicked={() => projectClickedHandler('namo')}>
          Local navigation among movable obstacles with deep reinforcement
          learning
        </EmoLink>
      </li>
      <li>
        <EmoLink emoji='🛥️' clicked={() => projectClickedHandler('bsc')}>
          ShorelineNet: An efficient deep learning approach for shoreline
          semantic segmentation (BSc thesis)
        </EmoLink>
      </li>
      <li>
        <EmoLink emoji='♻️' clicked={() => projectClickedHandler('waste')}>
          Waste object detection with YOLO and SSD using transfer learning
        </EmoLink>
      </li>
    </ul>
  );

  return (
    <>
      <Head>
        <title>Projects</title>
      </Head>
      <Layout>
        <Content>
          {intro}
          <div className={classes.ProjectsWrapper}>
            <h2>Projects</h2>
            {projects}
          </div>
        </Content>
      </Layout>
    </>
  );
};

export default Projects;
