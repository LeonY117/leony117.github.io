import React from 'react';
import Content from '@/hoc/Content/Content';
import Layout from '@/hoc/Layout/Layout';

const Index = () => {
  return (
    <Layout>
      <Content>
        <h1>404 - Page Not Found</h1>
        <p>Oops, you might've entered a link that expired / doesn't exist</p>
      </Content>
    </Layout>
  );
};

export default Index;
