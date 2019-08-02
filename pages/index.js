import React, { useState, useEffect } from 'react';
import Router from 'next/router';
import Octicon, { MarkGithub } from '@primer/octicons-react';
import { Head } from '../components';
import styled from 'styled-components';
import { theme, mixins } from '../style';

const { colors, fonts } = theme;

const StyledContainer = styled.div`
  ${mixins.flexCenter};
  background-color: ${colors.black};
  background-image: linear-gradient(${colors.black} 0%, ${colors.darkGrey} 100%);
  color: ${colors.offWhite};
  height: 100vh;

  form {
    background-color: transparent;
    border-radius: 5px;
    padding: 2rem;
    margin-bottom: 20vh;
    max-width: 600px;
    text-align: center;
    svg {
      color: ${colors.blue};
    }
    label {
      display: block;
      font-size: 2.5rem;
      font-weight: 500;
      margin: 2rem;
    }
    input {
      background-color: #26303c;
      outline: 0;
      border: 0;
      border-radius: 0.25rem;
      width: 100%;
      max-width: 500px;
      margin: 0 auto;
      padding: 1rem;
      color: ${colors.lightblue};
      font-family: ${fonts.mono};
      font-size: 2rem;
      font-weight: 400;
      text-align: center;
    }

    .submit {
      ${mixins.submitButton};
      margin: 1rem 0;
      filter: none;
      width: 100%;
      max-width: 500px;
      backgound-color: white !important;
    }

    .errMessage {
      color: #e54949;
    }
  }
`;

const Home = () => {
  const [username, setUsername] = useState('');
  const [errMessage, setErrMessage] = useState(''); // sets state to hold error message if user tries to log in with an empty input field
  const handleChange = e => {
    setUsername(e.target.value);
    setErrMessage(''); //clears error message
  };

  useEffect(() => {
    const savedUsername = localStorage.getItem('username'); //tries to get a valid username already saved  to state, if any
    if (savedUsername) {
      // checks to see if a valid username has already been saved
      // a valid username is saved to localstorage on previous login if username was valid
      Router.push({
        pathname: '/user',
        query: { id: savedUsername },
      });
    }
  });

  return (
    <main>
      <Head title="OctoProfile" />

      <StyledContainer>
        <form
          onSubmit={e => {
            e.preventDefault();
            if (!username) {
              // set error message if user did not input username
              setErrMessage('Please input a username');
              return null;
            }
            Router.push({
              pathname: '/user',
              query: { id: username },
            });
          }}>
          <Octicon icon={MarkGithub} size="large" />
          <label htmlFor="username">Find Your OctoProfile</label>
          <input
            placeholder="Github username..."
            name="username"
            type="text"
            onChange={handleChange}
          />
          <button className="submit">Submit</button>
          {errMessage && <p className="errMessage">{errMessage}</p>}
        </form>
      </StyledContainer>
    </main>
  );
};

export default Home;
