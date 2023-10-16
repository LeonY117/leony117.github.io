import React from 'react';

import Project from '@/components/Project/Project';
import Layout from '@/hoc/Layout/Layout';
import Content from '@/hoc/Content/Content';
import Link from 'next/link';

import classes from '../ProjectPage.module.css';

const Index = () => {
  const title =
    'Multi-task learning for text-based emotion detection across disparate label spaces';

  const tags = ['language model', 'multi-task learning', 'emotion detection'];

  // TODO: store date in proper date format & parse it into text
  const date = 'Dec 2022 - Mar 2023';
  const location = 'NLP project';

  const imgSrc = '/images/projects/emotion.jpg';
  const imgAlt = 'Network architecture diagram and emotion correlation graph';

  const mainText = (
    <>
      <p>
        <b>Problem</b>: The literature uses many different emotion labels, we
        wanted to find a way to unify them.
      </p>
      <p>
        <b>Methodology</b>: A BERT-based language model that’s fine-tuned with a
        multi-task framework. The model is trained on three different tasks
        simultaneously: a) multi-class classification, b) regression, c)
        multi-label classification.
      </p>
      <p>
        <b>Technical Detail</b>: Each training batch can contain random number
        of tasks. The loss had to be carefully computed to accommodate this
        unique setting.
      </p>
      <p>
        <b>Results</b>: We found many interesting properties of this framework,
        such as when learning datasets that weakly correlate with each other,
        the small dataset (~few hundred samples) gets the most performance
        gains. On the other hand, if a particular task has sufficient data,
        multi-task learning behaves more like a regulariser and may worsen
        performance
      </p>
    </>
  );

  const links = (
    <div className={classes.Links}>
      <p>
        <Link href='' target='_blank'>
          Report
        </Link>{' '}
        |{' '}
        <Link
          href='https://github.com/LeonY117/EmotionAnalysis'
          target='_blank'
        >
          GitHub Repo
        </Link>{' '}
        |{' '}
        <Link
          href='https://github.com/LeonY117/EmotionAnalysis/blob/main/notebooks/demo.ipynb'
          target='_blank'
        >
          Notebook
        </Link>{' '}
      </p>
    </div>
  );

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
