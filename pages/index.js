import Head from 'next/head';
import Content from '../hoc/Content/Content';
import Layout from '../hoc/Layout/Layout';

const Index = () => {
  return (
    <div>
      <Head>
        <title>leonyao</title>
        <meta name='description' content='Home Page' />
      </Head>
      <Layout>
        <Content>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            ut malesuada neque, vitae consequat enim. Sed vulputate arcu ut ante
            egestas, nec pretium justo molestie. Aliquam vel sodales neque,
            gravida ornare enim.
          </p>
          <p>
            Pellentesque habitant morbi tristique senectus et netus et malesuada
            fames ac turpis egestas. Donec malesuada orci ac dignissim
            sagittis.Suspendisse dapibus mattis mi. Vestibulum vehicula pulvinar
            velit, at sodales nibh convallis vel. Nam id volutpat nulla.
          </p>
          <p>
            Nulla lacus enim, vehicula eget mi a, condimentum posuere est.
            Quisque rutrum id ex sed dapibus. Morbi sodales orci non dui
            pharetra, eget scelerisque tellus cursus. Cras sit amet velit
            ultrices, blandit diam sit amet, malesuada sem.
          </p>
        </Content>
      </Layout>
    </div>
  );
};

export default Index;
