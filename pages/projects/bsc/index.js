import React from 'react';

import Project from '@/components/Project/Project';
import Layout from '@/hoc/Layout/Layout';
import Content from '@/hoc/Content/Content';
import Link from 'next/link';
import Head from 'next/head';

import classes from '../ProjectPage.module.css';

const Index = () => {
  const title =
    'ShorelineNet: An Efficient Deep Learning Approach for Shoreline Semantic Segmentation for Unmanned Surface Vehicles';

  const tags = [
    'computer vision',
    'semantic segmentation',
    'efficient networks',
  ];

  // TODO: store date in proper date format & parse it into text
  const date = 'Nov 2020 - Mar 2021';
  const location = 'BSc Thesis';

  const imgSrc = '/images/projects/bsc.jpg';
  const imgAlt = 'Network architecture diagram';

  const caption =
    'Top: Encoder-decoder network architecture that uses MobileNetV2 as the backbone; Bottom: Breakdown of a decoder block, using dropout layers and skip connections';

  const mainText = (
    <>
      <p>
        <b>Problem</b>: Object segmentation in the shoreline environment require
        the algorithm to be both accurate and fast.
      </p>
      <p>
        <b>Methodology</b>: A light-weight encoder-decoder architecture using
        MobileNetV2 as the baseline network.
      </p>
      <p>
        <b>Technical Detail</b>: The network was implemented and trained with
        PyTorch, and trained with focal loss and heavy dropout layers.
      </p>
      <p>
        <b>Results</b>: 73% F1 score and 25fps, making it more than double the
        speed of sota methods with similar accuracy.
      </p>
    </>
  );

  const links = (
    <div className={classes.Links}>
      <p>
        <Link
          href='https://ieeexplore.ieee.org/abstract/document/9636614'
          target='_blank'
        >
          Paper
        </Link>{' '}
        |{' '}
        <Link href='https://github.com/LeonY117/ShorelineNet' target='_blank'>
          GitHub Repo
        </Link>{' '}
        |{' '}
        <Link
          href='https://www.youtube.com/watch?v=bt4II6l_Cfo'
          target='_blank'
        >
          Video
        </Link>{' '}
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
