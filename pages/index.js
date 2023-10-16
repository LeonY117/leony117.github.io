import Head from 'next/head';
import Content from '../hoc/Content/Content';
import Layout from '../hoc/Layout/Layout';
import Image from 'next/image';

import classes from './index.module.css';

const Index = () => {
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
              <div className={classes.MainImage}>
                <Image
                  src='/images/profile_pic.jpg'
                  alt='picture of me'
                  layout='fill'
                  objectFit='cover'
                />
              </div>
            </div>
          </main>
        </Content>
      </Layout>
    </>
  );
};

export default Index;
