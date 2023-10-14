import React from 'react';

import Project from '@/components/Project/Project';
import Layout from '@/hoc/Layout/Layout';
import Content from '@/hoc/Content/Content';

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

  const imgURL = '/images/projects/namo.png';
  const imgAlt = 'Custom neural network architecture and screenshot demos';

  const mainText = (
    <>
      <p>
        <b>Problem</b>: Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Curabitur ut malesuada neque, vitae consequat enim.
      </p>
      <p>
        <b>Technical Detail</b>: Aliquam vel sodales neque, gravida ornare enim.
        Suspendisse dapibus mattis mi. Vestibulum vehicula pulvinar velit, at
        sodales nibh convallis vel. Nam id volutpat nulla.
      </p>
    </>
  );

  return (
    <Layout>
      <Content>
        <Project
          title={title}
          tags={tags}
          date={date}
          location={location}
          imgURL={imgURL}
          imgAlt={imgAlt}
          mainText={mainText}
        />
      </Content>
    </Layout>
  );
};

export default Index;
