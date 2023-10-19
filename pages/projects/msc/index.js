import React from 'react';

import Project from '@/components/Project/Project';
import Layout from '@/hoc/Layout/Layout';
import Content from '@/hoc/Content/Content';
import Link from 'next/link';
import Head from 'next/head';

import classes from '../ProjectPage.module.css';

const Index = () => {
  const title =
    'Efficient Bayesian Neural Networks for Outdoor Semantic Scene Understanding Tasks in Robotics';

  const tags = [
    'computer vision',
    'bayesian deep learning',
    'scene understanding',
    'efficient networks',
  ];

  // TODO: store date in proper date format & parse it into text
  const date = 'May 2023 - Sept 2023';
  const location = 'MSc Thesis';

  const imgSrc = '/images/projects/msc.jpg';
  const imgAlt =
    'bayesian neural network architecture diagram and sample outputs';

  const mainText = (
    <>
      <p>
        <b>Problem</b>: Deep neural networks often suffer from overconfidence
        and slow computation. My thesis focused on 1) making networks more
        efficient and 2) perform fast Bayesian inference on these networks
      </p>
      <p>
        <b>Methodology</b>: A segmentation network was built using inverted
        residual blocks. A novel Bayesian inference technique is proposed using
        stochastic depths.
      </p>
      <p>
        <b>Technical Detail</b>: The network (built in Pytorch) is designed to
        be scalable in terms of parameters, ranging anywhere from 0.5M to 10M
        parameters.
      </p>
      <p>
        <b>Results</b>: 74% mIOU on CamVid test set, with only 10M parameters.
        It outperformed many SOTA methods in terms of parameter-performance
        trade-off. The proposed Bayesian inference with stochastic depth also
        achieves higher uncertainty calibration compared to dropout-based
        Bayesian methods.
      </p>
    </>
  );

  const links = (
    <div className={classes.Links}>
      <p>
        <Link
          href='/pdfs/MSc_Thesis_LeonYao.pdf'
          target='_blank'
          rel='noopener noreferrer'
        >
          Thesis
        </Link>{' '}
        |{' '}
        <Link href='https://github.com/LeonY117/msc_project' target='_blank'>
          GitHub Repo
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
            mainText={mainText}
            links={links}
          />
        </Content>
      </Layout>
    </>
  );
};

export default Index;
