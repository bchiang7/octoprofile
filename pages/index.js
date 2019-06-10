import React, { useState } from 'react';
import Router from 'next/router';
import Octicon, { MarkGithub } from '@primer/octicons-react';
import Head from '../components/Head';
import styled from 'styled-components';
import { theme, mixins } from '../style';
const { colors } = theme;

const StyledContainer = styled.div`
  ${mixins.flexCenter};
  background-color: ${colors.black};
  color: ${colors.offWhite};
  height: 100vh;

  form {
    background-color: transparent;
    border-radius: 5px;
    padding: 2rem;
    width: 50vw;
    max-width: 700px;
    text-align: center;

    svg {
      color: ${colors.blue};
    }

    label {
      display: block;
      font-size: 2rem;
      font-weight: 400;
      margin: 2rem;
    }

    input {
      background-color: ${colors.darkGrey};
      color: ${colors.offWhite};
      font-size: 3rem;
      font-weight: 400;
      text-align: center;
      outline: 0;
      border: 0;
      border-radius: 0.5rem;
      width: 100%;
      padding: 1rem;
    }
  }
`;

const Home = () => {
  const [username, setUsername] = useState('');
  const handleChange = e => setUsername(e.target.value);

  return (
    <main>
      <Head title="OctoProfile" />

      <StyledContainer>
        <form
          onSubmit={e => {
            e.preventDefault();
            Router.push({
              pathname: '/user',
              query: { id: username },
            });
          }}>
          <Octicon icon={MarkGithub} size="large" />
          <label htmlFor="username">Find Your OctoProfile</label>
          <input name="username" type="text" onChange={handleChange} placeholder="e.g. octocat" />
        </form>
      </StyledContainer>
    </main>
  );
};

export default Home;
