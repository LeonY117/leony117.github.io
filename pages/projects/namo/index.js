import React from 'react';

import Project from '@/components/Project/Project';
import Layout from '@/hoc/Layout/Layout';
import Content from '@/hoc/Content/Content';
import Link from 'next/link';
import Head from 'next/head';

import classes from '../ProjectPage.module.css';

const Index = () => {
  const title =
    'Local Navigation Among Movable Obstacles with Deep Reinforcement Learning';

  const tags = [
    'reinforcement learning',
    'autonomous navigation',
    'physics simulation',
  ];

  // TODO: store date in proper date format & parse it into text
  const date = 'Mar 2021 - Sept 2021';
  const location = 'UCL RPL Lab';

  const imgSrc = '/images/projects/namo.jpg';
  const imgAlt = 'Custom neural network architecture and screenshot demos';

  const caption =
    'Top: Multimodal network architecture used for function approximation, Bottom: Example trajectory performed by robot, in simulated environments in Isaac Gym';

  const mainText = (
    <>
      <p>
        <b>Problem</b>: The Navigation Among Movable Obstacle (NAMO) problem,
        where agents can move objects in its environments to reach otherwise
        unreachable positions.
      </p>
      <p>
        <b>Methodology</b>: We reframed the NAMO problem into a reinforcement
        learning problem, and used a multimodal deep neural network for function
        approximation.
      </p>
      <p>
        <b>Technical Detail</b>: The network was implemented and trained with
        PyTorch, and NVIDIA Isaac Gym was used for physics simulation. Custom
        environments were built to generate random NAMO scenes.
      </p>
      <p>
        <b>Results</b>: The final policy is able to understand the relationships
        between the object, the room configuration, and its goal. It generalises
        to unseen rooms and object positions, and we tested the network on a
        quadrupedal robot.
      </p>
    </>
  );

  const links = (
    <div className={classes.Links}>
      <p>
        <Link href='https://arxiv.org/pdf/2303.02407.pdf' target='_blank'>
          Paper
        </Link>{' '}
        |{' '}
        <Link
          href='https://github.com/RPL-CS-UCL/namo_experiment'
          target='_blank'
        >
          GitHub Repo
        </Link>{' '}
        |{' '}
        <Link href='https://youtu.be/CRjkxNuPxCc' target='_blank'>
          Video
        </Link>
      </p>
    </div>
  );

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Layout>
        <Content>
          <Project
            title={title}
            tags={tags}
            date={date}
            location={location}
            imgSrc={imgSrc}
            imgAlt={imgAlt}
            caption={caption}
            mainText={mainText}
            links={links}
          />
        </Content>
      </Layout>
    </>
  );
};

export default Index;
