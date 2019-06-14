import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Head, UserInfo, Charts, Repos, Footer, Corner } from '../components';
// import GhPolyglot from 'gh-polyglot';
import { mockUserData, mockLangData, mockRepoData } from '../utils';

const User = props => {
  const username = props.query.id;
  console.warn(username);

  const [userData, setUserData] = useState(null);
  const [langData, setLangData] = useState([]);
  const [repoData, setRepoData] = useState([]);

  useEffect(() => {
    // fetch(`https://api.github.com/users/${username}`)
    //   .then(response => response.json())
    //   .then(json => {
    //     console.log(json);
    //     setUserData(json);
    //   });

    // const me = new GhPolyglot(`${username}`);
    // me.userStats((err, stats) => {
    //   if (err) {
    //     throw new Error(err);
    //   }
    //
    // });

    setUserData(mockUserData);
    setLangData(mockLangData);
    setRepoData(mockRepoData);
  }, []);

  // console.log(userData);
  // console.log(langData);
  // console.log(repoData);

  return (
    <main>
      <Head title="OctoProfile" />

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
