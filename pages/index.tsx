import Head from 'next/head';

import { Home } from '@home/Home';

export const IndexPage = () => {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="description" content="Home page" />
      </Head>

      <Home />
    </>
  );
};

export default IndexPage;
