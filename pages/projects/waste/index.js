import React from 'react';

import Project from '@/components/Project/Project';
import Layout from '@/hoc/Layout/Layout';
import Content from '@/hoc/Content/Content';
import Link from 'next/link';

import classes from '../ProjectPage.module.css';

const Index = () => {
  const title =
    'Waste object detection with YOLO and SSD using transfer learning';

  const tags = ['object detection', 'industry project'];

  // TODO: store date in proper date format & parse it into text
  const date = 'July 2020 - Feb 2021';
  const location = 'Manchester University';

  const imgSrc = '/images/projects/waste.jpg';
  const imgAlt = 'Example detection result';

  const mainText = (
    <>
      <p>
        <b>Problem</b>: This was a industry project for a waste-recycling
        company who partnered with Manchester University. The goal is to find a
        set of objects from piles of waste to find items of interest (such as
        bin bags, mattresses, and electronics).
      </p>
      <p>
        <b>Methodology</b>: The biggest challenge was data collection. I
        initiated the re-annotation of the dataset to make labels more
        consistent and classes more balanced. This alone improved mean average
        precision by 15%, with much more consistent detection rates from our
        models.
      </p>
      <p>
        <b>Technical Detail</b>: We implemented FRCNN and SSD models with
        ResNet101 as the backbone encoder, developed using TensorFlow. The
        networks were trained on AWS.
      </p>
      <p>
        <b>Results</b>: The training recipes and improved datasets were used to
        develop the final product by the waste recycling company, which were
        later deployed in practice.
      </p>
    </>
  );

  const links = null;

  return (
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
  );
};

export default Index;
