import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Head, UserInfo, Charts, Repos, Footer, Corner } from '../components';
import GhPolyglot from 'gh-polyglot';
// import { mockUserData, mockLangData, mockRepoData } from '../utils';

const User = props => {
  const username = props.query.id;
  const [userData, setUserData] = useState(null);
  const [langData, setLangData] = useState([]);
  const [repoData, setRepoData] = useState([]);

  useEffect(() => {
    // Set user data
    fetch(`https://api.github.com/users/${username}`)
      .then(response => response.json())
      .then(json => setUserData(json));

    // Set language data
    const me = new GhPolyglot(`${username}`);
    me.userStats((err, stats) => {
      if (err) {
        throw new Error(err);
      }
      setLangData(stats);
    });

    // Set repo data
    fetch(`https://api.github.com/users/${username}/repos`)
      .then(response => response.json())
      .then(json => setRepoData(json));

    // setUserData(mockUserData);
    // setLangData(mockLangData);
    // setRepoData(mockRepoData);
  }, []);

  return (
    <main>
      <Head title={`${username ? `OctoProfile | ${username}` : 'OctoProfile'}`} />

      <Corner />

      {userData && <UserInfo userData={userData} />}

      {langData.length && repoData.length && <Charts langData={langData} repoData={repoData} />}

      {repoData.length && <Repos repoData={repoData} />}

      <Footer />
    </main>
  );
};

User.propTypes = {
  query: PropTypes.object,
};

export default User;
