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
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Curabitur ut malesuada neque, vitae consequat enim. Sed
                  vulputate arcu ut ante egestas, nec pretium justo molestie.
                  Aliquam vel sodales neque, gravida ornare enim.
                </p>
                <p>
                  Pellentesque habitant morbi tristique senectus et netus et
                  malesuada fames ac turpis egestas. Donec malesuada orci ac
                  dignissim sagittis.Suspendisse dapibus mattis mi. Vestibulum
                  vehicula pulvinar velit, at sodales nibh convallis vel. Nam id
                  volutpat nulla.
                </p>
                <p>
                  Nulla lacus enim, vehicula eget mi a, condimentum posuere est.
                  Quisque rutrum id ex sed dapibus. Morbi sodales orci non dui
                  pharetra, eget scelerisque tellus cursus. Cras sit amet velit
                  ultrices, blandit diam sit amet, malesuada sem.
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
