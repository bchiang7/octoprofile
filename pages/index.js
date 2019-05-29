import React from 'react';
import Link from 'next/link';
import Head from '../components/head';
import Nav from '../components/nav';
import styled from 'styled-components';

const Title = styled.h1`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 81px;
  letter-spacing: -0.055em;
  line-height: 0.9em;
  text-indent: -0.03em;
  margin-bottom: 4rem;
  margin-top: 10px;
  font-weight: 740;
`;

const Home = () => (
  <div>
    <Head title="Home" />
    <Nav />

    <div>
      <Title>The Inter typeface family</Title>
      <p>
        To get started, edit <code>pages/index.js</code> and save to reload.
      </p>

      <div>
        <Link href="https://github.com/zeit/next.js#getting-started">
          <a>
            <h3>Getting Started &rarr;</h3>
            <p>Learn more about Next on Github and in their examples</p>
          </a>
        </Link>
        <Link href="https://open.segment.com/create-next-app">
          <a>
            <h3>Examples &rarr;</h3>
            <p>
              Find other example boilerplates on the <code>create-next-app</code> site
            </p>
          </a>
        </Link>
        <Link href="#">
          <a>
            <h3>Create Next App &rarr;</h3>
            <p>Was this tool helpful? Let us know how we can improve it</p>
          </a>
        </Link>
      </div>
    </div>
  </div>
);

export default Home;
